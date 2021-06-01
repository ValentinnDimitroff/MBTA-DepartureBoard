import { call, put, takeLatest } from 'redux-saga/effects'
import slice from './departures-board.slice'
import { apiRoutes, httpClient } from '../../api'

const departuresBoardActions = slice.actions

const getCurrentDate = () => {
    const d = new Date()
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
    const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)

    const result = `${ye}-${mo}-${da}`

    return result
}

function* fetchStopSchedule({ payload: stopId }) {
    const { data } = yield call(httpClient.request, apiRoutes.schedules, {
        filter: {
            stop: stopId,
            date: getCurrentDate(),
        },
        include: ['route'],
        fields: ['direction_id', 'departure_time'],
    })

    yield put(departuresBoardActions.setSchedule(data))
}

function* changeStopSaga() {
    yield takeLatest(departuresBoardActions.changeStop.toString(), fetchStopSchedule)
}

export default [changeStopSaga]
