import React from 'react';


import Service from './Service';
import Gallery from './Gallery';
import { Grid, makeStyles } from '@material-ui/core';



export default function Scrunchies() {
    const metadata = [
        {
            name: 'Black',
            material: 'Velour',
        },
        {
            name: 'Orange',
            material: 'Felt',
        },
        {
            name: 'White',
            material: 'Silk',
        },
        {
            name: 'Light Blue',
            material: 'Felt',
        },
        {
            name: 'Grey',
            material: 'Velour',
        },
        {
            name: 'Mauve',
            material: 'Velour',
        },
        {
            name: 'Off-White',
            material: 'Cotton',
        },
        {
            name: 'Blue',
            material: 'Silk',
        },
        {
            name: 'Black & White',
            material: '',
        },
        {
            name: 'Mauve Design',
            material: '',
        },
        {
            name: 'Pale Yellow',
            material: 'Cotton',
        },
        {
            name: 'Teal Floral',
            material: 'Cotton',
        },
        {
            name: 'Dark Blue',
            material: 'Satin',
        },
        {
            name: 'Pink & Brown',
            material: 'Felt',
        },
        {
            name: 'Light Blue',
            material: 'Satin',
        },
        {
            name: 'Blue Gingham',
            material: 'Cotton',
        },
        {
            name: 'Olive Green',
            material: 'Silk',
        },
        {
            name: 'Multicolor Stripes',
            material: 'Cotton',
        },
        {
            name: 'Blue & White',
            material: '',
        },
        {
            name: 'Blue Floral',
            material: '',
        },
        {
            name: 'Starry Night',
            material: '',
        },
        {
            name: 'Neutral Stripes',
            material: '',
        },
        {
            name: 'Flower Diamonds',
            material: '',
        },
        {
            name: 'Jungle Pink',
            material: 'Cotton',
        },
        {
            name: 'Owl Brown',
            material: '',
        },
        {
            name: 'Pink Floral',
            material: '',
        },
        {
            name: 'Lizards',
            material: 'Cotton',
        },
        {
            name: 'Fuzzy Green',
            material: '',
        },
        {
            name: 'Mauve Floral',
            material: '',
        },
        {
            name: 'Pink & Grey',
            material: '',
        },
        {
            name: 'Rose Pattern',
            material: '',
        },
        {
            name: 'Tinker Bell Green',
            material: 'Cotton',
        },
    ];
    const gallery = Array.from({ length: 32 }, (_, i) => i + 1).reverse().map(x => (
        {
            thumb: `/gallery/scrunchie${x}-thumbnail.jpg`,
            main: `/gallery/scrunchie${x}.jpg`,
        }
    ));


    const useStyles = makeStyles((theme) => ({
        orderContainer: {
            marginTop: 50,
            marginBottom: 175,
        },
    }));
    const classes = useStyles();


    return (
        <>
            <Service title="Scrunchies" gallery={gallery} order={
                <Grid container spacing={2} className={classes.orderContainer}>
                    <Gallery urls={gallery} scrunchies metadata={metadata} />
                </Grid>
            } />
        </>
    );
}