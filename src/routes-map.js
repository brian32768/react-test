import {connectRoutes} from 'redux-first-router'
import queryString from 'query-string'

const routesMap = {
    HOME:     '/',
    ABOUT:    '/about',
    MAP:      '/map',
    CONTACT:  '/contact',
}

export default connectRoutes(routesMap, {
    querySerializer: queryString // This is what puts your queries into the address bar.
    //createHistory,  You can add "createHistory" here but it's not necessary
})
