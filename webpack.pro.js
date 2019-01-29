const merge = require( 'webpack-merge' );
const common = require( './webpack.config.js' );

module.exports = merge( common, {
    mode: 'production',
    optimization: {
        usedExports: true,
        // minimize: false
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                options: {
                    configFileName: 'tsconfig.pro.json'
                },
                exclude: /node_modules/
            }
        ]
    }
} );