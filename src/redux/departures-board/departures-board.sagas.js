import { call, put, takeLatest } from 'redux-saga/effects'
import { departuresBoardActions } from '.'
import { apiRoutes, httpClient } from '../../api'

function* fetchStopSchedule({ payload: stopId }) {
    const { data } = yield call(httpClient.request, apiRoutes.schedules, {
        filter: { stop: stopId },
        include: ['route'],
        fields: ['direction_id', 'departure_time'],
    })

    yield put(departuresBoardActions.setSchedule(data))
}

function* changeStopSaga() {
    yield takeLatest(departuresBoardActions.changeStop.toString(), fetchStopSchedule)
}

export default [changeStopSaga]
