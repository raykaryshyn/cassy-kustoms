import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';

export default function HowToOrder() {
    const useStyles = makeStyles((theme) => ({
        root: {
            background: '#fff',
            borderRadius: theme.shape.borderRadius,
            boxShadow: '0px 1px 12px rgba(0,0,0,0.1)',
            padding: '16px 16px 24px 20px',
            marginBottom: 15,
        },
        title: {
            fontFamily: theme.typography.fonts.header,
            textTransform: 'none',
        },
    }));
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h5" component="h2" className={classes.title}>How To Order</Typography>
        </div>
    );
}