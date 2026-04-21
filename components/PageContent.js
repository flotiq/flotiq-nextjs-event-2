'use client'

import React from 'react'
import { Pagination } from 'flotiq-components-react'
import Layout from '../layouts/layout'
import EventCards from '../sections/EventCards'

const PageContent = ({ data, pageContext }) => (
    <Layout additionalClass={['bg-white']}>
        <EventCards
            events={data}
            headerText="Upcoming events"
            additnalClasses={['py-10']}
        />
        <Pagination
            numOfPages={pageContext.numPages}
            page={pageContext.currentPage}
            rounded="none"
        />
    </Layout>
)

export default PageContent
