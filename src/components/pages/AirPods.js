import React from 'react';


import Service from './Service';



export default function AirPods() {
    const gallery = [
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
            <Service title="AirPods Cases" gallery={gallery} perPrice='$15 - $25' howToOrder='' youProvide='You provide the Airpods case' />
        </>
    );
}