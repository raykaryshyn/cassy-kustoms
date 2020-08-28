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
import vanillaSmoothie from 'vanilla-smoothie';



export default function Nav(props) {

    function smoothScrollToTop() {
        /* const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(smoothScrollToTop);
            window.scrollTo(0, c - c / 8);
        } */
        vanillaSmoothie.scrollTop({ easing: 'easeOutQuad' });
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
            marginTop: 7,
        },
        bigNavLink: {
            fontSize: 20.5,
            textDecoration: 'none',
            color: '#006770',
            textTransform: 'uppercase',
            margin: '5px 20px',
            '&.active': {
                color: '#004950',
            },
            '&:hover': {
                color: '#004950',
            },
            letterSpacing: '0.175rem',
            fontFamily: theme.typography.fonts.header,
            transition: theme.transitions.create('color', { duration: 250 }),
        },
        smallNavLinks: {
            display: 'flex',
            flexDirection: 'row',
            [theme.breakpoints.down(670)]: {
                display: 'none',
            },
        },
        smallNavLink: {
            fontSize: 18,
            textDecoration: 'none',
            color: '#91c4c1',
            textTransform: 'uppercase',
            marginLeft: 45,
            '&.active': {
                color: '#fff',
            },
            '&:hover': {
                color: '#fff',
            },
            fontFamily: theme.typography.fonts.header,
            letterSpacing: '0.175rem',
            transition: theme.transitions.create('color', { duration: 250 }),
        },
        hamburger: {
            '& .MuiSvgIcon-root': {
                width: 30,
                height: 30,
            },
            [theme.breakpoints.up(670)]: {
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
            color: '#91c4c1',
            fontFamily: theme.typography.fonts.header,
            textTransform: 'uppercase',
            opacity: 0.8,
            '& .MuiListItem-root': {
                padding: '0 0 18px',
            },
            '&.active': {
                color: '#fff',
            },
            transition: theme.transitions.create('color', { duration: 250 }),
        },
    }));
    const classes = useStyles();

    const handleLinkClick = (e) => {
        e.preventDefault();
        if (!document.getElementById('about') || !document.getElementById('services')) {
            window.location.href = '/';
        } else if (document.getElementById('about') && document.getElementById('services')) {
            const id = e.currentTarget.href.split('#')[1];
            const elmTop = document.getElementById(id).offsetTop;
            /* window.scrollTo({
                top: elmTop,
                behavior: "smooth"
            }); */
            vanillaSmoothie.scrollTo(elmTop, { easing: 'easeOutQuad' });
        }
    };

    React.useEffect(() => {
        const handleScroll = () => {
            if (document.getElementById('about') && document.getElementById('services')) {
                if (window.scrollY === 0 || window.scrollY < document.getElementById('about').offsetTop - 1) {
                    const elms = document.getElementsByClassName('navLink');
                    for (let i = 0; i < elms.length; i++) {
                        elms[i].classList.remove('active');
                    }
                } else if (window.scrollY >= document.getElementById('about').offsetTop - 1 && window.scrollY < document.getElementById('services').offsetTop - 1) {
                    const elms1 = document.querySelectorAll("a[href='/#services']");
                    for (let i = 0; i < elms1.length; i++) {
                        elms1[i].classList.remove('active');
                    }
                    const elms2 = document.querySelectorAll("a[href='/#about']");
                    for (let i = 0; i < elms2.length; i++) {
                        elms2[i].classList.add('active');
                    }
                } else if (window.scrollY >= document.getElementById('services').offsetTop - 1) {
                    const elms1 = document.querySelectorAll("a[href='/#services']");
                    for (let i = 0; i < elms1.length; i++) {
                        elms1[i].classList.add('active');
                    }
                    const elms2 = document.querySelectorAll("a[href='/#about']");
                    for (let i = 0; i < elms2.length; i++) {
                        elms2[i].classList.remove('active');
                    }
                }
            }
        }

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const handleDropdClick = (e) => {
        handleLinkClick(e);
        hideDropd();
    }

    return (
        <React.Fragment>
            <AppBar position="static" elevation={0} className={classes.rootBig}>
                <Container maxWidth="lg">
                    <Toolbar className={classes.bigToolbar}>
                        <Link className={classes.bigLogo} to="/" onClick={smoothScrollToTop}><Logo ref={bigLogoRef} /></Link>
                        <div className={classes.bigNavLinks}>
                            <a href="/#about" className={['navLink', classes.bigNavLink].join(' ')} onClick={handleLinkClick}>About</a>
                            <a href="/#services" className={['navLink', classes.bigNavLink].join(' ')} onClick={handleLinkClick}>Services</a>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>

            <AppBar elevation={0} className={classes.rootSmall} ref={rootSmallRef} id="navSmall">
                <Container maxWidth="lg">
                    <Toolbar className={classes.smallToolbar}>
                        <Link className={classes.smallLogo} to="/" onClick={smoothScrollToTop}><Logo ref={smallLogoRef} /></Link>
                        <div className={classes.smallNavLinks}>
                            <a href="/#about" className={['navLink', classes.smallNavLink].join(' ')} onClick={handleLinkClick}>About</a>
                            <a href="/#services" className={['navLink', classes.smallNavLink].join(' ')} onClick={handleLinkClick}>Services</a>
                        </div>
                        <IconButton
                            edge="end"
                            className={classes.hamburger}
                            color="inherit"
                            onClick={toggleDropd}
                            disableRipple
                        >
                            {dropd ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                    </Toolbar>
                    <List className={classes.dropdown} ref={dropdRef}>
                        <a
                            href='/#about'
                            className={['navLink', classes.dropdownNavLink].join(' ')}
                            onClick={handleDropdClick}
                        >
                            <ListItem>
                                <ListItemText primary='About' />
                            </ListItem>
                        </a>
                        <a
                            href='/#services'
                            className={['navLink', classes.dropdownNavLink].join(' ')}
                            onClick={handleDropdClick}
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