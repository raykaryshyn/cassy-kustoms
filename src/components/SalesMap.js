import React from 'react';
import { VectorMap } from "react-jvectormap";

export default function SalesMap() {
    return (
        <div style={{ width: '100%', height: 600 }}>
            <VectorMap map={'us_aea'}
                backgroundColor="#39464a"
                containerStyle={{
                    width: '100%',
                    height: '100%'
                }}
                containerClassName="map"
            />
        </div>
    );
}