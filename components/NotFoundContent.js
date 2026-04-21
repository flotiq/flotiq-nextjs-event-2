'use client'

import React from 'react'
import Link from 'next/link'
import { Button, Header } from 'flotiq-components-react'
import { Helmet } from 'react-helmet-async'
import Layout from '../layouts/layout'

const NotFoundContent = () => (
    <Layout>
        <Helmet>
            <title>Page not found</title>
        </Helmet>
        <Header alignment="center" additionalClasses={['my-20', '!py-20']}>
            Page not found, sorry
        </Header>
        <div className="text-center my-20 py-20">
            <Link href="/">
                <Button label="Go back to index" />
            </Link>
        </div>
    </Layout>
)

export default NotFoundContent
