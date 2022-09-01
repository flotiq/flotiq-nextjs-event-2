import React from 'react'
import { Helmet } from 'react-helmet'
import { Pagination } from 'flotiq-components-react'
import Layout from '../layouts/layout'
import EventCards from '../sections/EventCards'
import config from '../lib/config'
import { getEventAll } from '../lib/event'

const Home = ({ data }) => (
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

export default Home

export async function getStaticProps({ params }) {
    const events = await getEventAll(params.page, config.event.eventPerPage)

    return {
        props: {
            data: events,
        },
    }
}

export async function getStaticPaths() {
    const fetchAllEvents = await getEventAll(1, config.event.eventPerPage)
    const paths = []

    for (let i = 0; i < fetchAllEvents.total_pages; i += 1) {
        paths.push({
            params: { page: `${i + 1}` },
        })
    }

    return {
        paths,
        fallback: false,
    }
}
