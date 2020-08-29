import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import PaintLine from '../paintStroke.png';

export default function Service(props) {
    const useStyles = makeStyles((theme) => ({
        paintLine: {
            display: 'block',
            width: '100%',
            height: 20,
            [theme.breakpoints.down(1560)]: {
                width: 'auto',
            },
        },
        paintLineWrapper: {
            overflow: 'hidden',
        },
        bottomPaintLine: {
            transform: 'scale(-1, -1)',
        },
        header: {
            background: '#c8e1e0',
            padding: '20px 0',
            color: '#004950',
        },
        mainTitle: {
            textAlign: 'center',
            fontSize: 35,
            [theme.breakpoints.down(550)]: {
                fontSize: 30,
            },
            letterSpacing: '0.3rem',
            wordSpacing: '0.3rem',
            marginBottom: '0.66rem',
        },
        headerTopPaintLine: {
            marginTop: 25,
        },
        headerBottomPaintLine: {
            marginBottom: 100,
        },
        pageTitle: {
            textAlign: 'center',
            fontSize: 35,
            [theme.breakpoints.down(550)]: {
                fontSize: 30,
            },
            letterSpacing: '0.3rem',
            wordSpacing: '0.3rem',
            marginBottom: '0.66rem',
        },
    }));
    const classes = useStyles();

    return (
        <>
            {/* <div className={[classes.paintLineWrapper, classes.headerTopPaintLine].join(' ')}><img src={PaintLine} className={classes.paintLine} alt="Paint Line" /></div> */}
            <div className={classes.header}>
                <Typography variant="h3" component="h1" className={classes.mainTitle}>Services</Typography>
                <Typography className={classes.info}>
                    buttons...
                </Typography>
            </div>
            <div className={[classes.paintLineWrapper, classes.bottomPaintLine, classes.headerBottomPaintLine].join(' ')}><img src={PaintLine} className={classes.paintLine} alt="Paint Line" /></div>
            <Typography variant="h3" component="h1" className={classes.pageTitle}>{props.title}</Typography>
            {props.children}
        </>
    )
}