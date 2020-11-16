import React from 'react';


import Service from './Service';



export default function AirPods() {
    const gallery = [
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
            <Service title="AirPods Cases" gallery={gallery} perPrice='$15 - $25' howToOrder='Let me know what you want painted and we will work together to create the perfect design Kustomized just for you!' youProvide='You provide Airpods case' />
        </>
    );
}