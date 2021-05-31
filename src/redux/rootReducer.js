import { combineReducers } from 'redux'
import departuresBoard from './departures-board'

export default combineReducers({
    departuresBoard: departuresBoard.reducer,
})