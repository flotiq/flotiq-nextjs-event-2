import React from 'react'
import { Helmet } from 'react-helmet'
import { Pagination } from 'flotiq-components-react'
import Layout from '../layouts/layout'
import EventCards from '../sections/EventCards'
import config from '../lib/config'
import { getEventAll } from '../lib/event'

export default function Home({ data }) {
    return (
        <Layout additionalClass={['bg-white']}>
            <Helmet>
                <title>{config.siteMetadata.title}</title>
                <meta
                    name="description"
                    content={config.siteMetadata.description}
                />
            </Helmet>
            <EventCards
                events={data.data}
                headerText="Upcoming events"
                additnalClasses={['py-10']}
            />
            <Pagination
                numOfPages={data.total_pages}
                page={data.current_page}
                rounded="none"
            />
        </Layout>
    )
}

export async function getStaticProps() {
    // Fetch all events
    const events = await getEventAll()

    return {
        props: {
            data: events,
        },
    }
}
