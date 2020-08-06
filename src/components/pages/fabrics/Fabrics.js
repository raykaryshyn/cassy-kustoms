import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Page from '../Page';
import FabricCard from './FabricCard';




const useStyles = makeStyles((theme) => ({
    grid: {
        marginTop: '0.25rem',
        justifyContent: 'center',
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <Page title="Fabrics">
            <Grid container spacing={4} className={classes.grid}>
                <Grid item xs={12} sm={6} md={4}>
                    <FabricCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <FabricCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <FabricCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <FabricCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <FabricCard />
                </Grid>
            </Grid>
        </Page>
    );
}
