import React from 'react';


import Service from './Service';



export default function Other() {
    const gallery = Array.from({ length: 5 }, (_, i) => i + 1).reverse().map(x => (
        {
            thumb: `/gallery/other${x}-thumbnail.jpg`,
            main: `/gallery/other${x}.jpg`,
        }
    ));

    return (
        <>
            <Service title="Other" gallery={gallery} perPrice='Price will vary' youProvide="You provide the item" howToOrder='Let me know what you want painted and we will work together to create the perfect design Kustomized just for you!' />
        </>
    );
}