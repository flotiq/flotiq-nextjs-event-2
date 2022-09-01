import 'dotenv/config'

const apiUrl = process.env.FLOTIQ_API_URL
const apiKey = process.env.FLOTIQ_API_KEY
const eventApi = `${apiUrl}/api/v1/content/event`

const DEFAULT_ORDER = 'internal.createdAt'

export function getEventUrl(
    page,
    limit,
    filters,
    direction = 'desc',
    orderBy = DEFAULT_ORDER,
    hydrate = 1
) {
    let url = `${eventApi}?page=${page}&limit=${limit}`
        + `&order_by=${orderBy}&order_direction=${direction}`
        + `&auth_token=${apiKey}`

    if (filters !== undefined) {
        url += `&filters=${encodeURIComponent(filters)}`
    }
    if (hydrate !== undefined) {
        url += '&hydrate=1'
    }

    return url
}

export async function getEventAll(
    page = 1,
    limit = 10,
    filters = 0,
    direction = 'asc',
    orderBy = 'date'
) {
    const url = getEventUrl(page, limit, filters, direction, orderBy)
    const res = await fetch(url)

    return res.json()
}

export async function getEventBySlug(slug) {
    const filters = `{"slug":{"type":"contains","filter":"${slug}"}}`
    const url = getEventUrl(1, 1, filters)
    const res = await fetch(url)
    return res.json()
}

export async function getEventPrevious(date) {
    const filters = `{"date":{"type":"lessThan","filter":"${date}"}}`
    const url = getEventUrl(1, 1, filters, 'desc', 'date')
    const res = await fetch(url)
    return res.json()
}

export async function getEventNext(date) {
    const filters = `{"date":{"type":"greaterThan","filter":"${date}"}}`
    const url = getEventUrl(1, 1, filters, 'asc', 'date')
    const res = await fetch(url)
    return res.json()
}
