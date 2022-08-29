module.exports = {
    content: [
        "./node_modules/flotiq-components-react/dist/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'light-blue': '#E9F3FF',
                primary: '#0083FC',
                'primary-2': '#015BD7',
                'dark-blue': '#141046',
            },
        },
    },
    plugins: [],
    presets: [
        require('./node_modules/flotiq-components-react/dist/tailwind.preset'), // Flotiq Component theme presets
    ],
}
