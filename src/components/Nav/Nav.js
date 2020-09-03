import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useLocation } from 'react-router-dom';

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
    const location = useLocation();

    function smoothScrollToTop() {
        /* const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(smoothScrollToTop);
            window.scrollTo(0, c - c / 8);
        } */
        vanillaSmoothie.scrollTop({ easing: 'easeOutQuad' });

        const elms = document.getElementsByClassName('navLink');
        for (let i = 0; i < elms.length; i++) {
            elms[i].classList.remove('active');
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

    React.useLayoutEffect(() => {
        /* if (!dropd) {
            window.scrollBy(0, 1);
            window.scrollBy(0, -1);
        } */

        const handleResize = () => {
            if (location.pathname !== '/') {
                rootSmallRef.current.classList.add(classes.showSmall);
                document.getElementsByClassName(classes.rootBig)[0].style.display = 'none';
                document.body.style.paddingTop = rootSmallRef.current.getBoundingClientRect().height + 'px';
                rootSmallRef.current.style.transition = 'none';
            } else {
                if (window.scrollY <= 10) {
                    rootSmallRef.current.classList.remove(classes.showSmall);
                    setDropd(false);
                }
                document.getElementsByClassName(classes.rootBig)[0].style.display = 'block';
                document.body.style.paddingTop = 0;
                rootSmallRef.current.style.transition = '';
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
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
            background: theme.palette.background.default,
        },
        rootSmall: {
            transform: 'translateY(-100px)',
            transition: theme.transitions.create('transform', { duration: 555 }),
            background: `linear-gradient(0deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark3})`,
            boxShadow: `0 0 8px rgba(0,0,0,0.8)`,
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
            maxWidth: 260,
            '& path': {
                fill: '#fff',
            },
            padding: '10px 10px 10px 0',
            filter: `drop-shadow(0 0 19px ${theme.palette.primary.dark3})`,
            [theme.breakpoints.down('xs')]: {
                maxWidth: 220,
            },
            marginLeft: -4,
        },

        bigNavLinks: {
            display: 'flex',
            flexDirection: 'row',
            marginTop: 5,
            flexWrap: 'wrap',
            justifyContent: 'center',
        },
        bigNavLink: {
            fontSize: 19,
            textDecoration: 'none',
            color: theme.palette.primary.main,
            textTransform: 'uppercase',
            margin: '5px 20px',
            '&.active': {
                color: theme.palette.secondary.main,
            },
            '&:hover': {
                color: theme.palette.secondary.main,
            },
            letterSpacing: 3,
            fontFamily: theme.typography.fonts.header,
            transition: theme.transitions.create('color', { duration: 250 }),
            [theme.breakpoints.down(580)]: {
                fontSize: 16,
                margin: '5px 15px',
            },
        },
        smallNavLinks: {
            display: 'flex',
            flexDirection: 'row',
            [theme.breakpoints.down(790)]: {
                display: 'none',
            },
        },
        smallNavLink: {
            fontSize: 17,
            textDecoration: 'none',
            color: theme.palette.primary.light2,
            textTransform: 'uppercase',
            marginLeft: 45,
            opacity: 0.9,
            '&.active': {
                color: '#fff',
                textShadow: `0 0 8px ${theme.palette.primary.dark3}`,
                opacity: 1,
                '&:hover': {
                    color: '#fff',
                },
            },
            '&:hover': {
                color: 'rgba(255,255,255,0.9)',
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
            [theme.breakpoints.up(790)]: {
                display: 'none',
            },
        },

        dropdown: {
            display: dropd ? 'flex' : 'none',
            flexDirection: 'column',
            alignItems: 'flex-end',
            margin: 0,
            padding: 0,
            [theme.breakpoints.up(790)]: {
                display: 'none',
            },
        },
        dropdownNavLink: {
            display: 'block',
            textDecoration: 'none',
            color: theme.palette.primary.light2,
            textTransform: 'uppercase',
            opacity: 0.8,
            '& .MuiListItem-root': {
                padding: 0,
                margin: '0 0 18px',
            },
            '& .MuiTypography-root': {
                fontFamily: theme.typography.fonts.header,
                fontSize: 18,
                letterSpacing: '0.15rem',
            },
            '&.active': {
                color: '#fff',
                textShadow: '0 0 8px rgb(11, 82, 91)',
                opacity: 1,
            },
            transition: theme.transitions.create('color', { duration: 250 }),
        },
    }));
    const classes = useStyles();

    const handleLinkClick = (e) => {
        e.preventDefault();
        if (!document.getElementById('about') || !document.getElementById('services') || !document.getElementById('contact')) {
            window.location.href = e.currentTarget.href;
        } else if (document.getElementById('about') && document.getElementById('services') && document.getElementById('contact')) {
            const id = e.currentTarget.href.split('#')[1];
            const elmTop = document.getElementById(id).offsetTop;
            /* window.scrollTo({
                top: elmTop,
                behavior: "smooth"
            }); */
            vanillaSmoothie.scrollTo(elmTop, { easing: 'easeOutQuad' });
        }
    };

    React.useLayoutEffect(() => {
        const handleScroll = () => {
            if (document.getElementById('about') && document.getElementById('services') && document.getElementById('contact')) {
                if (window.scrollY === 0 || window.scrollY + 1 < document.getElementById('about').offsetTop) {
                    const elms = document.getElementsByClassName('navLink');
                    for (let i = 0; i < elms.length; i++) {
                        elms[i].classList.remove('active');
                    }
                } else if (window.scrollY + 1 >= document.getElementById('about').offsetTop && window.scrollY + 1 < document.getElementById('services').offsetTop) {
                    const elms1 = document.querySelectorAll("a[href='/#about']");
                    for (let i = 0; i < elms1.length; i++) {
                        elms1[i].classList.add('active');
                    }
                    const elms2 = document.querySelectorAll("a[href='/#services']");
                    for (let i = 0; i < elms2.length; i++) {
                        elms2[i].classList.remove('active');
                    }
                    const elms3 = document.querySelectorAll("a[href='/#contact']");
                    for (let i = 0; i < elms3.length; i++) {
                        elms3[i].classList.remove('active');
                    }
                } else if (window.scrollY + 1 >= document.getElementById('services').offsetTop && window.scrollY + 1 < document.getElementById('contact').offsetTop) {
                    const elms1 = document.querySelectorAll("a[href='/#about']");
                    for (let i = 0; i < elms1.length; i++) {
                        elms1[i].classList.remove('active');
                    }
                    const elms2 = document.querySelectorAll("a[href='/#services']");
                    for (let i = 0; i < elms2.length; i++) {
                        elms2[i].classList.add('active');
                    }
                    const elms3 = document.querySelectorAll("a[href='/#contact']");
                    for (let i = 0; i < elms3.length; i++) {
                        elms3[i].classList.remove('active');
                    }
                } else if (window.scrollY + 1 >= document.getElementById('contact').offsetTop) {
                    const elms1 = document.querySelectorAll("a[href='/#about']");
                    for (let i = 0; i < elms1.length; i++) {
                        elms1[i].classList.remove('active');
                    }
                    const elms2 = document.querySelectorAll("a[href='/#services']");
                    for (let i = 0; i < elms2.length; i++) {
                        elms2[i].classList.remove('active');
                    }
                    const elms3 = document.querySelectorAll("a[href='/#contact']");
                    for (let i = 0; i < elms3.length; i++) {
                        elms3[i].classList.add('active');
                    }
                }
            } else if (location.pathname !== '/') {
                const elms1 = document.querySelectorAll("a[href='/#about']");
                for (let i = 0; i < elms1.length; i++) {
                    elms1[i].classList.remove('active');
                }
                const elms2 = document.querySelectorAll("a[href='/#services']");
                for (let i = 0; i < elms2.length; i++) {
                    elms2[i].classList.add('active');
                }
                const elms3 = document.querySelectorAll("a[href='/#contact']");
                for (let i = 0; i < elms3.length; i++) {
                    elms3[i].classList.remove('active');
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
                            <a href="/#contact" className={['navLink', classes.bigNavLink].join(' ')} onClick={handleLinkClick}>Contact</a>
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
                            <a href="/#contact" className={['navLink', classes.smallNavLink].join(' ')} onClick={handleLinkClick}>Contact</a>
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
                        <a
                            href='/#contact'
                            className={['navLink', classes.dropdownNavLink].join(' ')}
                            onClick={handleDropdClick}
                        >
                            <ListItem>
                                <ListItemText primary='Contact' />
                            </ListItem>
                        </a>
                    </List>
                </Container>
            </AppBar>
        </React.Fragment>
    );
}