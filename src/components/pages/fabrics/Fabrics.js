import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListIcon from '@material-ui/icons/List';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import Fab from '@material-ui/core/Fab';
import ModeCommentIcon from '@material-ui/icons/ModeComment';

import canStore from '../../../functions/canStore';
import Page from '../Page';
import FabricCard from './FabricCard';
import Dialog from './FabricDialog';




export default function Fabrics() {
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
            justifyContent: gridView ? 'center' : 'flex-start',
        },
        toggleViewWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        toggleButton: {
            fontSize: '34px',
            cursor: 'pointer',
            margin: '0 5px',
            color: 'rgba(0,0,0,0.25)',
            '&:hover': {
                color: 'rgba(0,0,0,0.45)',
            },
            transition: theme.transitions.create('color'),
        },
        activeToggleButton: {
            color: theme.palette.info.dark,
            '&:hover': {
                color: theme.palette.info.dark,
            },
        },
        fab: {
            position: 'fixed',
            right: 40,
            bottom: 40,
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
                        <Dialog><FabricCard gridView={gridView} /></Dialog>
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
                <Grid container spacing={3} className={classes.grid}>
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
            <Fab className={classes.fab}>
                <ModeCommentIcon />
            </Fab>
        </Page>
    );
}
