import { notFound } from 'next/navigation'
import PageContent from '../../components/PageContent'
import replaceUndefinedWithNull from '../../lib/sanitize'
import config from '../../lib/config'
import { getEvents } from '../../lib/event'

export const metadata = {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
}

export async function generateStaticParams() {
    const fetcher = replaceUndefinedWithNull(
        await getEvents(1, config.event.eventPerPage)
    )
    const paths = []

    for (let i = 0; i < fetcher.total_pages; i += 1) {
        paths.push({ page: `${i + 1}` })
    }

    return paths
}

const Page = async ({ params }) => {
    const { page } = await params
    const pageNum = parseInt(page, 10)

    if (isNaN(pageNum) || pageNum < 1 || String(pageNum) !== page) {
        notFound()
    }
    const fetchEvents = await getEvents(pageNum, config.event.eventPerPage)

    const eventsData = replaceUndefinedWithNull(fetchEvents.data)
    const pageContext = {
        currentPage: fetchEvents.current_page,
        numPages: fetchEvents.total_pages,
    }

    if (pageNum > pageContext.numPages) {
        notFound()
    }

    return <PageContent data={eventsData} pageContext={pageContext} />
}

export default Page
