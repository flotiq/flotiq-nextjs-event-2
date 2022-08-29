import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../layouts/layout'
import EventDescriptionCard from '../components/event/EventDescriptionCard'
import Contact from '../sections/Contact'
import NextEvents from '../sections/NextEvents'
import { getEventAll, getEventBySlug } from '../lib/event'
import config from '../lib/config'
import FlotiqImage from '../lib/flotiqImage'

const EventTemplate = ({ data, pageContext }) => (
    <Layout additionalClass={['bg-white']}>
        <Helmet>
            <title>{config.name}</title>
            <meta name="description" content={config.description} />
        </Helmet>
        <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-0">
            <EventDescriptionCard
                name={data.name}
                headerImage={FlotiqImage.getSrc(data.image[0], 0, 0)}
                date={data.date}
                description={data.description}
                address={data.address}
                price={data.price}
            />
        </div>
        <NextEvents
            events={pageContext.nextEvents}
            headerText="Next Events"
            pageContext={pageContext}
        />
        <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-10">
            <Contact
                headerText="Do you have more questions?"
                nameInputLabel="Name"
                emailInputLabel="Email"
                messageInputLabel="Message"
                buttonLabel="Send"
            />
        </div>
    </Layout>
)

export default EventTemplate

export async function getStaticProps({ params }) {
    // Fetch project
    const event = await getEventBySlug(params.page)
    const filters = `{"date":{"type":"greaterThan","filter":"${event.data[0].date}"}}`
    const nextEvents = await getEventAll(1, 4, filters)

    return {
        props: {
            data: event.data[0],
            pageContext: { nextEvents: nextEvents.data },
        },
    }
}

export async function getStaticPaths() {
    const fetchAllEvents = await getEventAll()
    const allEvents = fetchAllEvents.data
    const paths = []

    for (let i = 0; i < allEvents.length; i += 1) {
        paths.push({
            params: { page: allEvents[i].slug },
        })
    }

    return {
        paths,
        fallback: false,
    }
}
