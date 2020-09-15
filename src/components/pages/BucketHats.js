import React from 'react';


import Service from './Service';



export default function BucketHats() {
    const gallery = [
        {
            thumb: '/gallery/bucket-hat3-thumbnail.jpg',
            main: '/gallery/bucket-hat3.jpg',
        },
        {
            thumb: '/gallery/bucket-hat2-thumbnail.jpg',
            main: '/gallery/bucket-hat2.jpg',
        },
        {
            thumb: '/gallery/bucket-hat1-thumbnail.jpg',
            main: '/gallery/bucket-hat1.jpg',
        },
    ];

    return (
        <>
            <Service title="Bucket Hats" gallery={gallery} perPrice='TBD' />
        </>
    );
}