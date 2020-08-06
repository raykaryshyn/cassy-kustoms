import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Page from '../Page';




const useStyles = makeStyles((theme) => ({
    grid: {
        marginTop: '0.5rem',
        justifyContent: 'center',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <Page title="Fabrics">
            <Grid container spacing={3} className={classes.grid}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
            </Grid>
        </Page>
    );
}
