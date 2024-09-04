export function buildRoutePath(path) {
    const routeParametersRegex = /:([a-zA-z]+)/g
    const pathWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)')

    const pathRegEx = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`)

    return pathRegEx
}