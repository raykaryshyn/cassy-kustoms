import React from 'react';

import ContactDialog from './ContactDialog';


import Service from './Service';



export default function HydroFlasks() {
    const gallery = [
        {
            thumb: '/gallery/hydro-flask3-thumbnail.jpg',
            main: '/gallery/hydro-flask3.jpg',
        },
        {
            thumb: '/gallery/hydro-flask2-thumbnail.jpg',
            main: '/gallery/hydro-flask2.jpg',
        },
        {
            thumb: '/gallery/hydro-flask1-thumbnail.jpg',
            main: '/gallery/hydro-flask1.jpg',
        },
    ];

    return (
        <>
            <Service title="Hydro Flasks" gallery={gallery} order={'order today.'} />

            <ContactDialog />
        </>
    );
}