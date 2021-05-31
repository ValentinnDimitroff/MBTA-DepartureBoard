import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './rootReducer'

const loggerMiddleware = createLogger();

// Plug in point for all default middlewares 
const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(loggerMiddleware)
}

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
)

export default store