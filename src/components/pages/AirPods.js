import React from 'react';


import Service from './Service';



export default function AirPods() {
    const gallery = [
        {
            thumb: '/gallery/airpods-case9-thumbnail.jpg',
            main: '/gallery/airpods-case9.jpg',
        },
        {
            thumb: '/gallery/airpods-case8-thumbnail.jpg',
            main: '/gallery/airpods-case8.jpg',
        },
        {
            thumb: '/gallery/airpods-case7-thumbnail.jpg',
            main: '/gallery/airpods-case7.jpg',
        },
        {
            thumb: '/gallery/airpods-case6-thumbnail.jpg',
            main: '/gallery/airpods-case6.jpg',
        },
        {
            thumb: '/gallery/airpods-case5-thumbnail.jpg',
            main: '/gallery/airpods-case5.jpg',
        },
        {
            thumb: '/gallery/airpods-case4-thumbnail.jpg',
            main: '/gallery/airpods-case4.jpg',
        },
        {
            thumb: '/gallery/airpods-case3-thumbnail.jpg',
            main: '/gallery/airpods-case3.jpg',
        },
        {
            thumb: '/gallery/airpods-case2-thumbnail.jpg',
            main: '/gallery/airpods-case2.jpg',
        },
        {
            thumb: '/gallery/airpods-case1-thumbnail.jpg',
            main: '/gallery/airpods-case1.jpg',
        },
    ];

    return (
        <>
            <Service title="AirPods Cases" gallery={gallery} perPrice='Custom art ranges from $15 - $50 (not including airpods case)' howToOrder='Let me know what you want painted and we will work together to create the perfect design Kustomized just for you! I only work on cases that you provide so it must be sent to me via USPS (or dropped off at my home if local).' shippingPrice="Shipping $5" youProvide='You provide Airpods case' international />
        </>
    );
}