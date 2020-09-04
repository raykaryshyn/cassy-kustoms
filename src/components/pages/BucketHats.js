import React from 'react';


import Service from './Service';



export default function BucketHats() {
    const gallery = [
        {
            thumb: '',
            main: '',
        },
    ];

    return (
        <>
            <Service title="Bucket Hats" gallery={gallery} />
        </>
    );
}