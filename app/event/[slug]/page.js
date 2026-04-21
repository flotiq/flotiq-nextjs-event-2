import React, { cache } from 'react'
import { notFound } from 'next/navigation'
import EventTemplate from '../../../templates/EventTemplate'
import replaceUndefinedWithNull from '../../../lib/sanitize'
import {
    getEventBySlug,
    getEventNext,
    getEventPrevious,
    getEvents,
} from '../../../lib/event'

const getCachedEvent = cache(
    async (slug) => replaceUndefinedWithNull(await getEventBySlug(slug)).data[0]
)

export async function generateStaticParams() {
    const fetchAllEvents = replaceUndefinedWithNull(await getEvents(1, 10))
    const allEvents = fetchAllEvents.data

    return allEvents.map((event) => ({
        slug: event.slug,
    }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const event = await getCachedEvent(slug)

    if (!event) {
        return { title: 'Event not found' }
    }

    return {
        title: event.name,
        description: event.description,
    }
}

const Page = async ({ params }) => {
    const { slug } = await params
    const eventData = await getCachedEvent(slug)

    if (!eventData) {
        notFound()
    }

    const filtersMoreEvents = `{"date":{"type":"greaterThan","filter":"${eventData.date}"}}`
    const moreEvents = replaceUndefinedWithNull(
        await getEvents(1, 3, filtersMoreEvents)
    )
    const nextEvents = replaceUndefinedWithNull(
        await getEventNext(eventData.date)
    )
    const prevEvents = replaceUndefinedWithNull(
        await getEventPrevious(eventData.date)
    )

    const pageContext = {
        nextEvents: moreEvents.data,
        previous: prevEvents?.data?.length > 0 && prevEvents?.data?.[0],
        next: nextEvents?.data?.length > 0 && nextEvents?.data?.[0],
    }

    return <EventTemplate event={eventData} pageContext={pageContext} />
}

export default Page
