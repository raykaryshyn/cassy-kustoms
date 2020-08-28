import React from 'react';
import ContactForm from './ContactForm';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
/* import { makeStyles } from '@material-ui/core/styles'; */

export default function Home() {
    /* const useStyles = makeStyles(theme => ({
    }));
    const classes = useStyles(); */

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
            <div style={{ height: '100vh' }} id="about" className="section">About</div>
            <div style={{ height: '100vh' }} id="services" className="section">Services</div>
            <div style={{ height: '100vh' }} id="contact" className="section">
                <Container maxWidth="lg" style={{paddingTop: '50px'}}>
                    <Typography variant="h3" component="h2" style={{textAlign: 'center'}}>Contact</Typography>
                </Container>
                <Container maxWidth="md">
                    <ContactForm />
                </Container>
            </div>
        </>
    );
}