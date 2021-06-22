import React from 'react';


import Service from './Service';



export default function Shoes() {
    const gallery = Array.from({ length: 10 }, (_, i) => i + 1).reverse().map(x => (
        {
            thumb: `/gallery/shoes${x}-thumbnail.jpg`,
            main: `/gallery/shoes${x}.jpg`,
        }
    ));

    return (
        <>
            <Service title="Shoes" gallery={gallery} perPrice='Custom art ranges from $50 to $150 (not including the price of shoes)' howToOrder='Let me know what you want painted and we will work together to create the perfect design Kustomized just for you! Please include what shoe/size you would like and I will order them after receiving your payment. If you want to provide the shoes, they must be brand-new/never worn and sent to me via USPS.' shippingPrice="Shipping starting at $8" international />
        </>
    );
}