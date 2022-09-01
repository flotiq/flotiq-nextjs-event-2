const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['flotiq-components-react'])

module.exports = withPlugins(
    [
        withTM,
        [
            withImages,
            {
                exclude: /\.svg$/,
            },
        ],
    ],

    {
        async rewrites() {
            return [
                {
                    source: '/',
                    destination: '/1',
                },
            ]
        },
        images: {
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            dangerouslyAllowSVG: true,
            disableStaticImages: true,
            domains: ['api.flotiq.com'],
        },
        webpack: (config, options) => {
            if (!options.isServer) {
                config.resolve.alias['@sentry/node'] = '@sentry/browser'
            }
            config.module.rules.push({
                test: /\.svg$/,
                issuer: { and: [/\.(js|ts)x?$/] },
                use: ['@svgr/webpack'],
            })
            return config
        },
    }
)
