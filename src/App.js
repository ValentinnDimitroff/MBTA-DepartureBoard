import React from 'react'
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { store } from './redux';
import { DeparturesBoard } from './components';

const theme = createMuiTheme()

const App = () => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<DeparturesBoard />
			</ThemeProvider>
		</Provider>
	);
}

export default App;
