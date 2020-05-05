const path = require('path');
const webpack = require('webpack');

function resolveAlias() {
    const srcDirectory = path.resolve(__dirname);
    return {
        '@cyIntegration': `${srcDirectory}/integration`,
        '@cySupport': `${srcDirectory}/support`,
        '@cyGql': `${srcDirectory}/gql`,
        '@cyConstants': `${srcDirectory}/integration/constants`,
        '@cySql': `${srcDirectory}/sql`,
        '@cyPlugins': `${srcDirectory}/plugins`,
        '@cyCommon': `${srcDirectory}/integration/common`,
    };
}

module.exports = {
    resolve: {
        extensions: ['.js', '.feature'],
        alias: resolveAlias(),
    },
    plugins: [new webpack.IgnorePlugin(/mssql/, /\/knex\//)],
    node: { fs: 'empty', child_process: 'empty', readline: 'empty' },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            presets: [['@babel/preset-env']],
                        },
                    },
                ],
            },
            {
                test: /\.feature$/,
                use: [
                    {
                        loader: 'cypress-cucumber-preprocessor/loader',
                    },
                ],
            },
        ],
    },
};
