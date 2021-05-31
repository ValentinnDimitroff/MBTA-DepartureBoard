import sagas from './departures-board.sagas'
import slice from './departures-board.slice'

export const departuresBoardActions = slice.actions

export * from './departures-board.selectors'

export default {
    reducer: slice.reducer,
    sagas,
}