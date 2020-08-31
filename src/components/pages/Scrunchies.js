import React from 'react';

import ContactDialog from './ContactDialog';


import Service from './Service';



export default function Scrunchies() {
    const gallery = [
        {
            thumb: '/gallery/scrunchies1-thumbnail.jpg',
            main: '/gallery/scrunchies1.jpg',
        },
    ];

    return (
        <>
            <Service title="Scrunchies" gallery={gallery} order={'order today.'} />

            <ContactDialog />
        </>
    );
}