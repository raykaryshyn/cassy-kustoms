import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

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
            background: 'linear-gradient(0, rgb(0, 138, 145), rgb(11, 82, 91))',
            boxShadow: '0 0 7px rgba(11, 82, 91, 0.8)',
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
            margin: '25px auto 0',
        },
        smallLogo: {
            width: '100%',
            maxWidth: 300,
            margin: '0 auto',
            '& path': {
                fill: '#fff',
            },
            padding: 10,
            filter: 'drop-shadow(0 0 19px rgb(11, 82, 91))',
            [theme.breakpoints.down('xs')]: {
                maxWidth: 240,
            },
        },
    }));
    const classes = useStyles();

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
            <AppBar position="static" elevation={0} className={classes.rootBig}>
                <Container maxWidth="lg">
                    <Toolbar className={classes.toolbar}>
                        <Logo className={classes.bigLogo} ref={bigLogoRef} />
                    </Toolbar>
                </Container>
            </AppBar>

            <AppBar elevation={0} className={classes.rootSmall} ref={rootSmallRef}>
                <Container maxWidth="lg">
                    <Toolbar className={classes.toolbar}>
                        <Logo className={classes.smallLogo} ref={smallLogoRef} />
                    </Toolbar>
                </Container>
            </AppBar>
        </React.Fragment>
    );
}