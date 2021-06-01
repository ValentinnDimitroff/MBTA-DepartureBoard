import React from 'react'
import { Provider } from 'react-redux'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { store } from './redux'
import { DeparturesBoard } from './components'

const theme = createMuiTheme()

const App = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <DeparturesBoard />
        </ThemeProvider>
    </Provider>
)

export default App
