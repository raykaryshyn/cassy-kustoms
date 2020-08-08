import React from 'react';

import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import cyan from '@material-ui/core/colors/cyan';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';
import orange from '@material-ui/core/colors/orange';
import brown from '@material-ui/core/colors/brown';
import grey from '@material-ui/core/colors/grey';

export const settings = {
    colors: {
        rainbow: 'rgba(0,0,0,0)',
        red: red[500],
        pink: pink[500],
        orange: orange[500],
        yellow: yellow[500],
        green: green[500],
        teal: teal[500],
        cyan: cyan[500],
        blue: blue[500],
        indigo: indigo[500],
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