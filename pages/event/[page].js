import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../../layouts/layout'
import EventDescriptionCard from '../../components/event/EventDescriptionCard'
import Contact from '../../sections/Contact'
import NextEvents from '../../sections/NextEvents'
import {
    getEventAll,
    getEventBySlug,
    getEventPrevious,
    getEventNext,
} from '../../lib/event'
import config from '../../lib/config'
import FlotiqImage from '../../lib/flotiqImage'

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
    const event = await getEventBySlug(params.page)
    const filtersMoreEvents = `{"date":{"type":"greaterThan","filter":"${event.data[0].date}"}}`
    const moreEvents = await getEventAll(1, 3, filtersMoreEvents)
    const nextEvents = await getEventNext(event.data[0].date)
    const prevEvents = await getEventPrevious(event.data[0].date)

    return {
        props: {
            data: event.data[0],
            pageContext: {
                nextEvents: moreEvents.data,
                previous: prevEvents?.data?.length > 0 && prevEvents?.data?.[0],
                next: nextEvents?.data?.length > 0 && nextEvents?.data?.[0],
            },
        },
    }
}

export async function getStaticPaths() {
    const fetchAllEvents = await getEventAll(1, 10)
    const allEvents = fetchAllEvents.data
    const paths = []
    const eventsCount = allEvents ? allEvents.length : 0;
    for (let i = 0; i < eventsCount; i += 1) {
        paths.push({
            params: { page: allEvents[i].slug },
        })
    }

    return {
        paths,
        fallback: false,
    }
}
