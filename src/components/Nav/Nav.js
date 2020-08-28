import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Container from '@material-ui/core/Container';
import { ReactComponent as Logo } from '../cassy_kustoms_logo.svg';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
    useLocation
} from "react-router-dom";



export default function Nav(props) {

    function smoothScrollToTop() {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(smoothScrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    }

    const bigLogoRef = React.useRef();
    const rootSmallRef = React.useRef();
    const smallLogoRef = React.useRef();

    React.useLayoutEffect(() => {
        const handleScroll = () => {
            const showSmall = bigLogoRef.current.getBoundingClientRect().bottom <= 0;
            if (showSmall) {
                rootSmallRef.current.classList.add(classes.showSmall);
            } else {
                rootSmallRef.current.classList.remove(classes.showSmall);
                setDropd(false);
            }
        }

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const [dropd, setDropd] = React.useState(false);
    const toggleDropd = () => {
        setDropd(!dropd);
    };
    const hideDropd = () => {
        setDropd(false);
    };

    const dropdRef = React.useRef();


    const useStyles = makeStyles((theme) => ({
        rootBig: {
            background: 'white',
        },
        rootSmall: {
            transform: 'translateY(-100px)',
            transition: theme.transitions.create('transform', { duration: 555 }),
            background: 'linear-gradient(0, rgb(0, 138, 145), rgb(11, 82, 91))',
            boxShadow: '0 0 7px rgba(0, 0, 0, 0.6)',
        },
        showSmall: {
            transform: 'translateY(0)',
        },
        bigToolbar: {
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
        },
        smallToolbar: {
            padding: 0,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        bigLogo: {
            width: '100%',
            maxWidth: 750,
            margin: '25px auto 0',
        },
        smallLogo: {
            width: '100%',
            maxWidth: 300,
            '& path': {
                fill: '#fff',
            },
            padding: '10px 10px 10px 0',
            filter: 'drop-shadow(0 0 19px rgb(11, 82, 91))',
            [theme.breakpoints.down('xs')]: {
                maxWidth: 220,
            },
            marginLeft: -4,
        },

        bigNavLinks: {
            display: 'flex',
            flexDirection: 'row',
        },
        bigNavLink: {
            fontSize: 20,
            textDecoration: 'none',
            color: theme.palette.text.secondary,
            fontFamily: theme.typography.fonts.header,
            textTransform: 'uppercase',
            margin: '5px 20px',
        },
        activeBigNavLink: {
            color: theme.palette.secondary.main,
        },
        smallNavLinks: {
            display: 'flex',
            flexDirection: 'row',
            [theme.breakpoints.down(550)]: {
                display: 'none',
            },
        },
        smallNavLink: {
            fontSize: 18,
            textDecoration: 'none',
            color: '#fff',
            fontFamily: theme.typography.fonts.header,
            textTransform: 'uppercase',
            margin: '5px 20px',
            opacity: 0.8,
        },
        activeSmallNavLink: {
            opacity: 1,
        },
        hamburger: {
            '& .MuiSvgIcon-root': {
                width: 30,
                height: 30,
            },
            [theme.breakpoints.up(550)]: {
                display: 'none',
            },
        },

        dropdown: {
            display: dropd ? 'flex' : 'none',
            flexDirection: 'column',
            alignItems: 'flex-end',
            margin: 0,
            padding: 0,
        },
        dropdownNavLink: {
            display: 'block',
            fontSize: 16,
            textDecoration: 'none',
            color: '#fff',
            fontFamily: theme.typography.fonts.header,
            textTransform: 'uppercase',
            opacity: 0.8,
            '& .MuiListItem-root': {
                padding: '0 0 18px',
            },
        },
        activeDropdownNavLink: {
            opacity: 1,
        },
    }));
    const classes = useStyles();

    const location = useLocation();

    const handleLinkClick = (e) => {
        e.preventDefault();
        if (!document.getElementById('about') || !document.getElementById('services')) {
            window.location.href = '/';
        } else if (document.getElementById('about') && document.getElementById('services')) {
            const id = e.currentTarget.href.split('#')[1];
            const elmTop = document.getElementById(id).offsetTop;
            window.scrollTo({
                top: elmTop,
                behavior: "smooth"
            });
        }
    };

    return (
        <React.Fragment>
            <AppBar position="static" elevation={0} className={classes.rootBig}>
                <Container maxWidth="lg">
                    <Toolbar className={classes.bigToolbar}>
                        <Link className={classes.bigLogo} to="/" onClick={smoothScrollToTop}><Logo ref={bigLogoRef} /></Link>
                        <div className={classes.bigNavLinks}>
                            <a href="/#about" className={[classes.bigNavLink, `${location.pathname}${location.hash}` === "/#about" ? classes.activeBigNavLink : ""].join(' ')} onClick={handleLinkClick}>About</a>
                            <a href="/#services" className={[classes.bigNavLink, `${location.pathname}${location.hash}` === "/#services" ? classes.activeBigNavLink : ""].join(' ')} onClick={handleLinkClick}>Services</a>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>

            <AppBar elevation={0} className={classes.rootSmall} ref={rootSmallRef} id="navSmall">
                <Container maxWidth="lg">
                    <Toolbar className={classes.smallToolbar}>
                        <Link className={classes.smallLogo} to="/" onClick={smoothScrollToTop}><Logo ref={smallLogoRef} /></Link>
                        <div className={classes.smallNavLinks}>
                            <a href="/#about" className={[classes.smallNavLink, `${location.pathname}${location.hash}` === "/#about" ? classes.activeSmallNavLink : ""].join(' ')} onClick={handleLinkClick}>About</a>
                            <a href="/#services" className={[classes.smallNavLink, `${location.pathname}${location.hash}` === "/#services" ? classes.activeSmallNavLink : ""].join(' ')} onClick={handleLinkClick}>Services</a>
                        </div>
                        <IconButton
                            edge="end"
                            className={classes.hamburger}
                            color="inherit"
                            /* onClick={togglePopper} */
                            onClick={toggleDropd}
                            disableRipple
                        >
                            {dropd ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                    </Toolbar>
                    <List className={classes.dropdown} ref={dropdRef}>
                        <a
                            href='/#about'
                            className={[classes.dropdownNavLink, `${location.pathname}${location.hash}` === "/#about" ? classes.activeDropdownNavLink : ""].join(' ')}
                            onClick={() => { handleLinkClick(); hideDropd(); }}
                        >
                            <ListItem>
                                <ListItemText primary='About' />
                            </ListItem>
                        </a>
                        <a
                            href='/#services'
                            className={[classes.dropdownNavLink, `${location.pathname}${location.hash}` === "/#services" ? classes.activeDropdownNavLink : ""].join(' ')}
                            onClick={() => { handleLinkClick(); hideDropd(); }}
                        >
                            <ListItem>
                                <ListItemText primary='Services' />
                            </ListItem>
                        </a>
                    </List>
                </Container>
            </AppBar>
        </React.Fragment>
    );
}