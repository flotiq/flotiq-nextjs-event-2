import 'dotenv/config'
import {FlotiqApi} from '../flotiqApi/src';

const apiUrl = process.env.FLOTIQ_API_URL
const apiKey = process.env.FLOTIQ_API_KEY
const eventApi = `${apiUrl}/api/v1/content/event`

const DEFAULT_ORDER = 'internal.createdAt'

export async function getEvents(
    page = 1,
    limit = 10,
    filters = undefined,
    direction = 'asc',
    orderBy = 'date'
) {
    const api = new FlotiqApi(apiKey);

    return await api.EventAPI.list({
        page: page,
        limit: limit,
        filters: filters,
        order_by: orderBy,
    })
}

export async function getEventBySlug(slug) {
    const filters = `{"slug":{"type":"contains","filter":"${slug}"}}`;

    const api = new FlotiqApi(apiKey);
    return await api.EventAPI.list({filters: filters, page: 1, limit: 1});
}

export async function getEventPrevious(date) {
    const filters = `{"date":{"type":"lessThan","filter":"${date}"}}`;

    const api = new FlotiqApi(apiKey);
    return await api.EventAPI.list({filters: filters, page: 1, limit: 1});
}

export async function getEventNext(date) {
    const filters = `{"date":{"type":"greaterThan","filter":"${date}"}}`;

    const api = new FlotiqApi(apiKey);
    return await api.EventAPI.list({filters: filters, page: 1, limit: 1});
}
