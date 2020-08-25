import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import Container from '@material-ui/core/Container';
import { ReactComponent as Logo } from '../cassy_kustoms_logo.svg';
/* import theme from '../context/theme'; */



export default function Nav(props) {

    const useStyles = makeStyles((theme) => ({
        rootBig: {
            background: 'white',
        },
        rootSmall: {
            transform: 'translateY(-100px)',
            transition: theme.transitions.create('transform', {duration: 555}),
        },
        showSmall: {
            transform: 'translateY(0)',
        },
        toolbar: {
            padding: 0,
        },
        bigLogo: {
            width: '100%',
            maxWidth: 750,
            margin: '40px auto 0',
        },
        smallLogo: {
            width: '100%',
            maxWidth: 300,
            margin: '0 auto',
            '& path': {
                fill: '#fff',
            },
            padding: 10,
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
            elevation: trigger ? 4 : 0,
            /* style: trigger ? { boxShadow: theme.shadow(10, 0, 0, 'rgba(0,0,0,0.2)') } : { boxShadow: 'none' }, */
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

    const bigLogoRef = React.useRef();
    const rootSmallRef = React.useRef();
    const smallLogoRef = React.useRef();

    React.useLayoutEffect(() => {
        const handleScroll = () => {
            const showSmall = bigLogoRef.current.getBoundingClientRect().bottom <= 0;
            /* console.log(bigLogoRef.current.getBoundingClientRect().bottom - rootSmallRef.current.getBoundingClientRect().height <= 0); */
            if (showSmall) {
                rootSmallRef.current.classList.add(classes.showSmall);
            } else {
                rootSmallRef.current.classList.remove(classes.showSmall);
            }
        }

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <React.Fragment>
            {/* <ElevationScroll {...props}> */}
            <AppBar position="static" elevation={0} className={classes.rootBig}>
                <Container maxWidth="lg">
                    <Toolbar className={classes.toolbar}>
                        <Logo className={classes.bigLogo} ref={bigLogoRef} />
                    </Toolbar>
                </Container>
            </AppBar>
            {/* </ElevationScroll> */}
            {/* <Toolbar /> */}

            <AppBar elevation={4} className={classes.rootSmall} ref={rootSmallRef}>
                <Container maxWidth="lg">
                    <Toolbar className={classes.toolbar}>
                        <Logo className={classes.smallLogo} ref={smallLogoRef} />
                    </Toolbar>
                </Container>
            </AppBar>
        </React.Fragment>
    );
}