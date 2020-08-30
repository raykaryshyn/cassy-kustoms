import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import PaintLine from '../paintStroke.png';
import { NavLink } from 'react-router-dom';
import { ReactComponent as PaintIcon } from '../CassyKustom_icon_painting.svg';
import { ReactComponent as SewIcon } from '../CassyKustom_icon_sewing.svg';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import Nav from '../Nav/Nav';


export default function Service(props) {
    const [dropd, setDropdState] = React.useState({ paint: false, sew: false });
    const toggleDropd = (cat) => {
        if (cat) {
            setDropdState({ ...dropd, [cat]: !dropd[cat] });
        } else {
            setDropdState({ paint: false, sew: false });
        }
    };

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
            background: theme.palette.primary.light3,
            padding: '20px 0 10px',
            color: theme.palette.primary.dark1,
            [theme.breakpoints.down(720)]: {
                padding: '12px 0 28px',
            },
        },
        mainTitle: {
            textAlign: 'center',
            fontSize: 35,
            [theme.breakpoints.down(550)]: {
                fontSize: 30,
            },
            letterSpacing: 3,
            marginBottom: '0.66rem',
            marginTop: 20,
        },
        headerTopPaintLine: {
            marginTop: 25,
        },
        headerBottomPaintLine: {
            marginBottom: 55,
        },
        pageTitle: {
            textAlign: 'center',
            fontSize: 40,
            [theme.breakpoints.down(550)]: {
                fontSize: 35,
            },
            letterSpacing: 1,
            marginBottom: '0.66rem',
            color: theme.palette.primary.dark1,
        },
        subNavBig: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            [theme.breakpoints.down(720)]: {
                display: 'none',
            },
        },
        subNavSectionBig: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            borderBottom: '1px solid ' + theme.palette.primary.light1,
            '&:last-of-type': {
                borderBottom: 'none',
            },
            padding: '0 24px',
        },
        subNavTitleBig: {
            color: theme.palette.primary.dark1,
            fontSize: 21,
            marginRight: 12,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        subNavButtonBig: {
            fontSize: 17,
            fontFamily: theme.typography.fonts.header,
            lineHeight: 1.235,
            background: theme.palette.primary.light1,
            color: '#fff',
            borderRadius: theme.shape.borderRadius,
            padding: '5px 12px',
            margin: '10px 5px',
            transition: theme.transitions.create('background', { duration: 250 }),
            textDecoration: 'none',
            '&:hover': {
                background: theme.palette.primary.dark1,
            },
            cursor: 'pointer',
            '&.active': {
                background: theme.palette.primary.dark2,
            },
        },
        subNavIconBig: {
            width: 23,
            marginRight: 8,
            fill: theme.palette.primary.dark1,
        },
        subNavSmall: {
            [theme.breakpoints.up(720)]: {
                display: 'none',
            },
            display: 'flex',
            flexDirection: 'row',
            [theme.breakpoints.down(370)]: {
                flexDirection: 'column',
                alignItems: 'center',
            },
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginTop: 20,
            marginBottom: -10,
        },
        subNavSectionSmall: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: 30,
            [theme.breakpoints.down(370)]: {
                marginRight: 0,
                marginBottom: 10,
                '&:last-of-type': {
                    marginBottom: 0,
                },
            },
            '&:last-of-type': {
                marginRight: 0,
            },
        },
        subNavTitleSmall: {
            color: '#fff',
            fontSize: 17,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            background: theme.palette.primary.light1,
            borderRadius: theme.shape.borderRadius,
            padding: '6px 12px',
            width: '100%',
            '&.active': {
                borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
                background: theme.palette.primary.dark2,
            },
            cursor: 'pointer',
            /* transition: theme.transitions.create('background', { duration: 250 }), */
        },
        subNavIconSmall: {
            width: 18,
            marginRight: 10,
            fill: theme.palette.primary.light3,
        },
        subNavArrowSmall: {
            marginRight: -7,
            marginLeft: 8,
            color: theme.palette.primary.light3,
            transition: theme.transitions.create('transform', { duration: 250 }),
            '&.active': {
                transform: 'scale(1, -1)',
            },
        },
        subNavListSmall: {
            display: 'none',
            '&.active': {
                display: 'flex',
            },
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            background: theme.palette.primary.light1,
            borderRadius: `0 0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px`,
            padding: '7px 0',
        },
        subNavButtonSmall: {
            padding: '5px 12px',
            fontSize: 17,
            fontFamily: theme.typography.fonts.header,
            lineHeight: 1.235,
            textDecoration: 'none',
            color: theme.palette.primary.dark2,
            '&.active': {
                color: '#fff',
                textShadow: `0 0 7px ${theme.palette.primary.dark1}`,
            },
        },
        smallButtonDropd: {
            border: 'none',
            background: 'none',
            padding: 0,
            outline: 'none',
            margin: 0,
        },
    }));
    const classes = useStyles();

    return (
        <>
            <Nav />
            {/* <div className={[classes.paintLineWrapper, classes.headerTopPaintLine].join(' ')}><img src={PaintLine} className={classes.paintLine} alt="Paint Line" /></div> */}
            <div className={classes.header}>
                <Container maxWidth="lg">
                    {/* <Typography variant="h3" component="h1" className={classes.mainTitle}>Services</Typography> */}
                    <div className={classes.subNavBig}>
                        <div className={classes.subNavSectionBig}>
                            <Typography variant="h4" component="h2" className={classes.subNavTitleBig}><PaintIcon className={classes.subNavIconBig} /> Painting:</Typography>
                            <NavLink to="/phone-cases" className={classes.subNavButtonBig}>Phone Cases</NavLink>
                            <NavLink to="/airpods-cases" className={classes.subNavButtonBig}>AirPods Cases</NavLink>
                            <NavLink to="/hydro-flasks" className={classes.subNavButtonBig}>Hydro Flasks</NavLink>
                            <NavLink to="/shoes" className={classes.subNavButtonBig}>Shoes</NavLink>
                        </div>
                        <div className={classes.subNavSectionBig}>
                            <Typography variant="h4" component="h2" className={classes.subNavTitleBig}><SewIcon className={classes.subNavIconBig} /> Sewing:</Typography>
                            <NavLink to="/masks" className={classes.subNavButtonBig} activeClassName='active'>Face Masks</NavLink>
                            <NavLink to="/scrunchies" className={classes.subNavButtonBig}>Schrunchies</NavLink>
                            <NavLink to="/bucket-hats" className={classes.subNavButtonBig}>Bucket Hats</NavLink>
                            <NavLink to="/clothes" className={classes.subNavButtonBig}>Clothes</NavLink>
                        </div>
                    </div>

                    <div className={classes.subNavSmall}>
                        <div className={classes.subNavSectionSmall}>
                            <button onClick={() => toggleDropd('paint')} className={classes.smallButtonDropd}><Typography variant="h4" component="h2" className={[classes.subNavTitleSmall, dropd['paint'] ? 'active' : ''].join(' ')}><PaintIcon className={classes.subNavIconSmall} /> Painting <ArrowDropDownIcon className={[classes.subNavArrowSmall, dropd['paint'] ? 'active' : ''].join(' ')} /></Typography></button>
                            <div className={[classes.subNavListSmall, dropd['paint'] ? 'active' : ''].join(' ')}>
                                <NavLink to="/phone-cases" className={classes.subNavButtonSmall} activeClassName='active' onClick={() => toggleDropd()}>Phone Cases</NavLink>
                                <NavLink to="/airpods-cases" className={classes.subNavButtonSmall} activeClassName='active' onClick={() => toggleDropd()}>AirPods Cases</NavLink>
                                <NavLink to="/hydro-flasks" className={classes.subNavButtonSmall} activeClassName='active' onClick={() => toggleDropd()}>Hydro Flasks</NavLink>
                                <NavLink to="/shoes" className={classes.subNavButtonSmall} activeClassName='active' onClick={() => toggleDropd()}>Shoes</NavLink>
                            </div>
                        </div>
                        <div className={classes.subNavSectionSmall}>
                            <button onClick={() => toggleDropd('sew')} className={classes.smallButtonDropd}><Typography variant="h4" component="h2" className={[classes.subNavTitleSmall, dropd['sew'] ? 'active' : ''].join(' ')}><SewIcon className={classes.subNavIconSmall} /> Sewing <ArrowDropDownIcon className={[classes.subNavArrowSmall, dropd['sew'] ? 'active' : ''].join(' ')} /></Typography></button>
                            <div className={[classes.subNavListSmall, dropd['sew'] ? 'active' : ''].join(' ')}>
                                <NavLink to="/masks" className={classes.subNavButtonSmall} activeClassName='active' onClick={() => toggleDropd()}>Face Masks</NavLink>
                                <NavLink to="/scrunchies" className={classes.subNavButtonSmall} activeClassName='active' onClick={() => toggleDropd()}>Schrunchies</NavLink>
                                <NavLink to="/bucket-hats" className={classes.subNavButtonSmall} activeClassName='active' onClick={() => toggleDropd()}>Bucket Hats</NavLink>
                                <NavLink to="/clothes" className={classes.subNavButtonSmall} activeClassName='active' onClick={() => toggleDropd()}>Clothes</NavLink>
                            </div>
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