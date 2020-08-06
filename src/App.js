import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import theme from './context/theme';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';




export default function App() {
	const useStyles = makeStyles({
		page: {
			marginTop: '2rem',
		},
		title: {
			textAlign: 'center',
		},
	});
	const classes = useStyles();

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<Container maxWidth="sm" className={classes.page}>
					<Switch>
						<Route exact path="/fabrics">
							<Typography variant="h2" component="h1" className={classes.title}>Fabrics</Typography>
						</Route>

						<Route exact path="*">
							<Typography variant="h2" component="h1" className={classes.title}>Under Development</Typography>
						</Route>
					</Switch>
				</Container>
			</ThemeProvider>
		</Router >
	);
}
