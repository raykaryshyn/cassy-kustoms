import React from 'react';


import Service from './Service';



export default function Hats() {
    const gallery = Array.from({ length: 17 }, (_, i) => i + 1).reverse().map(x => (
        {
            thumb: `/gallery/hat${x}-thumbnail.jpg`,
            main: `/gallery/hat${x}.jpg`,
        }
    ));

    return (
        <>
            <Service title="Hats" gallery={gallery} howToOrder='Let me know what kind of hat you would like! I love turning all my sewing scraps into unique and colorful patchwork bucket hats. All bucket hats are reversible and you can pick whatever color/fabric you want! I also make bandana patch, denim, other fun bucket hats, and "Sun-Bun" hats, which are adjustable and can roll up.' perPriceCustom={<><li className="uli">Solid bucket hat $25</li><li className="uli">Bandana patch bucket hat $35</li><li className="uli">Patchwork bucket hat $40</li><li className="uli">Sun-Bun hat $30</li></>} international />
        </>
    );
}