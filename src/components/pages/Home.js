import React from 'react';
import Page from './Page';

export default function Home() {
    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0 && window.scrollY < document.getElementById('about').offsetTop - 1) {
                window.location.hash = '';
            } else if (window.scrollY >= document.getElementById('about').offsetTop - 1 && window.scrollY < document.getElementById('services').offsetTop - 1) {
                window.location.hash = 'about';
            } else if (window.scrollY >= document.getElementById('services').offsetTop - 1) {
                window.location.hash = 'services';
            }
        }

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <Page>
            <div style={{ height: '100vh' }} id="about">About</div>
            <div style={{ height: '100vh' }} id="services">Services</div>
        </Page>
    );
}