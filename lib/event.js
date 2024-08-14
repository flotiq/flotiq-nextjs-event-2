import 'dotenv/config'
import { FlotiqApi } from '../flotiqApi/index'

const apiKey = process.env.FLOTIQ_API_KEY

export async function getEvents(
    page = 1,
    limit = 10,
    filters = undefined,
    direction = 'asc',
    orderBy = 'date'
) {
    const api = new FlotiqApi(apiKey)
    return api.EventAPI.list({
        page,
        limit,
        filters,
        order_by: orderBy,
        order_direction: direction,
    })
}

export async function getEventBySlug(slug) {
    const filters = `{"slug":{"type":"contains","filter":"${slug}"}}`

    const api = new FlotiqApi(apiKey)
    return api.EventAPI.list({ filters, page: 1, limit: 1 })
}

export async function getEventPrevious(date) {
    const filters = `{"date":{"type":"lessThan","filter":"${date}"}}`

    const api = new FlotiqApi(apiKey)
    return api.EventAPI.list({ filters, page: 1, limit: 1, order_by: 'date', order_direction: 'desc' })
}

export async function getEventNext(date) {
    const filters = `{"date":{"type":"greaterThan","filter":"${date}"}}`

    const api = new FlotiqApi(apiKey)
    return api.EventAPI.list({ filters, page: 1, limit: 1, order_by: 'date', order_direction: 'asc' })
}
