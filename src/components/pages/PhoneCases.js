import React from 'react';


import Service from './Service';



export default function PhoneCases() {
    const gallery = [
        {
            thumb: '/gallery/phone-case9-thumbnail.jpg',
            main: '/gallery/phone-case9.jpg',
        },
        {
            thumb: '/gallery/phone-case8-thumbnail.jpg',
            main: '/gallery/phone-case8.jpg',
        },
        {
            thumb: '/gallery/phone-case7-thumbnail.jpg',
            main: '/gallery/phone-case7.jpg',
        },
        {
            thumb: '/gallery/phone-case6-thumbnail.jpg',
            main: '/gallery/phone-case6.jpg',
        },
        {
            thumb: '/gallery/phone-case5-thumbnail.jpg',
            main: '/gallery/phone-case5.jpg',
        },
        {
            thumb: '/gallery/phone-case4-thumbnail.jpg',
            main: '/gallery/phone-case4.jpg',
        },
        {
            thumb: '/gallery/phone-case3-thumbnail.jpg',
            main: '/gallery/phone-case3.jpg',
        },
        {
            thumb: '/gallery/phone-case2-thumbnail.jpg',
            main: '/gallery/phone-case2.jpg',
        },
        {
            thumb: '/gallery/phone-case1-thumbnail.jpg',
            main: '/gallery/phone-case1.jpg',
        },
    ];

    return (
        <>
            <Service title="Phone Cases" gallery={gallery} perPrice='Custom art ranges from $20 to $50 (not including the price of the case)' howToOrder='Let me know what you want painted and we will work together to create the perfect design Kustomized just for you! Please include what phone case/size you would like and I will order it and add the price to your total. If you want to provide the case, it must be new and sent to me via USPS.' international />
        </>
    );
}