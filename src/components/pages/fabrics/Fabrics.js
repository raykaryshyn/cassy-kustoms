import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import canStore from '../../../functions/canStore';
import Page from '../Page';
import FabricCard from './FabricCard';
import FabricDialog from './FabricDialog';
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
            marginTop: '40px',
            [theme.breakpoints.down(664)]: {
                marginTop: '13px',
            },
            justifyContent: 'center',
            marginBottom: '80px',
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
        gridListItem: {
            '&:last-of-type': {
                paddingBottom: 40,
            },
            [theme.breakpoints.down('xs')]: {
                '&:last-of-type': {
                    paddingBottom: 25,
                },                
            },
        }
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
                if (colors[i] === selectedColors[j]) {
                    return true;
                }
            }
        }
        return false;
    };

    const gridRef = React.useRef();

    return (
        <FabricsContext.Provider value={{ context }}>
            <Page title="Fabrics">
                <FabricsSettings />

                {gridView ?
                    <Grid container spacing={4} className={classes.grid} ref={gridRef}>
                        {fabrics.map((fabric, i) => {
                            if (shouldShow(fabric.colors)) {
                                return (
                                    <Grid item xs={12} sm={6} md={4} key={i}>
                                        <FabricDialog fabric={fabric} id={i+1}><FabricCard gridView={gridView} fabric={fabric} id={i+1} /></FabricDialog>
                                    </Grid>
                                )
                            } else {
                                return '';
                            }
                        })}
                    </Grid>
                    :
                    <Grid container spacing={2} className={classes.grid} ref={gridRef}>
                        {fabrics.map((fabric, i) => {
                            if (shouldShow(fabric.colors)) {
                                return (
                                    <Grid item xs={12} md={6} key={i} className={classes.gridListItem}>
                                        <FabricDialog fabric={fabric} id={i+1}><FabricCard gridView={gridView} fabric={fabric} id={i+1} /></FabricDialog>
                                    </Grid>
                                )
                            } else {
                                return '';
                            }
                        })}
                    </Grid>
                }

                <ContactDialog />
            </Page>
        </FabricsContext.Provider >
    );
}
