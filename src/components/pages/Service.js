import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import PaintLine from '../paintStroke.png';
import Link from '@material-ui/core/Link';
import { ReactComponent as PaintIcon } from '../CassyKustom_icon_painting.svg';
import { ReactComponent as SewIcon } from '../CassyKustom_icon_sewing.svg';

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
            marginTop: 20,
        },
        headerTopPaintLine: {
            marginTop: 25,
        },
        headerBottomPaintLine: {
            marginBottom: 75,
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
        subNavBig: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        subNavSectionBig: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            borderBottom: '1px solid #489c98',
            '&:last-of-type': {
                borderBottom: 'none',
            },
            padding: '0 20px',
        },
        subNavTitleBig: {
            color: '#004950',
            fontSize: 22,
            marginRight: 10,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        subNavButtonBig: {
            fontSize: 18,
            fontFamily: theme.typography.fonts.header,
            lineHeight: 1.235,
            background: '#489c98',
            color: '#fff',
            borderRadius: theme.shape.borderRadius,
            padding: '5px 12px',
            margin: '10px 5px',
            transition: theme.transitions.create('background', { duration: 250 }),
            '&:hover': {
                textDecoration: 'none',
                background: '#005861',
            },
            cursor: 'pointer',
            '&.active': {
                background: '#005861',
            },
        },
        subNavIconBig: {
            width: 25,
            marginRight: 8,
            fill: '#004950',
        },
    }));
    const classes = useStyles();

    return (
        <>
            {/* <div className={[classes.paintLineWrapper, classes.headerTopPaintLine].join(' ')}><img src={PaintLine} className={classes.paintLine} alt="Paint Line" /></div> */}
            <div className={classes.header}>
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h1" className={classes.mainTitle}>Services</Typography>
                    <div className={classes.subNavBig}>
                        <div className={classes.subNavSectionBig}>
                            <Typography variant="h4" component="h2" className={classes.subNavTitleBig}><PaintIcon className={classes.subNavIconBig} /> Painting:</Typography>
                            <Link className={classes.subNavButtonBig}>Phone Cases</Link>
                            <Link className={classes.subNavButtonBig}>AirPods Cases</Link>
                            <Link className={classes.subNavButtonBig}>Hydro Flasks</Link>
                            <Link className={classes.subNavButtonBig}>Shoes</Link>
                        </div>
                        <div className={classes.subNavSectionBig}>
                            <Typography variant="h4" component="h2" className={classes.subNavTitleBig}><SewIcon className={classes.subNavIconBig} />Sewing:</Typography>
                            <Link className={[classes.subNavButtonBig, 'active'].join(' ')}>Face Masks</Link>
                            <Link className={classes.subNavButtonBig}>Schrunchies</Link>
                            <Link className={classes.subNavButtonBig}>Bucket Hats</Link>
                            <Link className={classes.subNavButtonBig}>Clothes</Link>
                        </div>
                    </div>
                </Container>
            </div>
            <div className={[classes.paintLineWrapper, classes.bottomPaintLine, classes.headerBottomPaintLine].join(' ')}><img src={PaintLine} className={classes.paintLine} alt="Paint Line" /></div>
            <Typography variant="h3" component="h1" className={classes.pageTitle}>{props.title}</Typography>
            {props.children}
        </>
    )
}