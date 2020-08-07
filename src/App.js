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

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';


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
					onSubmit={handleSubmit}
				>

					<input type="hidden" name="form-name" value="contact" />
					<p hidden>
						<label>
							Don’t fill this out:{" "}
							<input name="bot-field" onChange={handleChange} />
						</label>
					</p>
					<TextField id="outlined-basic" label="Name" variant="outlined" type="text" name="name" onChange={handleChange} />
					<TextField id="outlined-basic" label="Email" variant="outlined" type="email" name="email" onChange={handleChange} />
					<TextField
						id="outlined-multiline-static"
						label="Message"
						multiline
						rows={4}
						variant="outlined"
						onChange={handleChange}
					/>
					<Button variant="contained" color="primary" type="submit">
						<SendIcon /> Send
					</Button>
				</form>
			</ThemeProvider>
		</Router >
	);
}
