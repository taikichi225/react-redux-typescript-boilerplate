module.exports = {
    entry: './src/index.tsx',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: [
                    {
                    loader: 'tslint-loader',
                    options: {
                        typeCheck: true,
                        fix: true,
                    },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    }
}