import React from 'react';


import Service from './Service';



export default function Hats() {
    const gallery = [
        {
            "thumb": "/gallery/hat31-thumbnail.jpg",
            "main": "/gallery/hat31.jpg"
        },
        {
            "thumb": "/gallery/hat30-thumbnail.jpg",
            "main": "/gallery/hat30.jpg"
        },
        {
            "thumb": "/gallery/hat29-thumbnail.jpg",
            "main": "/gallery/hat29.jpg"
        },
        {
            "thumb": "/gallery/hat28-thumbnail.jpg",
            "main": "/gallery/hat28.jpg"
        },
        {
            "thumb": "/gallery/hat27-thumbnail.jpg",
            "main": "/gallery/hat27.jpg"
        },
        {
            "thumb": "/gallery/hat26-thumbnail.jpg",
            "main": "/gallery/hat26.jpg"
        },
        {
            "thumb": "/gallery/hat25-thumbnail.jpg",
            "main": "/gallery/hat25.jpg"
        },
        {
            "thumb": "/gallery/hat24-thumbnail.jpg",
            "main": "/gallery/hat24.jpg"
        },
        {
            "thumb": "/gallery/hat23-thumbnail.jpg",
            "main": "/gallery/hat23.jpg"
        },
        {
            "thumb": "/gallery/hat22-thumbnail.jpg",
            "main": "/gallery/hat22.jpg"
        },
        {
            "thumb": "/gallery/hat21-thumbnail.jpg",
            "main": "/gallery/hat21.jpg"
        },
        {
            "thumb": "/gallery/hat20-thumbnail.jpg",
            "main": "/gallery/hat20.jpg"
        },
        {
            "thumb": "/gallery/hat19-thumbnail.jpg",
            "main": "/gallery/hat19.jpg"
        },
        {
            "thumb": "/gallery/hat18-thumbnail.jpg",
            "main": "/gallery/hat18.jpg"
        },
        {
            "thumb": "/gallery/hat32-thumbnail.jpg",
            "main": "/gallery/hat32.jpg"
        },
        {
            "thumb": "/gallery/hat17-thumbnail.jpg",
            "main": "/gallery/hat17.jpg"
        },
        {
            "thumb": "/gallery/hat16-thumbnail.jpg",
            "main": "/gallery/hat16.jpg"
        },
        {
            "thumb": "/gallery/hat15-thumbnail.jpg",
            "main": "/gallery/hat15.jpg"
        },
        {
            "thumb": "/gallery/hat14-thumbnail.jpg",
            "main": "/gallery/hat14.jpg"
        },
        {
            "thumb": "/gallery/hat13-thumbnail.jpg",
            "main": "/gallery/hat13.jpg"
        },
        {
            "thumb": "/gallery/hat12-thumbnail.jpg",
            "main": "/gallery/hat12.jpg"
        },
        {
            "thumb": "/gallery/hat11-thumbnail.jpg",
            "main": "/gallery/hat11.jpg"
        },
        {
            "thumb": "/gallery/hat10-thumbnail.jpg",
            "main": "/gallery/hat10.jpg"
        },
        {
            "thumb": "/gallery/hat9-thumbnail.jpg",
            "main": "/gallery/hat9.jpg"
        },
        {
            "thumb": "/gallery/hat8-thumbnail.jpg",
            "main": "/gallery/hat8.jpg"
        },
        {
            "thumb": "/gallery/hat7-thumbnail.jpg",
            "main": "/gallery/hat7.jpg"
        },
        {
            "thumb": "/gallery/hat6-thumbnail.jpg",
            "main": "/gallery/hat6.jpg"
        },
        {
            "thumb": "/gallery/hat5-thumbnail.jpg",
            "main": "/gallery/hat5.jpg"
        },
        {
            "thumb": "/gallery/hat4-thumbnail.jpg",
            "main": "/gallery/hat4.jpg"
        },
        {
            "thumb": "/gallery/hat3-thumbnail.jpg",
            "main": "/gallery/hat3.jpg"
        },
        {
            "thumb": "/gallery/hat2-thumbnail.jpg",
            "main": "/gallery/hat2.jpg"
        },
        {
            "thumb": "/gallery/hat1-thumbnail.jpg",
            "main": "/gallery/hat1.jpg"
        }
    ]

    return (
        <>
            <Service title="Hats" gallery={gallery} howToOrder='Let me know what kind of hat you would like! I love turning all my sewing scraps into unique and colorful patchwork bucket hats. All bucket hats are reversible and you can pick whatever color/fabric you want! I also make bandana patch, denim, other fun bucket hats, and "Sun-Bun" hats, which are adjustable and can roll up.' perPriceCustom={<><li className="uli">Solid bucket hat $25</li><li className="uli">Bandana patch bucket hat $35</li><li className="uli">Patchwork bucket hat $40</li><li className="uli">Sun-Bun hat $30</li></>} international />
        </>
    );
}