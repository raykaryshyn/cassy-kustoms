import React from 'react';

import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';
import orange from '@material-ui/core/colors/orange';
import brown from '@material-ui/core/colors/brown';
import grey from '@material-ui/core/colors/grey';

export const settings = {
    colors: {
        rainbow: 'rgba(0,0,0,0)',
        red: '#f00',
        pink: '#ff69b4',
        orange: orange[500],
        yellow: yellow[500],
        green: green[500],
        blue: blue[600],
        purple: purple[500],
        brown: brown[500],
        grey: grey[500],
        black: '#000',
        white: '#fff',
    },
    selectedColors: [],
    selectColor: () => { },
    unselectColor: () => { },
    gridView: true,
    toggleGridView: () => { },
};

export const FabricsContext = React.createContext({
    settings: settings,
});