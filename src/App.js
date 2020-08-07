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




function encode(data) {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
}

export default function App() {
	const [formState, setFormState] = React.useState({});
	const handleChange = e => {
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
			.then(() => console.log(form.getAttribute("action")))
			.catch(error => alert(error));
	};
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<Switch>
					<Route exact path="*">
						<Fabrics />
					</Route>
				</Switch>

				<form
					name="contact"
					method="post"
					action="/"
					data-netlify="true"
					data-netlify-honeypot="bot-field"
					onSubmit={handleSubmit}
				>
					{/* The `form-name` hidden field is required to support form submissions without JavaScript */}
					<input type="hidden" name="form-name" value="contact" />
					<p hidden>
						<label>
							Don’t fill this out:{" "}
							<input name="bot-field" onChange={handleChange} />
						</label>
					</p>
					<p>
						<label>
							Your name:<br />
							<input type="text" name="name" onChange={handleChange} />
						</label>
					</p>
					<p>
						<label>
							Your email:<br />
							<input type="email" name="email" onChange={handleChange} />
						</label>
					</p>
					<p>
						<label>
							Message:<br />
							<textarea name="message" onChange={handleChange} />
						</label>
					</p>
					<p>
						<button type="submit">Send</button>
					</p>
				</form>
			</ThemeProvider>
		</Router >
	);
}
