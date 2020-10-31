import React from 'react';


import Service from './Service';



export default function Other() {
    const gallery = [
        {
            thumb: '/gallery/other2-thumbnail.jpg',
            main: '/gallery/other2.jpg',
        },
        {
            thumb: '/gallery/other1-thumbnail.jpg',
            main: '/gallery/other1.jpg',
        },
    ];

    return (
        <>
            <Service title="Other" gallery={gallery} perPrice='$20 - $40' youProvide="You provide the item" howToOrder='Let me know what you want painted and we will work together to create the perfect design Kustomized just for you!' />
        </>
    );
}