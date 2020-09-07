import React from 'react';


import Service from './Service';



export default function BucketHats() {
    const gallery = [
        {
            thumb: '/gallery/bucket-hat1-thumbnail.jpg',
            main: '/gallery/bucket-hat1.jpg',
        },
    ];

    return (
        <>
            <Service title="Bucket Hats" gallery={gallery} />
        </>
    );
}