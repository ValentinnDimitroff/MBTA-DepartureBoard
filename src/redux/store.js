import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './rootReducer'
import { saga, sagaMiddleware } from './sagaMiddleware'

// Plug in point for all default middlewares
const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
    const loggerMiddleware = createLogger()
    middlewares.push(loggerMiddleware)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(saga)

export default store
