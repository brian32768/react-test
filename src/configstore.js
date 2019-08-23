import logger from 'redux-logger'
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import {page, counter, print} from './reducers'
//import { mapMiddleware, errorReporter } from './src/middleware'
import routes from './routes-map'

function configureStore(preloadedState) {
    const {reducer, middleware, enhancer} = routes;
    const rootReducer = combineReducers({
        page,
        counter,
        print,
        location : reducer
    })
    const middlewares = applyMiddleware(logger, middleware)
    const composeEnhancers =
        typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
    const enhancers = composeEnhancers(enhancer, middlewares)
    const store = createStore(rootReducer, preloadedState, enhancers);

    return {store}
}
export default configureStore
