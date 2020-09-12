import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';
import ContactDialog from '../ContactDialog';

import AddFabricButton from '../../addFabric_button.png';

export default function HowToOrder() {
    const useStyles = makeStyles((theme) => ({
        root: {
            background: '#fff',
            borderRadius: theme.shape.borderRadius,
            boxShadow: '0px 1px 12px rgba(0,0,0,0.1)',
            padding: '16px 20px 24px 20px',
            marginBottom: 15,
        },
        title: {
            fontFamily: theme.typography.fonts.header,
            textTransform: 'none',
        },
        steps: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 12,
            [theme.breakpoints.down(850)]: {
                flexDirection: 'column',
            },
        },
        step: {
            width: '100%',
            borderRight: '2px solid #c3c7c8',
            padding: '0 20px',
            '&:first-of-type': {
                padding: '0 20px 0 0',
            },
            '&:last-of-type': {
                borderRight: 'none',
                padding: '0 0 0 20px',
            },
            [theme.breakpoints.down(850)]: {
                flexDirection: 'column',
                borderRight: 'none',
                borderBottom: '2px solid #c3c7c8',
                padding: '20px 0',
                '&:first-of-type': {
                    padding: '0 0 20px 0',
                },
                '&:last-of-type': {
                    borderBottom: 'none',
                    padding: '20px 0 0 0',
                },
            },
        },



        header: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
        },
        number: {
            fontSize: 17,
            background: theme.palette.primary.main,
            color: '#fff',
            height: 24,
            width: 24,
            textAlign: 'center',
            marginRight: 9,
        },
        stepTitle: {
            textTransform: 'none',
            fontSize: 18,
            color: theme.palette.primary.main,
            fontFamily: theme.typography.fonts.body,
        },
        content: {
            marginTop: 8,
            paddingLeft: 33.5,
            [theme.breakpoints.down(850)]: {
                paddingLeft: 0,
            },
        },
        image: {
            width: '100%',
            '& img': {
                display: 'block',
                width: '100%',
                margin: '0 auto',
                transition: theme.transitions.create('transform', { duration: 400 }),
                [theme.breakpoints.down(850)]: {
                    transition: theme.transitions.create('transform', { duration: 66 }),
                },
            },
            '&.measure': {
                '& img:hover': {
                    transform: 'scale(0.95)',
                },
                [theme.breakpoints.down(850)]: {
                    '& img:hover': {
                        transform: 'scale(1)',
                    },
                },
                '& .howToMeasureWrapper': {
                    cursor: 'pointer',
                    margin: '0 auto',
                    width: 150,
                    '&:after': {
                        content: '"Click to enlarge"',
                        color: theme.palette.primary.main,
                        fontSize: 12.5,
                        transform: 'translate(-53px, -21.75px)',
                        display: 'block',
                        fontWeight: 500,
                    },
                    marginBottom: -10,
                    [theme.breakpoints.down(850)]: {
                        transform: 'translate(27px, 0)',
                    },
                },
            },
            '&.addFabric': {
                width: 125,
                margin: '30px auto 0',
            },
        },
        text: {
            fontSize: 14,
            '& .small': {
                display: 'inline-block',
                fontSize: 12.5,
                paddingTop: 15,
            },
        },
        contactLink: {
            color: theme.palette.primary.main,
            '& span': {
                textDecoration: 'underline',
            },
            display: 'inline-block',
            cursor: 'pointer',
        },
        noUnder: {
            color: '#000 !important',
            textDecoration: 'none !important'
        },
    }));
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h5" component="h2" className={classes.title}>How To Order</Typography>
            <div className={classes.steps}>
                <div className={classes.step}>
                    <div className={classes.header}>
                        <div className={classes.number}>1</div>
                        <Typography variant="h5" component="h3" className={classes.stepTitle}>Select a fabric</Typography>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.text}>
                            Use the plus button under your selected mask fabric.
                        </div>
                        <div className={[classes.image, 'addFabric'].join(' ')}>
                            <img src={AddFabricButton} alt="How to add fabric" />
                        </div>
                    </div>
                </div>
                <div className={classes.step}>
                    <div className={classes.header}>
                        <div className={classes.number}>2</div>
                        <Typography variant="h5" component="h3" className={classes.stepTitle}>Enter measurements</Typography>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.text}>
                            Use the illustration to determine nose-to-ear and nose-to-chin measurements.
                        </div>
                        <div onClick={() => document.getElementById('backdrop').style.display = 'block'} className={[classes.image, 'measure'].join(' ')}>
                            <div className='howToMeasureWrapper'>
                                <img src="/face_measuring_illustration.jpg" alt="How to measure" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.step}>
                    <div className={classes.header}>
                        <div className={classes.number}>3</div>
                        <Typography variant="h5" component="h3" className={classes.stepTitle}>Provide payment</Typography>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.text}>
                            Enter your name and email address to recieve a request for payment via PayPal.
                            <br />
                            <span className='small'>To arrange a different form of payment, please <ContactDialog className={classes.contactLink}><span>contact me</span><span className={classes.noUnder}>.</span></ContactDialog></span>
                            <br />
                            <span className='small'>Payment upon pickup or delivery available for locals.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}