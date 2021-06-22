import React from 'react';
import ContactForm from './ContactForm';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PaintLine from '../paintStroke.png';
import PaintLineLone from '../paintStroke_lone.png';
import Grid from '@material-ui/core/Grid';
/* import InstagramIcon from '@material-ui/icons/Instagram'; */

import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import { ReactComponent as PaintIcon } from '../CassyKustom_icon_painting.svg';
import { ReactComponent as SewIcon } from '../CassyKustom_icon_sewing.svg';
import vanillaSmoothie from 'vanilla-smoothie';
import SalesMap from '../SalesMap';


export default function Home() {
    const useStyles = makeStyles(theme => ({
        body: {
            background: '#ffffff',
        },
        welcomeSection: {
            /*  background: `linear-gradient(-45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`, */
            backgroundColor: '#23270d',
            backgroundImage: 'url(/header-bg.jpg)',
            marginTop: 20,
            padding: '75px 0 0',
            overflow: 'hidden',
            minHeight: 600,
            [theme.breakpoints.down(950)]: {
                minHeight: 500,
            },
            [theme.breakpoints.down(700)]: {
                minHeight: 400,
            },
            [theme.breakpoints.down(500)]: {
                minHeight: 250,
            },
            display: 'flex',
            flexDirection: 'column',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        },
        welcomeContainer: {
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        welcomeTitle: {
            textAlign: 'center',
            color: '#fff',
            fontSize: '7.25rem',
            [theme.breakpoints.down(950)]: {
                fontSize: '7rem',
            },
            [theme.breakpoints.down(700)]: {
                fontSize: '6rem',
            },
            [theme.breakpoints.down(600)]: {
                fontSize: '5rem',
            },
            [theme.breakpoints.down(500)]: {
                fontSize: '3.9rem',
            },
            [theme.breakpoints.down(370)]: {
                fontSize: '3.25rem',
            },
            textShadow: '0 0 10px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.7), 0 0 40px rgba(0,0,0,0.9)',
            letterSpacing: 8,
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
        welcomePaintLineTop: {
            transform: 'translateY(25px)',
            '& img': {
                height: 9.5,
            }
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
            '& .MuiContainer-root': {
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
            },
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
            paddingTop: 70,
            textShadow: '1px 1px 0px #ffffff, 2px 2px 0px rgba(0,0,0,0.2)',
        },
        sectionSubtitle: {
            textAlign: 'center',
            paddingTop: 2,
            marginBottom: 2,
            color: theme.palette.primary.dark2,
            maxWidth: '84ch',
            fontFamily: theme.typography.fonts.header,
            margin: '0 auto',
            fontSize: 18,
            '&.contact': {
                [theme.breakpoints.down(440)]: {
                    maxWidth: '340px',
                },
            },
        },
        aboutSubtitle: {
            paddingTop: 20,
            fontSize: 18,
        },
        sectionTitleSecondary: {
            color: theme.palette.primary.dark2,
            paddingTop: 40,
            textShadow: '1px 1px 0px #CDE4E2, 2px 2px 0px rgba(0,0,0,0.2)',
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
            /* overflow: 'hidden', */
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
            /* overflow: 'hidden', */
            backgroundPosition: 'center center',
            boxShadow: '0 0 15px rgba(0,0,0,0.25)',
            border: '2px solid #fff',
            '&:hover span': {
                textShadow: '0 0 1px black, 0 0 2px black, 0 0 3px black, 0 0 4px rgba(0,0,0,1), 0 0 16px rgba(0,0,0,1), 0 0 32px rgba(0,0,0,0.5), 0 0 100px rgba(0,0,0,0.5)',
            },
            '&:hover svg': {
                filter: 'drop-shadow(0 0 2px rgb(0,0,0))',
            },
        },
        serviceContent: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            textShadow: '0 0 3px black, 0 0 4px rgba(0,0,0,0.75), 0 0 16px rgba(0,0,0,0.5)',
            '& span': {
                zIndex: 1,
                transition: theme.transitions.create('text-shadow', { duration: 200 }),
            },
        },
        serviceIcon: {
            width: 55,
            marginBottom: 2,
            filter: `drop-shadow(0 0 5px rgb(0,0,0))`,
            zIndex: 1,
            transition: theme.transitions.create('filter', { duration: 200 }),
        },
        backdrop: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            background: theme.palette.primary.main,
            opacity: 0.5,
            transition: [theme.transitions.create('background', { duration: 400 }), theme.transitions.create('opacity', { duration: 400 })].join(', '),
            [theme.breakpoints.up('md')]: {
                'a:hover &': {
                    opacity: 0,
                },
            },
            borderRadius: theme.shape.borderRadius,
        },


        profilePic: {
            width: 300,
            height: 300,
            [theme.breakpoints.down(580)]: {
                width: 200,
                height: 200,
                boxShadow: `0 0 0 6px rgba(255,255,255,0.6)`,
            },
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            boxShadow: `0 0 0 9px rgba(255,255,255,0.6)`,
            marginTop: 40,
            '& img': {
                display: 'block',
                width: 'auto',
                height: '100%',
            },
        },
        instagramWrapper: {
            marginTop: 30,
            boxShadow: '3px 3px 6px rgba(0,0,0,0.1), -3px -3px 6px rgba(255,255,255,0.5)',
            borderRadius: theme.shape.borderRadius,
            '& a': {
                margin: 1,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                padding: '5px 12px',
                color: theme.palette.primary.main,
                fontFamily: theme.typography.fonts.header,
                fontSize: 20,
                '& svg': {
                    color: theme.palette.secondary.main,
                    marginRight: 5,
                },
                '& img.button': {
                    width: 190,
                },
                borderRadius: theme.shape.borderRadius,
                transition: theme.transitions.create('box-shadow', { duration: 250 }),
                '&:hover': {
                    boxShadow: 'inset 3px 3px 6px rgba(0,0,0,0.1), inset -3px -3px 6px rgba(255,255,255,0.5)',
                },
            },
            position: 'relative',
            '& img.text': {
                position: 'absolute',
                top: 0,
                right: 0,
                transform: 'translateX(98%) translateY(-72%)',
                width: 150,
                [theme.breakpoints.down(580)]: {
                    width: 130,
                    left: '50%',
                    transform: 'translateX(-50%) translateY(120%)',
                },
            },
            [theme.breakpoints.down(580)]: {
                marginBottom: 30,
            },
        },
        link: {
            color: theme.palette.secondary.main,
        },
        cursive: {
            fontFamily: '"Mr De Haviland", cursive',
            fontSize: 48,
            color: theme.palette.secondary.main,
            /* textShadow: `0 0 1px ${theme.palette.secondary.main}`, */
            paddingTop: 20,
            display: 'inline-block',
            lineHeight: '55.2px',
            textAlign: 'center',
            width: '100%',
            '&.contact': {
                display: 'block',
                margin: '0 auto',
                lineHeight: '42px',
                /* paddingTop: 20, */
                [theme.breakpoints.down(480)]: {
                    fontSize: 44,
                },
                [theme.breakpoints.down(450)]: {
                    fontSize: 42,
                },
                [theme.breakpoints.down(415)]: {
                    maxWidth: '312px',
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

    return (
        <>
            <div className={classes.body}>
                <Nav />

                <div className={[classes.paintLineWrapper, classes.welcomePaintLineTop].join(' ')}><img src={PaintLineLone} className={classes.paintLine} alt="Paint Line" /></div>
                <div id="welcome" className={classes.welcomeSection}>
                    <Container maxWidth="md" className={classes.welcomeContainer}>
                        <Typography component="h1" variant="h1" className={classes.welcomeTitle}>
                            WELCOME
                        </Typography>
                    </Container>
                    <div className={classes.sectionGoto} id="about">&nbsp;</div>
                </div>
                <div className={[classes.paintLineWrapper, classes.welcomePaintLine].join(' ')}><img src={PaintLine} className={classes.paintLine} alt="Paint Line" /></div>
                <div className={[classes.aboutSection].join(' ')}>
                    <Container maxWidth="lg">
                        <Typography variant="h3" component="h2" className={[classes.sectionTitle, classes.sectionTitleSecondary].join(' ')}>About</Typography>
                        <Typography className={[classes.sectionSubtitle, classes.sectionSubtitleSecondary, classes.aboutSubtitle].join(' ')}>
                            I am an artist and seamtress located near D.C. and I love to customize everyday objects. I work with
                            a variety of media such as acrylic paints, markers, and nail polish depending on the painting surface.
                            I also enjoy working with a range of fabrics and patterns to sew clothes, hats and more. Recently,
                            my sewing skills have focused on making face masks as a way to help during this pandemic.

                            <br /><br />

                            Check out my work in the <a href="/#services" onClick={handleLinkClick} className={classes.link}>services</a> section where you can also place an order.


                            <span className={classes.cursive}>Let me know if you want anything Kustomized!</span>
                        </Typography>
                        <div className={classes.profilePic}>
                            <img src="/about_image.jpg" alt="Profile" />
                        </div>
                        <div className={classes.instagramWrapper}>
                            <a href="https://www.instagram.com/cassykustoms/" target="_blank" rel="noopener noreferrer">
                                <img src="/about_instagram_button.png" alt="@cassykustoms" className="button" />
                            </a>
                            <img src="/about_instagram_text.png" alt="tag me in your story" className="text" />
                        </div>
                    </Container>
                    <div className={classes.sectionGoto} id="services">&nbsp;</div>
                </div>
                <div className={[classes.paintLineWrapper, classes.aboutBottomPaintLine].join(' ')}><img src={PaintLine} className={classes.paintLine} alt="Paint Line" /></div>
                <SalesMap />
                <div>
                    <Container maxWidth="lg">
                        <Typography variant="h3" component="h2" className={classes.sectionTitle}>Services</Typography>
                        <Typography className={classes.sectionSubtitle}>
                            Here are my painting and sewing services.
                            <br />
                            The face mask section includes 100+ available <a href="/masks/order" className={classes.link}>fabric choices</a> for a Kustom-fitted face mask!
                            <br />
                            Don't see what you're looking for? <a href="/#contact" onClick={handleLinkClick} className={classes.link}>Contact me</a> and I'll see what I can do!
                        </Typography>

                        <Grid container spacing={3} className={classes.servicesContainer}>
                            <Grid item xs={12} sm={6} md={4}>
                                <div className={classes.serviceItem}>
                                    <Link className={classes.serviceCard} to="/phone-cases" style={{ backgroundImage: 'url(/gallery/phone-case1-thumbnail.jpg)' }}>
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
                                    <Link className={classes.serviceCard} to="/airpods-cases" style={{ backgroundImage: 'url(/gallery/airpods-case4-thumbnail.jpg)' }}>
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
                                    <Link className={classes.serviceCard} to="/water-bottles" style={{ backgroundImage: 'url(/gallery/water-bottle3-thumbnail.jpg)' }}>
                                        <div className={classes.serviceContent}>
                                            <div className={classes.backdrop}></div>
                                            <PaintIcon className={classes.serviceIcon} />
                                            <span>
                                                Water Bottles
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <div className={classes.serviceItem}>
                                    <Link className={classes.serviceCard} to="/shoes" style={{ backgroundImage: 'url(/gallery/shoes7-thumbnail.jpg)' }}>
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
                                    <Link className={classes.serviceCard} to="/other" style={{ backgroundImage: 'url(/gallery/other4-thumbnail.jpg)' }}>
                                        <div className={classes.serviceContent}>
                                            <div className={classes.backdrop}></div>
                                            <PaintIcon className={classes.serviceIcon} />
                                            <span>
                                                Other
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <div className={classes.serviceItem}>
                                    <Link className={classes.serviceCard} to="/masks" style={{ backgroundImage: 'url(/gallery/face-mask70-thumbnail.jpg)' }}>
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
                                    <Link className={classes.serviceCard} to="/scrunchies" style={{ backgroundImage: 'url(/gallery/scrunchies-main-thumbnail.jpg)' }}>
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
                                    <Link className={classes.serviceCard} to="/hats" style={{ backgroundImage: 'url(/gallery/hat3-thumbnail.jpg)' }}>
                                        <div className={classes.serviceContent}>
                                            <div className={classes.backdrop}></div>
                                            <SewIcon className={classes.serviceIcon} />
                                            <span>
                                                Hats
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <div className={classes.serviceItem}>
                                    <Link className={classes.serviceCard} to="/clothes" style={{ backgroundImage: 'url(/gallery/clothes15-thumbnail.jpg)' }}>
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
                        <Typography className={[classes.sectionSubtitle, classes.sectionSubtitleSecondary, 'contact'].join(' ')}>
                            Please fill out the form below to get in touch with me.
                        </Typography>
                        <span className={[classes.cursive, 'contact'].join(' ')}>I look forward to working with you!</span>
                    </Container>
                    <Container maxWidth="md">
                        <ContactForm secondary className={classes.contactForm} />
                    </Container>
                </div>
            </div>
        </>
    );
}