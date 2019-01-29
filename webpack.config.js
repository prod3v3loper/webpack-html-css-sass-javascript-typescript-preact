/**
 * Webpack with TypeScript, Babel and Preact
 * 
 * @see https://webpack.js.org/guides/getting-started/
 * @see https://www.typescriptlang.org/index.html
 * @see https://babeljs.io/setup
 * @see https://preactjs.com/guide/getting-started
 */
const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' ); // https://github.com/jantimon/html-webpack-plugin
const CleanWebpackPlugin = require( 'clean-webpack-plugin' ); // https://webpack.js.org/guides/output-management/

module.exports = {
    entry: {
        main: './src/index.tsx'
    },
    // https://webpack.js.org/concepts/#output
    output: {
        path: path.resolve( __dirname, './dist' ),
        // publicPath: '',
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    // Chain the rules to seperate
                    // If sass not exists get css
                    {
                        loader: 'style-loader',
                        // use when css not import in javascript
                        // options: {
                        //     insertAt: 'top', // Insert style tag at top of <head>
                        //     singleton: true, // this is for wrap all your style in just one style tag
                        // }
                    },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin( ['dist'] ),
        // Use when you need html file
        new HtmlWebpackPlugin( {
            title: 'WebPack - Preact',
            template: './public/index.html',
            filename: 'index.html',
            inlineSource: '.(js|css)$' // embed all javascript and css inline
        } ),
    ]
};