import 'dotenv/config'
import { Flotiq } from '@flotiq/flotiq-api-sdk'

export const api = new Flotiq({ apiKey: process.env.FLOTIQ_API_KEY })

export async function getEvents(
    page = 1,
    limit = 10,
    filters = undefined,
    direction = 'asc',
    orderBy = 'date'
) {
    return api.content.event.list({
        page,
        limit,
        filters,
        orderBy,
        orderDirection: direction,
        hydrate: 1,
    })
}

export async function getEventBySlug(slug) {
    const filters = { slug: { type: 'contains', filter: slug } }

    return api.content.event.list({ filters, page: 1, limit: 1, hydrate: 1 })
}

export async function getEventPrevious(date) {
    const filters = { date: { type: 'lessThan', filter: date } }

    return api.content.event.list({
        filters,
        page: 1,
        limit: 1,
        orderBy: 'date',
        orderDirection: 'desc',
        hydrate: 1,
    })
}

export async function getEventNext(date) {
    const filters = { date: { type: 'greaterThan', filter: date } }

    return api.content.event.list({
        filters,
        page: 1,
        limit: 1,
        orderBy: 'date',
        orderDirection: 'asc',
        hydrate: 1,
    })
}
