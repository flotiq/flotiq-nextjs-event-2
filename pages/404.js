import React from 'react'
import { Helmet } from 'react-helmet'
import Link from 'next/link'
import { Button, Header } from 'flotiq-components-react'
import Layout from '../layouts/layout'

const NotFoundPage = () => (
    <Layout>
        <Helmet>
            <title>Page not found</title>
        </Helmet>
        <Header alignment="center" additionalClasses={['my-20', '!py-20']}>
            Page not found, sorry
        </Header>
        <div className="text-center my-20 py-20">
            {/* Example usage of button */}
            <Link href="/" passHref>
                <a href="replace">
                    <Button label="Go back to index" />
                </a>
            </Link>
        </div>
    </Layout>
)

export default NotFoundPage
