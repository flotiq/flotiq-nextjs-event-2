'use client'

import React from 'react'
import Layout from '../layouts/layout'
import EventDescriptionCard from '../components/event/EventDescriptionCard'
import FlotiqImage from '../lib/flotiqImage'
import NextEvents from '../sections/NextEvents'
import Contact from '../sections/Contact'

const EventTemplate = ({ event, pageContext }) => (
    <Layout additionalClass={['bg-white']}>
        <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-0">
            <EventDescriptionCard
                name={event.name}
                headerImage={FlotiqImage.getSrc(event.image[0], 0, 0)}
                date={event.date}
                description={event.description}
                address={event.address}
                price={event.price}
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
