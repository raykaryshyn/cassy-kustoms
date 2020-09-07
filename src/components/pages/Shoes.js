import React from 'react';


import Service from './Service';



export default function Shoes() {
    const gallery = [
        {
            thumb: '/gallery/shoes3-thumbnail.jpg',
            main: '/gallery/shoes3.jpg',
        },
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
            <Service title="Shoes" gallery={gallery} />
        </>
    );
}