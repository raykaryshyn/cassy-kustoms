import React from 'react';


import Service from './Service';



export default function Shoes() {
    const gallery = [
        {
            thumb: '/gallery/shoes4-thumbnail.jpg',
            main: '/gallery/shoes4.jpg',
        },
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
            <Service title="Shoes" gallery={gallery} perPrice='$20 - $40' youProvide="You provide shoes" howToOrder='Let me know what you want painted and we will work together to create the perfect design Kustomized just for you!' />
        </>
    );
}