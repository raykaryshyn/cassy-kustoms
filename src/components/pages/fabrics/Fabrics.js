import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListIcon from '@material-ui/icons/List';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

import canStore from '../../../functions/canStore';
import Page from '../Page';
import FabricCard from './FabricCard';




export default function FullWidthGrid() {
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
            marginTop: '4px',
            justifyContent: gridView ? 'center' : 'flex-start',
        },
        toggleViewWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        toggleButton: {
            fontSize: 34,
            cursor: 'pointer',
            margin: '0 5px',
            color: 'rgba(0,0,0,0.33)',
            '&:hover': {
                color: 'rgba(0,0,0,0.5)',
            },
            transition: theme.transitions.create('color'),
        },
        activeToggleButton: {
            color: 'rgba(0,0,0,1)',
            '&:hover': {
                color: 'rgba(0,0,0,1)',
            },
        },
    }));
    const classes = useStyles();

    return (
        <Page title="Fabrics">
            <div className={classes.toggleViewWrapper}>
                <ViewModuleIcon
                    className={[
                        classes.toggleButton,
                        gridView ? classes.activeToggleButton : '',
                    ].join(' ')}
                    onClick={() => setGridView(true)}
                />
                <ListIcon
                    className={[
                        classes.toggleButton,
                        !gridView ? classes.activeToggleButton : '',
                    ].join(' ')}
                    onClick={() => setGridView(false)}
                />
            </div>

            {gridView ?
                <Grid container spacing={4} className={classes.grid}>
                    <Grid item xs={12} sm={6} md={4}>
                        <FabricCard gridView={gridView} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <FabricCard gridView={gridView} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <FabricCard gridView={gridView} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <FabricCard gridView={gridView} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <FabricCard gridView={gridView} />
                    </Grid>
                </Grid> :
                <Grid container spacing={4} className={classes.grid}>
                    <Grid item xs={12} md={6}>
                        <FabricCard gridView={gridView} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FabricCard gridView={gridView} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FabricCard gridView={gridView} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FabricCard gridView={gridView} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FabricCard gridView={gridView} />
                    </Grid>
                </Grid>
            }
        </Page>
    );
}
