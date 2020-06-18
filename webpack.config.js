const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env = {}) => {
    const {mode = 'development'} = env

    const isProd = mode === 'production';
    const isDev = mode === 'development';

    const styleExtractor = () => {
        if (isProd) {
            return [MiniCssExtractPlugin.loader, 'css-loader']
        } return ['style-loader', 'css-loader']
    };

    const pluginsExtractor = () => {
       const plugins = [
            new HTMLWebpackPlugin({
                title: 'Test task',
                buildTime: new Date().toDateString(),
                template: 'public/index.html',
                favicon: "./src/images/favicon-32x32.png"
            }),
        ]
        if (isProd) {
           plugins.push(new MiniCssExtractPlugin({
                filename: 'main-[hash:6].css'
            }))
        }
        return plugins;
    }

    return {
        mode: isProd ? 'production': isDev && 'development',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
    
                {
                    test: /\.css/,
                    use: styleExtractor(),
                },
    
                {
                    test: /\.(scss|sass)/,
                    use: [
                        ...styleExtractor(),
                        'sass-loader'
                    ]
                },
    
                {
                    test: /\.(png|jpg|jpeg|gif|ico|svg|webP)$/,
                    use: [{
                        loader: "file-loader",
                        options: {
                            outputPath: './images',
                            name: '[name]-[sha1:hash:7].[ext]',
                        }
                    }]
                },
    
                {
                    test: /\.(ttf|woff|woff2|otf|eot)$/,
                    use: [{
                        loader: "file-loader",
                        options: {
                            outputPath: './fonts',
                            name: '[name].[ext]',
                        }
                    }]
                }
            ]
        },
        plugins: pluginsExtractor(),
        devServer: {
            open: true
        },
    }
}
