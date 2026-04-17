import replaceUndefinedWithNull from '../lib/sanitize'
import config from '../lib/config'
import PageContent from '../components/PageContent'
import { getEvents } from '../lib/event'

const Page = async () => {
    const fetchEvent = await getEvents(1, config.event.eventPerPage)
    const eventsData = replaceUndefinedWithNull(fetchEvent.data)
    const pageContext = {
        currentPage: fetchEvent.current_page,
        numPages: fetchEvent.total_pages,
    }
    return <PageContent data={eventsData} pageContext={pageContext} />
}

export default Page
