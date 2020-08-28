import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Container from '@material-ui/core/Container';
import { ReactComponent as Logo } from '../cassy_kustoms_logo.svg';
import { Link, NavLink } from 'react-router-dom';
/* import { HashLink as Link, NavHashLink as NavLink } from 'react-router-hash-link'; */
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
/* import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener'; */
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
                /* dropdRef.current.style.display = ''; */
            } else {
                rootSmallRef.current.classList.remove(classes.showSmall);
                /* dropdRef.current.classList.remove(classes.showDropd);
                dropdRef.current.style.display = 'none'; */
                setDropd(false);
            }
        }

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    /* POPPER */
    // Create 'popperAnchor' hook
    /* const [popperAnchor, setPopperAnchor] = React.useState(null); */ // Default hidden (null element)
    // Toggle popperAnchor
    /* const togglePopper = (event) => {
        setPopperAnchor(popperAnchor ? null : event.currentTarget);
    }; */
    /* const popperOpen = Boolean(popperAnchor); */ // True if popper anchor element exists
    /* const popperID = popperOpen ? 'APIPopper' : undefined; */
    // Hide popper
    /* const hidePopper = () => { */
    /* setPopperAnchor(null); */ // Hide by setting popper anchor element to null
    /* }; */
    // Create reference for popper
    /* const popperRef = React.useRef(null); */
    // Set maxHeight of popper after component renders
    /* React.useEffect(() => {
        const handleResize = () => {
            if (popperOpen) {
                const buffer = 14;
                popperRef.current.style.maxHeight =
                    window.innerHeight
                    - props.navRef.current.offsetHeight
                    - buffer
                    + 'px';
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    }); */

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

        /* popperWrapper: {
            [theme.breakpoints.up(550)]: {
                display: 'none',
            },
            padding: '0.5rem 0.225rem 1rem',
        },
        popperPaper: {
            background: 'rgb(11, 82, 91)',
            transform: 'translateY(-0.5rem)',
            fontSize: '0.9rem',
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
            overflowY: 'auto',
        },
        popperNavLink: {
            display: 'block',
            fontSize: 16,
            textDecoration: 'none',
            color: '#fff',
            fontFamily: theme.typography.fonts.header,
            textTransform: 'uppercase',
            opacity: 0.8,
            '& .MuiListItem-root': {
                textAlign: 'center',
                padding: '8px 26px',
            },
        }, */
    }));
    const classes = useStyles();

    const location = useLocation();

    return (
        <React.Fragment>
            <AppBar position="static" elevation={0} className={classes.rootBig}>
                <Container maxWidth="lg">
                    <Toolbar className={classes.bigToolbar}>
                        <Link className={classes.bigLogo} to="/" onClick={smoothScrollToTop}><Logo ref={bigLogoRef} /></Link>
                        <div className={classes.bigNavLinks}>
                            <a href="/#about" className={[classes.bigNavLink, `${location.pathname}${location.hash}` === "/#about" ? classes.activeBigNavLink : ""].join(' ')}>About</a>
                            <a href="/#services" className={[classes.bigNavLink, `${location.pathname}${location.hash}` === "/#services" ? classes.activeBigNavLink : ""].join(' ')}>Services</a>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>

            <AppBar elevation={0} className={classes.rootSmall} ref={rootSmallRef}>
                <Container maxWidth="lg">
                    <Toolbar className={classes.smallToolbar}>
                        <Link className={classes.smallLogo} to="/" onClick={smoothScrollToTop}><Logo ref={smallLogoRef} /></Link>
                        <div className={classes.smallNavLinks}>
                            <a href="/#about" className={[classes.smallNavLink, `${location.pathname}${location.hash}` === "/#about" ? classes.activeSmallNavLink : ""].join(' ')}>About</a>
                            <a href="/#services" className={[classes.smallNavLink, `${location.pathname}${location.hash}` === "/#services" ? classes.activeSmallNavLink : ""].join(' ')}>Services</a>
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
                            onClick={hideDropd}
                        >
                            <ListItem>
                                <ListItemText primary='About' />
                            </ListItem>
                        </a>
                        <a
                            href='/#services'
                            className={[classes.dropdownNavLink, `${location.pathname}${location.hash}` === "/#services" ? classes.activeDropdownNavLink : ""].join(' ')}
                            onClick={hideDropd}
                        >
                            <ListItem>
                                <ListItemText primary='Services' />
                            </ListItem>
                        </a>
                    </List>
                </Container>
            </AppBar>
        </React.Fragment >
    );
}