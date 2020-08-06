// const path = require('path');

// const postCSSPlugins = [
//     require('postcss-import'),
//     require('postcss-mixins'),
//     require('postcss-nested'),
//     require('postcss-simple-vars'),
//     require('postcss-hexrgba'),
//     require('autoprefixer')
// ]

// module.exports = {
//     entry: './app/assets/scripts/App.js',
//     output: {
//         filename: 'bundled.js',
//         path: path.resolve(__dirname, 'app')
//     },
//     mode: 'development',
//     //Setting up webpack dev server
//     devServer: {
//         before: function(app, server){
//             server._watch('./app/**/*.html')
//         },
//         contentBase: path.join(__dirname, 'app'),
//         watchContentBase: true,
//         hot: true,
//         port: 8080,
//         host: '0.0.0.0'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.css$/i,
//                 use: ['style-loader', 'css-loader?url=false',  {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
//             },
//             {
//                 test: /\.scss$/,
//                 use: ['style-loader', 'css-loader', 'sass-loader']
//             }
//         ]
//     }
// }


const currentTask = process.env.npm_lifecycle_event

const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const HTMLWebpackPlugin = require("html-webpack-plugin");

const fse = require('fs-extra')

const path = require('path');

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('postcss-hexrgba'),
    require('autoprefixer')
]

class RunAfterCompile {
    apply(compiler) {
        compiler.hooks.done.tap('Copy Images', function() {
            fse.copySync('./app/assets/images', './docs/assets/images')
        })
    }
}

let cssConfig = {
        test: /\.css$/i,
        use: ['css-loader?url=false',  {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
    }

let sassConfig = 
    {
        test: /\.scss$/,
        use: ['css-loader?url=false', 'sass-loader']
    }

let pages = fse.readdirSync('./app').filter(file => {
    return file.endsWith('.html')
}).map((page) => {
    return new HTMLWebpackPlugin({
        filename: page,
        template: `./app/${page}`
    })
})

let config = {
    entry: './app/assets/scripts/App.js',
    plugins: pages,
    module: {
        rules: [
            cssConfig, sassConfig
        ]
    }
}


//DEV
if(currentTask == "dev") {
    cssConfig.use.unshift('style-loader')
    sassConfig.use.unshift('style-loader')
    config.output = {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    //Setting up webpack dev server
    config.devServer = {
        before: function(app, server){
            server._watch('./app/**/*.html')
        },
        contentBase: path.join(__dirname, 'app'),
        watchContentBase: true,
        hot: true,
        port: 8080,
        host: '0.0.0.0'
    }
    config.mode = "development"
}


//BUILD
if(currentTask == "build") {
    config.module.rules.push({
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader:'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    })
    cssConfig.use.unshift(MiniCSSExtractPlugin.loader);
    sassConfig.use.unshift(MiniCSSExtractPlugin.loader);
    config.output = {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'docs')
    }
    config.mode = "production"
    config.optimization = {
        splitChunks: {
            chunks: 'all'
        }
    }
    config.plugins.push(
        new CleanWebpackPlugin(), 
        new MiniCSSExtractPlugin({filename: 'styles.[chunkhash].css'}),
        new RunAfterCompile()
        )
}



module.exports = config




