import React from 'react';
import ContactForm from './ContactForm';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PaintLine from '../paintStroke.png';
import Footer from '../Footer';

export default function Home() {
    const useStyles = makeStyles(theme => ({
        welcomeSection: {
            background: 'linear-gradient(-45deg, #ce4842, rgb(0, 138, 145))',
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
            background: '#c8e3e2',
        },
        sectionGoto: {
            display: 'block',
        },
        contactSection: {
            background: '#c8e3e2',
        },
        sectionTitle: {
            fontSize: 35,
            [theme.breakpoints.down(550)]: {
                fontSize: 30,
            },
            letterSpacing: 3,
            paddingTop: 55,
            textAlign: 'center',
        },
        sectionSubtitle: {
            textAlign: 'center',
            paddingTop: 5,
        },
        sectionTitleSecondary: {
            color: '#005861',
        },
        sectionSubtitleSecondary: {
            color: '#005861',
        },
        contactForm: {
            marginTop: 30,
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

                    <div className={classes.servicesContainer}>
                        <div>Service 1</div>
                        <div>Service 2</div>
                        <div>Service 3</div>
                        <div>Service 4</div>
                        <div>Service 5</div>
                        <div>Service 6</div>
                    </div>
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
            <Footer id="footer" />
        </>
    );
}