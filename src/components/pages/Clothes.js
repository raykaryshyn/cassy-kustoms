import React from 'react';


import Service from './Service';



export default function Clothes() {
    const gallery = Array.from({ length: 19 }, (_, i) => i + 1).reverse().map(x => (
        {
            thumb: `/gallery/clothes${x}-thumbnail.jpg`,
            main: `/gallery/clothes${x}.jpg`,
        }
    ));

    return (
        <>
            <Service title="Clothes" gallery={gallery} perPrice='Price will vary' howToOrder="Let me know what kind of clothes you want me to sew and we will work together to create the perfect design Kustomized just for you!" />
        </>
    );
}