const withImages = require("next-images")
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['flotiq-components-react'])

module.exports = withPlugins([
        withTM,
        [
            withImages,
            {
                exclude: /\.svg$/
            }
        ],
    ],
    {
        images: {
            dangerouslyAllowSVG: true,
        },
        webpack: (config, options) => {
            if (!options.isServer) {
                config.resolve.alias["@sentry/node"] = "@sentry/browser";
            }
            config.module.rules.push({
                test: /\.svg$/,
                use: ["@svgr/webpack"]
            });
            return config;
        }
    }
);
