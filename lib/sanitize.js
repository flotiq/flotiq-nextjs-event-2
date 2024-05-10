/**
 *
 * This function is used to sanitize the API responses, without it the getStaticProps()
 * methods are not working properly as Next tries to serialize values which are possibly
 * `undefined` (which results in an error).
 * This method inspects an object (or Array) and recursively replaces `undefined` with `null`.
 *
 * @param {*} obj
 * @returns
 */
function replaceUndefinedWithNull(obj) {
    if (obj === null || obj === undefined) return null
    if (typeof obj !== 'object') return obj // Return the value if it is not an object

    // If it's an array, use map to replace undefined in each element
    if (Array.isArray(obj)) {
        return obj.map(replaceUndefinedWithNull)
    }

    // If it's an object, replace undefined with null recursively
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [
            key,
            value === undefined ? null : replaceUndefinedWithNull(value),
        ])
    )
}

export default replaceUndefinedWithNull
