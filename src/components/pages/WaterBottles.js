import React from 'react';


import Service from './Service';



export default function HydroFlasks() {
    const gallery = [
        {
            thumb: '/gallery/water-bottle3-thumbnail.jpg',
            main: '/gallery/water-bottle3.jpg',
        },
        {
            thumb: '/gallery/water-bottle2-thumbnail.jpg',
            main: '/gallery/water-bottle2.jpg',
        },
        {
            thumb: '/gallery/water-bottle1-thumbnail.jpg',
            main: '/gallery/water-bottle1.jpg',
        },
    ];

    return (
        <>
            <Service title="Water Bottles" gallery={gallery} perPrice='$20 - $30' howToOrder='' youProvide="You provide the water bottle" />
        </>
    );
}