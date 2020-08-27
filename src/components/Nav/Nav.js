import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Container from '@material-ui/core/Container';
import { ReactComponent as Logo } from '../cassy_kustoms_logo.svg';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
/* import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener'; */
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



export default function Nav(props) {



    const bigLogoRef = React.useRef();
    const rootSmallRef = React.useRef();
    const smallLogoRef = React.useRef();

    React.useLayoutEffect(() => {
        const handleScroll = () => {
            const showSmall = bigLogoRef.current.getBoundingClientRect().bottom <= 0;
            if (showSmall) {
                rootSmallRef.current.classList.add(classes.showSmall);
                dropdRef.current.style.display = '';
            } else {
                rootSmallRef.current.classList.remove(classes.showSmall);
                dropdRef.current.classList.remove(classes.showDropd);
                dropdRef.current.style.display = 'none';
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
                maxWidth: 240,
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

    return (
        <React.Fragment>
            <AppBar position="static" elevation={0} className={classes.rootBig}>
                <Container maxWidth="lg">
                    <Toolbar className={classes.bigToolbar}>
                        <Link className={classes.bigLogo} to="/"><Logo ref={bigLogoRef} /></Link>
                        <div className={classes.bigNavLinks}>
                            <NavLink to="/about" className={classes.bigNavLink} activeClassName={classes.activeBigNavLink}>About</NavLink>
                            <NavLink to="/services" className={classes.bigNavLink} activeClassName={classes.activeBigNavLink}>Services</NavLink>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>

            <AppBar elevation={0} className={classes.rootSmall} ref={rootSmallRef}>
                <Container maxWidth="lg">
                    <Toolbar className={classes.smallToolbar}>
                        <Link className={classes.smallLogo} to="/"><Logo ref={smallLogoRef} /></Link>
                        <div className={classes.smallNavLinks}>
                            <NavLink to="/about" className={classes.smallNavLink} activeClassName={classes.activeSmallNavLink}>About</NavLink>
                            <NavLink to="/services" className={classes.smallNavLink} activeClassName={classes.activeSmallNavLink}>Services</NavLink>
                        </div>
                        <IconButton
                            edge="end"
                            className={classes.hamburger}
                            color="inherit"
                            /* onClick={togglePopper} */
                            onClick={toggleDropd}
                        >
                            {dropd ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                        {/* <Popper
                            id={popperID}
                            open={popperOpen}
                            anchorEl={popperAnchor}
                            transition
                            placement="bottom"
                            disablePortal={true}
                            modifiers={{
                                flip: {
                                    enabled: false,
                                },
                                preventOverflow: {
                                    enabled: true,
                                    boundariesElement: 'scrollParent',
                                },
                            }}
                        >
                            {({ TransitionProps }) => (
                                <ClickAwayListener onClickAway={hidePopper}>
                                    <div className={classes.popperWrapper}>
                                        <Paper className={classes.popperPaper} ref={popperRef}>
                                            <List>
                                                <NavLink
                                                    exact
                                                    to='/about'
                                                    className={classes.popperNavLink}
                                                    activeClassName={classes.activePopperNavLink}
                                                >
                                                    <ListItem>
                                                        <ListItemText primary='About' />
                                                    </ListItem>
                                                </NavLink>
                                                <NavLink
                                                    exact
                                                    to='/services'
                                                    className={classes.popperNavLink}
                                                    activeClassName={classes.activePopperNavLink}
                                                >
                                                    <ListItem>
                                                        <ListItemText primary='Services' />
                                                    </ListItem>
                                                </NavLink>
                                            </List>
                                        </Paper>
                                    </div>
                                </ClickAwayListener>
                            )}
                        </Popper> */}
                    </Toolbar>
                    <List className={classes.dropdown} ref={dropdRef}>
                        <NavLink
                            exact
                            to='/about'
                            className={classes.dropdownNavLink}
                            activeClassName={classes.activeDropdownNavLink}
                        >
                            <ListItem>
                                <ListItemText primary='About' />
                            </ListItem>
                        </NavLink>
                        <NavLink
                            exact
                            to='/services'
                            className={classes.dropdownNavLink}
                            activeClassName={classes.activeDropdownNavLink}
                        >
                            <ListItem>
                                <ListItemText primary='Services' />
                            </ListItem>
                        </NavLink>
                    </List>
                </Container>
            </AppBar>
        </React.Fragment >
    );
}