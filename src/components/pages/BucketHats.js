import React from 'react';


import Service from './Service';



export default function BucketHats() {
    const gallery = [
        {
            thumb: '/gallery/bucket-hat6-thumbnail.jpg',
            main: '/gallery/bucket-hat6.jpg',
        },
        {
            thumb: '/gallery/bucket-hat5-thumbnail.jpg',
            main: '/gallery/bucket-hat5.jpg',
        },
        {
            thumb: '/gallery/bucket-hat4-thumbnail.jpg',
            main: '/gallery/bucket-hat4.jpg',
        },
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
            <Service title="Bucket Hats" gallery={gallery} howToOrder="Let me know what kind of hat you want based on the hats in my gallery. You can even tell me what colors you want included in your hat!" perPriceCustom={<><li className="uli">Plain: $15</li><li className="uli">Patchwork: $20</li></>} />
        </>
    );
}