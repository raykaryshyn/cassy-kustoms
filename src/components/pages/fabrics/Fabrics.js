import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import canStore from '../../../functions/canStore';
import Page from '../Page';
import FabricCard from './FabricCard';
import Dialog from './FabricDialog';
import fabricsList from './fabricsList';
import ContactDialog from '../ContactDialog';
import FabricsSettings from './FabricsSettings';

import { FabricsContext, settings } from './FabricsContext';




export default function Fabrics() {
    const [selectedColors, setSelectedColors] = React.useState([]);
    const selectColor = (color) => {
        setSelectedColors([...selectedColors, color]);
    };
    const unselectColor = (color) => {
        setSelectedColors(selectedColors.filter(e => e !== color));
    };



    const [gridView, setGridViewState] = React.useState(
        canStore() && localStorage.getItem('gridView') !== null ?
            localStorage.getItem('gridView') === 'true' :
            true
    );
    const setGridView = (state) => {
        setGridViewState(state);
        if (canStore()) localStorage.setItem('gridView', state);
    };

    const useStyles = makeStyles((theme) => ({
        grid: {
            marginTop: '8px',
            justifyContent: 'center',
        },
        fab: {
            position: 'fixed',
            right: 35,
            bottom: 35,
            [theme.breakpoints.down('xs')]: {
                right: 25,
                bottom: 25,
            },
            background: theme.palette.info.main,
            color: '#fff',
            '&:hover': {
                background: theme.palette.info.dark,
            },
        },
    }));
    const classes = useStyles();


    const fabrics = fabricsList;



    const context = {
        ...settings,
        selectedColors: selectedColors,
        selectColor: selectColor,
        unselectColor: unselectColor,
        gridView: gridView,
        setGridView: setGridView,
    };

    const shouldShow = (colors) => {
        if (selectedColors.length === 0) {
            return true;
        }

        for (let i = 0; i < colors.length; i++) {

            for (let j = 0; j < selectedColors.length; j++) {

                // Compare the element of each and 
                // every element from both of the 
                // arrays 
                if (colors[i] === selectedColors[j]) {

                    // Return if common element found 
                    return true;
                }
            }
        }

        return false;
    };

    return (
        <FabricsContext.Provider value={{ context }}>
            <Page title="Fabrics">
                <FabricsSettings />

                {gridView ?
                    <Grid container spacing={4} className={[classes.grid, 'animate__animated', 'animate__fadeIn'].join(' ')}>
                        {fabrics.map((fabric, i) => {
                            console.log(shouldShow(fabric.colors));
                            if (shouldShow(fabric.colors)) {
                                return (
                                    <Grid item xs={12} sm={6} md={4} key={i}>
                                        <Dialog fabric={fabric}><FabricCard gridView={gridView} fabric={fabric} /></Dialog>
                                    </Grid>
                                );
                            } else {
                                return (
                                    ''
                                );
                            }
                        })}
                    </Grid> :
                    <Grid container spacing={2} className={[classes.grid, 'animate__animated', 'animate__fadeIn'].join(' ')}>
                        {fabrics.map((fabric, i) => {
                            if (shouldShow(fabric.colors)) {
                                return (
                                    <Grid item xs={12} md={6} key={i}>
                                        <Dialog fabric={fabric}><FabricCard gridView={gridView} fabric={fabric} /></Dialog>
                                    </Grid>
                                );
                            } else {
                                return (
                                    ''
                                );
                            }
                        })}
                    </Grid>
                }
                <ContactDialog />
            </Page>
        </FabricsContext.Provider>
    );
}
