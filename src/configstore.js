import logger from 'redux-logger'
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import {jabberwock} from './src/reducers'
//import { mapMiddleware, errorReporter } from './src/middleware'
//import routes from './routesMap'

export default function configureStore(preloadedState) {
//    const {reducer, middleware, enhancer} = routes;
    const rootReducer =
//    persistReducer(persistConfig,
        combineReducers({
            jabberwock,
//            page,
            location  : reducer
        })
//    )
    const middlewares = applyMiddleware(logger)
    const composeEnhancers =
        typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
    const enhancers = composeEnhancers(enhancer, middlewares)
    const store     = createStore(rootReducer, preloadedState, enhancers);

    return {store}
}
