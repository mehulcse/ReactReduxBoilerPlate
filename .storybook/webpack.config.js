const path = require('path');
// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

// Export a function. Accept the base config as the only param.
module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig, env);
    // env has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules = config.module.rules.concat([
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
            include: /(Content\/fonts|\.UI\/images)/,
            loader: 'file-loader',
            query: {
                name: 'static/media/[name].[hash:8].[ext]'
            }
        }
    ]);
    config.resolve = {
        modules: [path.resolve(__dirname, '..', 'src'), 'node_modules']
    };

    return config;
};
