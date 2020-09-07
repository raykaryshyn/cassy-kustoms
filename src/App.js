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
/* import Nav from './components/Nav/Nav'; */
import Home from './components/pages/Home';
import Footer from './components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import AirPods from './components/pages/AirPods';
import Clothes from './components/pages/Clothes';
import WaterBottles from './components/pages/WaterBottles';
import PhoneCases from './components/pages/PhoneCases';
import Scrunchies from './components/pages/Scrunchies';
import Shoes from './components/pages/Shoes';
import BucketHats from './components/pages/BucketHats';
import Development from './Development';

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

	const useStyles = makeStyles(theme => ({
		root: {
			minHeight: '100vh',
			display: 'flex',
			flexDirection: 'column',
		},
		content: {
			flex: 1,
		},
	}));
	const classes = useStyles();

	function viewportToPixels(value) {
		var parts = value.match(/([0-9.]+)(vh|vw)/)
		var q = Number(parts[1])
		var side = window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]]
		return side * (q / 100)
	}

	React.useLayoutEffect(() => {
		const handleResize = () => {
			document.getElementById('root-body').style.minHeight = (viewportToPixels('100vh') - document.getElementById('navSmall').getBoundingClientRect().height) + 'px';
		}

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<Development />

				<div className={classes.root} id="root-body">
					{/* <Nav /> */}
					{/* <h1 id="js-services-loading" style={{ opacity: 1 }}>LOADING!!!</h1> */}

					<div className={classes.content}>
						<Switch>
							<Route path="/masks">
								<Fabrics />
							</Route>
							<Route path="/airpods-cases">
								<AirPods />
							</Route>
							<Route path="/clothes">
								<Clothes />
							</Route>
							<Route path="/water-bottles">
								<WaterBottles />
							</Route>
							<Route path="/phone-cases">
								<PhoneCases />
							</Route>
							<Route path="/scrunchies">
								<Scrunchies />
							</Route>
							<Route path="/shoes">
								<Shoes />
							</Route>
							<Route path="/bucket-hats">
								<BucketHats />
							</Route>
							<Route exact path="/">
								<Home />
							</Route>
							<Route exact path="*">
								404 Page
							</Route>
						</Switch>
					</div>

					<Footer id="footer" />
				</div>
			</ThemeProvider>
		</Router>
	);
}
