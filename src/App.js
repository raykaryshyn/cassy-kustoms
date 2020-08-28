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

import './App.css';
import Nav from './components/Nav/Nav';
import Home from './components/pages/Home';

/* import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send'; */


/* function encode(data) {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
} */

export default function App() {
	/* const [formState, setFormState] = React.useState({}); */
	/* const handleChange = e => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
	};
	const handleSubmit = e => {
		e.preventDefault();
		const form = e.target;
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({
				"form-name": form.getAttribute("name"),
				...formState
			})
		})
			.then(() => console.log(formState))
			.catch(error => alert(error));
	}; */
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<Nav />

				<Switch>
					<Route path="/masks">
						<Fabrics />
					</Route>
					<Route exact path="*">
						<Home />
					</Route>
				</Switch>
			</ThemeProvider>
		</Router >
	);
}
