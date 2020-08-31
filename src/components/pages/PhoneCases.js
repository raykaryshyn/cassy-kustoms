import React from 'react';

import ContactDialog from './ContactDialog';


import Service from './Service';



export default function PhoneCases() {
    const gallery = [
        {
            thumb: '/gallery/phone-case1-thumbnail.jpg',
            main: '/gallery/phone-case1.jpg',
        },
        {
            thumb: '/gallery/phone-case2-thumbnail.jpg',
            main: '/gallery/phone-case2.jpg',
        },
        {
            thumb: '/gallery/phone-case3-thumbnail.jpg',
            main: '/gallery/phone-case3.jpg',
        },
        {
            thumb: '/gallery/phone-case4-thumbnail.jpg',
            main: '/gallery/phone-case4.jpg',
        },
        {
            thumb: '/gallery/phone-case5-thumbnail.jpg',
            main: '/gallery/phone-case5.jpg',
        },
    ];

    return (
        <>
            <Service title="Phone Cases" gallery={gallery} order={'order today.'} />

            <ContactDialog />
        </>
    );
}