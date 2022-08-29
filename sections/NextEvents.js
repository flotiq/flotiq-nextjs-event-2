import React from 'react'
import { Header } from 'flotiq-components-react'
import NextEventCard from '../components/event/NextEventCard'
import NextEventsNavigation from '../components/event/NextEventsNavigation'
import FlotiqImage from '../lib/flotiqImage'

const NextEvents = ({ events, headerText, pageContext }) => (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-0">
        {events.length > 0 && (
            <>
                <Header additionalClasses={['!font-light mb-5']}>
                    {headerText}
                </Header>
                <div className="flex flex-wrap lg:flex-nowrap lg:space-x-4">
                    {events.map((event) => (
                        <NextEventCard
                            slug={event.slug}
                            name={event.name}
                            headerImage={FlotiqImage.getSrc(
                                event.image[0],
                                0,
                                0
                            )}
                            date={event.date}
                            excerpt={event.excerpt}
                            address={event.address}
                            price={event.price}
                            key={event.id}
                        />
                    ))}
                </div>
            </>
        )}
        <NextEventsNavigation
            additionalClass={['']}
            prevText="Previous event"
            nextText="Next event"
            pageContext={pageContext}
        />
    </div>
)

export default NextEvents
