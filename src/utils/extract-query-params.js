export function extractQueryParams(query) {
    return query.substr(1).split('&').reduce((prev, next) => {
        const [key, value] = next.split('=') 
        prev[key] = value

        return prev
    }, {})
}