import React from 'react';


import Service from './Service';



export default function HydroFlasks() {
    const gallery = [
        {
            thumb: '/gallery/water-bottle9-thumbnail.jpg',
            main: '/gallery/water-bottle9.jpg',
        },
        {
            thumb: '/gallery/water-bottle8-thumbnail.jpg',
            main: '/gallery/water-bottle8.jpg',
        },
        {
            thumb: '/gallery/water-bottle7-thumbnail.jpg',
            main: '/gallery/water-bottle7.jpg',
        },
        {
            thumb: '/gallery/water-bottle6-thumbnail.jpg',
            main: '/gallery/water-bottle6.jpg',
        },
        {
            thumb: '/gallery/water-bottle5-thumbnail.jpg',
            main: '/gallery/water-bottle5.jpg',
        },
        {
            thumb: '/gallery/water-bottle4-thumbnail.jpg',
            main: '/gallery/water-bottle4.jpg',
        },
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
            <Service title="Water Bottles" gallery={gallery} perPrice='Custom art ranges from $20 to $60 (not including the price of the bottle)' shippingPrice="Shipping starting at $8" howToOrder='Let me know what you want painted and we will work together to create the perfect design Kustomized just for you! Please include what water bottle you would like and I can order it after receiving your payment. If you want to provide the bottle, it must be new and sent to me via USPS.' international />
        </>
    );
}