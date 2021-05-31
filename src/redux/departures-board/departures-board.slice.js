import { createSlice } from '@reduxjs/toolkit'
// import { calcMetricAverage, commonMetricReducer } from '../_utils'

const name = 'departures-board'

const initialState = {
    stopId: undefined,
    schedule: [],
}

const bloodGlucoseSlice = createSlice({
    name,
    initialState,
    reducers: {
        changeStop(state, { payload }) {
            state.stopId = payload
        },
        setSchedule(state, { payload }) {
            state.schedule = payload
        }
    }
})

const bloodGlucoseSliceApi = {
    name,
    ...bloodGlucoseSlice
}

export default bloodGlucoseSliceApi