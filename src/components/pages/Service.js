import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import PaintLine from '../paintStroke.png';
import { NavLink } from 'react-router-dom';
import { ReactComponent as PaintIcon } from '../CassyKustom_icon_painting.svg';
import { ReactComponent as SewIcon } from '../CassyKustom_icon_sewing.svg';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


export default function Service(props) {
    const [dropd, setDropdState] = React.useState({ paint: false, sew: false });
    const toggleDropd = (cat) => {
        setDropdState({ ...dropd, [cat]: !dropd[cat] });
        console.log({ ...dropd, [cat]: !dropd[cat] });
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
            [theme.breakpoints.down(720)]: {
                display: 'none',
            },
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
            textDecoration: 'none',
            '&:hover': {
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
        subNavSmall: {
            [theme.breakpoints.up(720)]: {
                display: 'none',
            },
            display: 'flex',
            flexDirection: 'row',
            [theme.breakpoints.down(400)]: {
                flexDirection: 'column',
                alignItems: 'center',
            },
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        subNavSectionSmall: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: 30,
            [theme.breakpoints.down(400)]: {
                marginRight: 0,
                marginBottom: 20,
                '&:last-of-type': {
                    marginBottom: 0,
                },
                width: '100%',
            },
            '&:last-of-type': {
                marginRight: 0,
            },
        },
        subNavTitleSmall: {
            color: '#fff',
            fontSize: 21,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#489c98',
            borderRadius: theme.shape.borderRadius,
            padding: '6px 12px',
            width: '100%',
            '&.active': {
                borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
                background: '#005861',
            },
            cursor: 'pointer',
        },
        subNavIconSmall: {
            width: 20,
            marginRight: 10,
            fill: '#b6d7d6',
        },
        subNavArrowSmall: {
            marginRight: -7,
            marginLeft: 8,
            color: '#b6d7d6',
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
            background: '#489c98',
            borderRadius: `0 0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px`,
            padding: '7px 0',
        },
        subNavButtonSmall: {
            padding: '5px 12px',
            fontSize: 18,
            fontFamily: theme.typography.fonts.header,
            lineHeight: 1.235,
            textDecoration: 'none',
            color: '#fff',
            '&.active': {
                color: '#005861',
            },
        },
        smallButtonDropd: {
            border: 'none',
            background: 'none',
            padding: 0,
            outline: 'none',
            width: '100%',
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
                                <NavLink to="/phone-cases" className={classes.subNavButtonSmall} activeClassName='active' onClick={() => toggleDropd('paint')}>Phone Cases</NavLink>
                                <NavLink to="/airpods-cases" className={classes.subNavButtonSmall} activeClassName='active' onClick={() => toggleDropd('paint')}>AirPods Cases</NavLink>
                                <NavLink to="/hydro-flasks" className={classes.subNavButtonSmall} activeClassName='active' onClick={() => toggleDropd('paint')}>Hydro Flasks</NavLink>
                                <NavLink to="/shoes" className={classes.subNavButtonSmall} activeClassName='active' onClick={() => toggleDropd('paint')}>Shoes</NavLink>
                            </div>
                        </div>
                        <div className={classes.subNavSectionSmall}>
                            <button onClick={() => toggleDropd('sew')} className={classes.smallButtonDropd}><Typography variant="h4" component="h2" className={[classes.subNavTitleSmall, dropd['sew'] ? 'active' : ''].join(' ')}><SewIcon className={classes.subNavIconSmall} /> Sewing <ArrowDropDownIcon className={[classes.subNavArrowSmall, dropd['sew'] ? 'active' : ''].join(' ')} /></Typography></button>
                            <div className={[classes.subNavListSmall, dropd['sew'] ? 'active' : ''].join(' ')}>
                                <NavLink to="/masks" className={classes.subNavButtonSmall} activeClassName='active' onClick={() => toggleDropd('sew')}>Face Masks</NavLink>
                                <NavLink to="/scrunchies" className={classes.subNavButtonSmall} activeClassName='active' onClick={() => toggleDropd('sew')}>Schrunchies</NavLink>
                                <NavLink to="/bucket-hats" className={classes.subNavButtonSmall} activeClassName='active' onClick={() => toggleDropd('sew')}>Bucket Hats</NavLink>
                                <NavLink to="/clothes" className={classes.subNavButtonSmall} activeClassName='active' onClick={() => toggleDropd('sew')}>Clothes</NavLink>
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