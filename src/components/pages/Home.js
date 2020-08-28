import React from 'react';
import ContactForm from './ContactForm';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default function Home() {
    const useStyles = makeStyles(theme => ({
        welcomeSection: {
            background: 'linear-gradient(-45deg, #dc6658, rgb(0, 138, 145))',
            marginTop: 40,
            padding: '50px 0',
        },
        welcomeTitle: {
            textAlign: 'center',
            color: '#fff',
            fontSize: '5rem',
        },
        welcomeBody: {
            color: '#fff',
            textAlign: 'center',
        },
    }));
    const classes = useStyles();

    React.useLayoutEffect(() => {
        const handleResize = () => {
            const sections = document.getElementsByClassName('section');
            for (let i = 0; i < sections.length; i++) {
                sections[i].style.paddingTop = document.getElementById('navSmall').getBoundingClientRect().height + 'px';
            }
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
            </div>
            <div style={{ height: '100vh' }} id="about" className="section">About</div>
            <div style={{ height: '100vh' }} id="services" className="section">Services</div>
            <div style={{ height: '100vh' }} id="contact" className="section">
                <Container maxWidth="lg" style={{ paddingTop: '50px' }}>
                    <Typography variant="h3" component="h2" style={{ textAlign: 'center' }}>Contact</Typography>
                </Container>
                <Container maxWidth="md">
                    <ContactForm />
                </Container>
            </div>
        </>
    );
}