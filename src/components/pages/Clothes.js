import React from 'react';


import Service from './Service';



export default function Clothes() {
    const gallery = [
        {
            thumb: '/gallery/clothes1-thumbnail.jpg',
            main: '/gallery/clothes1.jpg',
        },
    ];

    return (
        <>
            <Service title="Clothes" gallery={gallery} perPrice='TBD' />
        </>
    );
}