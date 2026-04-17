/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['flotiq-components-react'],
    images: {
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        dangerouslyAllowSVG: true,
        remotePatterns: [{ hostname: 'api.flotiq.com' }],
    },
    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js',
            },
        },
    },
}

module.exports = nextConfig
