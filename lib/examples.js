import 'dotenv/config';

export async function getExamplesData() {
    const apiUrl = process.env.FLOTIQ_API_URL
    const apiKey = process.env.FLOTIQ_API_KEY
    const res = await fetch(
        `${apiUrl}/api/v1/content/example?limit=1&page=1&auth_token=${apiKey}`
    )
    return res.json()
}
