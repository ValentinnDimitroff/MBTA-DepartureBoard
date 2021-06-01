import createSagaMiddleware from 'redux-saga'
import { all, fork } from 'redux-saga/effects'
import departuresBoard from './departures-board'

export const saga = function* rootSaga() {
    yield all([...departuresBoard.sagas].map(fork))
}

export const sagaMiddleware = createSagaMiddleware()
