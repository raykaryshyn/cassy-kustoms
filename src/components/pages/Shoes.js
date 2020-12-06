import React from 'react';


import Service from './Service';



export default function Shoes() {
    const gallery = Array.from({ length: 7 }, (_, i) => i + 1).reverse().map(x => (
        {
            thumb: `/gallery/shoes${x}-thumbnail.jpg`,
            main: `/gallery/shoes${x}.jpg`,
        }
    ));

    return (
        <>
            <Service title="Shoes" gallery={gallery} perPrice='$20 - $40' youProvide="You provide shoes" howToOrder='Let me know what you want painted and we will work together to create the perfect design Kustomized just for you!' />
        </>
    );
}