import { combineReducers } from 'redux'
import departuresBoardReducer from './departures-board'

export default combineReducers({
    departuresBoard: departuresBoardReducer,
})