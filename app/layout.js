import GoogleAnalytics from '../components/GoogleAnalytics'
import config from '../lib/config'
import '../styles/globals.css'

export const metadata = {
    title: {
        default: config.siteMetadata.title,
        template: `%s | ${config.siteMetadata.title}`,
    },
    description: config.siteMetadata.description,
    icons: {
        icon: '/favicon.png',
    },
}

const RootLayout = ({ children }) => (
    <html lang="en">
        <body>
            <GoogleAnalytics />
            {children}
        </body>
    </html>
)

export default RootLayout
