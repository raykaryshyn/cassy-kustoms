import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import Container from '@material-ui/core/Container';
import theme from '../context/theme';



export default function Nav(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
            background: 'white',
            color: theme.palette.text.primary,
        },
        toolbar: {
            padding: 0,
        },
    }));
    const classes = useStyles();

    function ElevationScroll(props) {
        const { children, window } = props;
        // Note that you normally won't need to set the window ref as useScrollTrigger
        // will default to window.
        // This is only being set here because the demo is in an iframe.
        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 0,
            target: window ? window() : undefined,
        });

        return React.cloneElement(children, {
            elevation: trigger ? 4: 0,
            style: trigger ? { boxShadow: theme.shadow(10,0,0,'rgba(0,0,0,0.2)') } : { boxShadow: 'none' },
        });
    }

    ElevationScroll.propTypes = {
        children: PropTypes.element.isRequired,
        /**
         * Injected by the documentation to work in an iframe.
         * You won't need it on your project.
         */
        window: PropTypes.func,
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar className={classes.root}>
                    <Container
                        maxWidth="lg">
                        <Toolbar className={classes.toolbar}>
                            <Typography variant="h6">Cassy (CK) Kustoms</Typography>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </React.Fragment>
    );
}