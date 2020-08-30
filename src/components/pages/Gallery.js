import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



export default function Gallery(props) {
    const useStyles = makeStyles((theme) => ({
        galleryItemWrapper: {
            position: 'relative',
            paddingTop: '75%',
            borderRadius: theme.shape.borderRadius,
            overflow: 'hidden',
            /* transition: theme.transitions.create('transform', { duration: 400 }),
            '&:hover': {
                transform: 'scale(0.98)',
            }, */
            [theme.breakpoints.up('md')]: {
                transition: theme.transitions.create('transform'),
                '&:hover': {
                    transform: 'scale(0.98)',
                },
            },
            [theme.breakpoints.down('md')]: {
                transition: theme.transitions.create('transform', { duration: 66 }),
                '&:active': {
                    transform: 'scale(0.966)',
                },
            },
            cursor: 'pointer',
        },
        galleryItem: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundSize: 'cover',
            backgroundColor: '#ccc',
            borderRadius: theme.shape.borderRadius,
            overflow: 'hidden',
        },
    }));
    const classes = useStyles();

    return (
        <>
            {props.urls.map((url, i) => {
                return (
                    <Grid item xs={6} sm={4} md={3} key={i}>
                        <div className={classes.galleryItemWrapper}><div style={{ backgroundImage: `url(${url.thumb})` }} className={classes.galleryItem}></div></div>
                    </Grid>
                );
            })}
        </>
    );
}