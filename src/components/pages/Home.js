import React from 'react';
import ContactForm from './ContactForm';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PaintLine from '../paintStroke.png';
import Grid from '@material-ui/core/Grid';

import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import { ReactComponent as PaintIcon } from '../CassyKustom_icon_painting.svg';
import { ReactComponent as SewIcon } from '../CassyKustom_icon_sewing.svg';

export default function Home() {
    const useStyles = makeStyles(theme => ({
        welcomeSection: {
            background: `linear-gradient(-45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
            marginTop: 40,
            padding: '75px 0 0',
            overflow: 'hidden',
        },
        welcomeTitle: {
            textAlign: 'center',
            color: '#fff',
            fontSize: '5rem',
        },
        welcomeBody: {
            color: '#fff',
            textAlign: 'center',
            marginBottom: 10,
        },
        paintLine: {
            display: 'block',
            width: '100%',
            height: 20,
            [theme.breakpoints.down(1560)]: {
                width: 'auto',
            },
        },
        paintLineWrapper: {
            overflow: 'hidden',
        },
        welcomePaintLine: {
            marginTop: -10,
        },
        aboutBottomPaintLine: {
            transform: 'scale(-1, -1)',
            marginTop: -16,
        },
        aboutSection: {
            background: theme.palette.primary.light3,
        },
        sectionGoto: {
            display: 'block',
        },
        contactSection: {
            background: theme.palette.primary.light3,
        },
        sectionTitle: {
            textAlign: 'center',
            fontSize: 40,
            [theme.breakpoints.down(550)]: {
                fontSize: 35,
            },
            letterSpacing: 1,
            marginBottom: 2,
            color: theme.palette.primary.dark2,
            paddingTop: 65,
        },
        sectionSubtitle: {
            textAlign: 'center',
            paddingTop: 3,
            marginBottom: 2,
            color: theme.palette.primary.dark2,
        },
        sectionTitleSecondary: {
            color: theme.palette.primary.dark2,
            paddingTop: 40,
        },
        sectionSubtitleSecondary: {
            color: theme.palette.primary.dark2,
        },
        contactForm: {
            marginTop: 30,
        },
        servicesContainer: {
            marginTop: 30,
            justifyContent: 'center',
            marginBottom: 30,
        },
        serviceItem: {
            position: 'relative',
            paddingTop: '75%',
            borderRadius: theme.shape.borderRadius,
            overflow: 'hidden',
            /* [theme.breakpoints.up('md')]: {
                transition: theme.transitions.create('transform'),
                '&:hover': {
                    transform: 'scale(0.98)',
                },
            }, */
            [theme.breakpoints.down('md')]: {
                transition: theme.transitions.create('transform', { duration: 66 }),
                '&:active': {
                    transform: 'scale(0.966)',
                },
            },
            cursor: 'pointer',
        },
        serviceCard: {
            borderRadius: theme.shape.borderRadius,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            textDecoration: 'none',
            color: '#fff',
            fontFamily: theme.typography.fonts.header,
            fontWeight: 400,
            fontSize: 30,
            textAlign: 'center',
            backgroundSize: 'cover',
            backgroundColor: theme.palette.primary.light3,
            overflow: 'hidden',
            backgroundPosition: 'center center',
        },
        serviceContent: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            textShadow: '0 0 12px rgb(0,0,0), 0 0 6px rgb(0,0,0)',
            '& span': {
                zIndex: 1,
            },
        },
        serviceIcon: {
            width: 55,
            marginBottom: 2,
            filter: `drop-shadow(0 0 5px rgb(0,0,0))`,
            zIndex: 1,
        },
        backdrop: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            background: 'rgba(0,0,0,1)',
            opacity: 0.2,
            transition: [theme.transitions.create('background', {duration: 200}), theme.transitions.create('opacity', {duration: 200})].join(', '),
            [theme.breakpoints.up('md')]: {
                'a:hover &': {
                    background: theme.palette.primary.main,
                    opacity: 0.6,
                },
            },
        }
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
            const sections = document.getElementsByClassName(classes.sectionGoto);
            for (let i = 0; i < sections.length; i++) {
                sections[i].style.height = document.getElementById('navSmall').getBoundingClientRect().height + 'px';
            }

            document.getElementById('contactContainer').style.minHeight = (viewportToPixels('100vh') - document.getElementById('navSmall').getBoundingClientRect().height - document.getElementById('footer').getBoundingClientRect().height - document.getElementById('footerPaintLine').getBoundingClientRect().height + 10) + 'px';
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    return (
        <>
            <Nav />
            <div id="welcome" className={classes.welcomeSection}>
                <Container maxWidth="md">
                    <Typography component="h1" variant="h1" className={classes.welcomeTitle}>
                        WELCOME
                    </Typography>
                    <Typography className={classes.welcomeBody}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas interdum massa, quis tincidunt sem sagittis in. Suspendisse suscipit libero quis arcu condimentum lacinia. Donec eget augue in libero commodo auctor.
                    </Typography>
                </Container>
                <div className={classes.sectionGoto} id="about">&nbsp;</div>
            </div>
            <div className={[classes.paintLineWrapper, classes.welcomePaintLine].join(' ')}><img src={PaintLine} className={classes.paintLine} alt="Paint Line" /></div>
            <div className={[classes.aboutSection].join(' ')}>
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h2" className={[classes.sectionTitle, classes.sectionTitleSecondary].join(' ')}>About</Typography>
                    <Typography className={[classes.sectionSubtitle, classes.sectionSubtitleSecondary].join(' ')}>About me...</Typography>
                </Container>
                <div className={classes.sectionGoto} id="services">&nbsp;</div>
            </div>
            <div className={[classes.paintLineWrapper, classes.aboutBottomPaintLine].join(' ')}><img src={PaintLine} className={classes.paintLine} alt="Paint Line" /></div>
            <div>
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h2" className={classes.sectionTitle}>Services</Typography>
                    <Typography className={classes.sectionSubtitle}>Here are my services</Typography>

                    <Grid container spacing={3} className={classes.servicesContainer}>
                        <Grid item xs={12} sm={6} md={4}>
                            <div className={classes.serviceItem}>
                                <Link className={classes.serviceCard} to="/phone-cases" style={{ backgroundImage: 'url(/gallery/phone-case1.jpg)' }}>
                                    <div className={classes.serviceContent}>
                                        <div className={classes.backdrop}></div>
                                        <PaintIcon className={classes.serviceIcon} />
                                        <span>
                                            Phone Cases
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <div className={classes.serviceItem}>
                                <Link className={classes.serviceCard} to="/airpods-cases" style={{ backgroundImage: 'url(/gallery/airpods-case4.jpg)' }}>
                                    <div className={classes.serviceContent}>
                                        <div className={classes.backdrop}></div>
                                        <PaintIcon className={classes.serviceIcon} />
                                        <span>
                                            AirPods Cases
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <div className={classes.serviceItem}>
                                <Link className={classes.serviceCard} to="/hydro-flasks" style={{ backgroundImage: 'url(/gallery/hydro-flask3.jpg)' }}>
                                    <div className={classes.serviceContent}>
                                        <div className={classes.backdrop}></div>
                                        <PaintIcon className={classes.serviceIcon} />
                                        <span>
                                            Hydro Flasks
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <div className={classes.serviceItem}>
                                <Link className={classes.serviceCard} to="/shoes" style={{ backgroundImage: 'url(/gallery/shoes2.jpg)' }}>
                                    <div className={classes.serviceContent}>
                                        <div className={classes.backdrop}></div>
                                        <PaintIcon className={classes.serviceIcon} />
                                        <span>
                                            Shoes
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <div className={classes.serviceItem}>
                                <Link className={classes.serviceCard} to="/masks" style={{ backgroundImage: 'url(/gallery/face-mask3.jpg)' }}>
                                    <div className={classes.serviceContent}>
                                        <div className={classes.backdrop}></div>
                                        <SewIcon className={classes.serviceIcon} />
                                        <span>
                                            Face Masks
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <div className={classes.serviceItem}>
                                <Link className={classes.serviceCard} to="/scrunchies" style={{ backgroundImage: 'url(/gallery/scrunchies1.jpg)' }}>
                                    <div className={classes.serviceContent}>
                                        <div className={classes.backdrop}></div>
                                        <SewIcon className={classes.serviceIcon} />
                                        <span>
                                            Scrunchies
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <div className={classes.serviceItem}>
                                <Link className={classes.serviceCard} to="/bucket-hats">
                                    <div className={classes.serviceContent}>
                                        <div className={classes.backdrop}></div>
                                        <SewIcon className={classes.serviceIcon} />
                                        <span>
                                            Bucket Hats
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <div className={classes.serviceItem}>
                                <Link className={classes.serviceCard} to="/clothes" style={{ backgroundImage: 'url(/gallery/clothes1.jpg)' }}>
                                    <div className={classes.serviceContent}>
                                        <div className={classes.backdrop}></div>
                                        <SewIcon className={classes.serviceIcon} />
                                        <span>
                                            Clothes
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className={classes.sectionGoto} id="contact">&nbsp;</div>
            <div className={[classes.paintLineWrapper, classes.welcomePaintLine].join(' ')} id="footerPaintLine"><img src={PaintLine} className={classes.paintLine} alt="Paint Line" /></div>
            <div id="contactContainer" className={classes.contactSection}>
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h2" className={[classes.sectionTitle, classes.sectionTitleSecondary].join(' ')}>Contact</Typography>
                    <Typography className={[classes.sectionSubtitle, classes.sectionSubtitleSecondary].join(' ')}>To get in touch with me, please fill out the form below...</Typography>
                </Container>
                <Container maxWidth="md">
                    <ContactForm secondary className={classes.contactForm} />
                </Container>
            </div>
        </>
    );
}