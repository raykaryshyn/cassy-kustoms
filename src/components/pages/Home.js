import React from 'react';

export default function Home() {
    /* React.useEffect(() => {
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
    }); */

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
        </>
    );
}