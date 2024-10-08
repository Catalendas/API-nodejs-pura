import http from 'node:http'
import { json } from './middleware/json.js'
import { routes } from './routes.js'
import { extractQueryParams } from './utils/extract-query-params.js'

http.createServer(async (req, res) => {
    const { url, method } = req

    await json(req, res)

    const route = routes.find(route => {
        return route.method === method && route.path.test(url)
    })

    if (route) {
        const routesParams = req.url.match(route.path)

        const { query, ...params} = routesParams.groups

        req.params = params
        req.query = query ? extractQueryParams(query) : {}

        return route.handler(req, res)
    }

    return res
            .writeHead(404)
            .end()

}).listen(3333, () => console.log('Runing at 3333'))