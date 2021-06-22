import React from 'react';


import Service from './Service';



export default function Other() {
    const gallery = Array.from({ length: 7 }, (_, i) => i + 1).reverse().map(x => (
        {
            thumb: `/gallery/other${x}-thumbnail.jpg`,
            main: `/gallery/other${x}.jpg`,
        }
    ));

    return (
        <>
            <Service title="Other" gallery={gallery} perPrice='Price will vary' perPriceCustom={<><li className="uli">Demin jacket custom art $30 - $80</li><li className="uli">Cap or visor custom art $15 - $40</li></>} shippingPrice="Shipping starting at $5"  youProvide="You provide the item" howToOrder='Let me know what you want painted and we will work together to create the perfect design Kustomized just for you! You must provide the object and send it to me via USPS. You will receive a request for payment via PayPal.' international />
        </>
    );
}