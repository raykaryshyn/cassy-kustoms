import React from 'react';


import Service from './Service';



export default function Scrunchies() {
    const gallery = Array.from({ length: 32 }, (_, i) => i + 1).map(x => (
        {
            thumb: `/gallery/scrunchie${x}-thumbnail.jpg`,
            main: `/gallery/scrunchie${x}.jpg`,
        }
    ));

    return (
        <>
            <Service title="Scrunchies" gallery={gallery} />
        </>
    );
}