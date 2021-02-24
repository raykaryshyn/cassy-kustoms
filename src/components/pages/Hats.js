import React from 'react';


import Service from './Service';



export default function Hats() {
    const gallery = Array.from({ length: 13 }, (_, i) => i + 1).reverse().map(x => (
        {
            thumb: `/gallery/hat${x}-thumbnail.jpg`,
            main: `/gallery/hat${x}.jpg`,
        }
    ));

    return (
        <>
            <Service title="Hats" gallery={gallery} howToOrder="Let me know what kind of hat you want based on the hats in my gallery. You can even tell me what colors you want included in your hat!" perPriceCustom={<><li className="uli">Solid bucket hat: $20</li><li className="uli">Patchwork bucket hat: $30</li><li className="uli">Other: Price will vary</li></>} />
        </>
    );
}