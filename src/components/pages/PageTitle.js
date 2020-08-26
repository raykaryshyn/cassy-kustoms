import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';




export default function Page(props) {
    const useStyles = makeStyles(theme => ({
        root: {
            [theme.breakpoints.down('sm')]: {
                fontSize: '55px',
            },
            [theme.breakpoints.up('md')]: {
                fontSize: '58px',
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: '62px',
            },
            textAlign: 'center',
            lineHeight: 1,
            fontWeight: 400,
            display: 'inline-block',
            letterSpacing: -2,
            wordSpacing: 10,
            marginTop: 25,
            color: props.color ? props.color : theme.palette.text.primary,
        },
    }));
    const classes = useStyles();

    return (
        <Typography
            variant="h2"
            component="h1"
            className={classes.root}
        >
            {props.children}
        </Typography>
    );
}
