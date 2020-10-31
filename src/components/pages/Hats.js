import React from 'react';


import Service from './Service';



export default function Hats() {
    const gallery = Array.from({ length: 7 }, (_, i) => i + 1).reverse().map(x => (
        {
            thumb: `/gallery/hat${x}-thumbnail.jpg`,
            main: `/gallery/hat${x}.jpg`,
        }
    ));

    return (
        <>
            <Service title="Hats" gallery={gallery} howToOrder="Let me know what kind of hat you want based on the hats in my gallery. You can even tell me what colors you want included in your hat!" perPriceCustom={<><li className="uli">Plain: $15</li><li className="uli">Patchwork: $20</li></>} />
        </>
    );
}