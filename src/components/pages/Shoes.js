import React from 'react';

import ContactDialog from './ContactDialog';


import Service from './Service';



export default function Shoes() {
    const gallery = [
        {
            thumb: '/gallery/shoes2-thumbnail.jpg',
            main: '/gallery/shoes2.jpg',
        },
        {
            thumb: '/gallery/shoes1-thumbnail.jpg',
            main: '/gallery/shoes1.jpg',
        },
    ];

    return (
        <>
            <Service title="Shoes" gallery={gallery} order={'order today.'} />

            <ContactDialog />
        </>
    );
}