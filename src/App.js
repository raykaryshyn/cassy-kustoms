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

import './App.css';




export default function App() {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<Switch>
					<Route exact path="/fabrics">
						<Fabrics />
					</Route>

					<Route exact path="/test">
						<form name="contact" method="POST" data-netlify="true">
							<p>
								<label>Name: <input type="text" name="name" /></label>
							</p>
							<p>
								<label>Email: <input type="email" name="email" /></label>
							</p>
							<p>
								<label>Message: <textarea name="message"></textarea></label>
							</p>
							<p>
								<button type="submit">Send</button>
							</p>
						</form>
					</Route>

					<Route exact path="*">
						<Page title="Under Development" />
					</Route>
				</Switch>
			</ThemeProvider>
		</Router >
	);
}
