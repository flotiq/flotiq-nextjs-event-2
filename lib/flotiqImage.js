import { api } from './event'

const getSrc = (imageObject, width, height) => {
    if (!imageObject) return null

    const options = {}
    if (width) options.width = width
    if (height) options.height = height

    return api.helpers.getMediaUrl(imageObject, options)
}

const FlotiqImage = {
    getSrc,
}

export default FlotiqImage
