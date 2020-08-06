import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './context/theme';
import Fabrics from './components/pages/fabrics/Fabrics';
import Page from './components/pages/Page';




export default function App() {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<Switch>
					<Route exact path="/fabrics">
						<Fabrics />
					</Route>

					<Route exact path="*">
						<Page title="Under Development" />
					</Route>
				</Switch>
			</ThemeProvider>
		</Router >
	);
}
