import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { makeStyles, Card, CardContent } from '@material-ui/core';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import PaintLine from '../paintStroke.png';
import { NavLink } from 'react-router-dom';
import { ReactComponent as PaintIcon } from '../CassyKustom_icon_painting.svg';
import { ReactComponent as SewIcon } from '../CassyKustom_icon_sewing.svg';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import InfoIcon from '@material-ui/icons/Info';

import Grid from '@material-ui/core/Grid';

import Nav from '../Nav/Nav';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

/* import GalleryModal from './GalleryModal'; */
import Gallery from './Gallery';
import ScrollToTop from './ScrollToTop';
import ContactForm from './ContactForm';
import ContactDialog from './ContactDialog';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>{children}</>
            )}
        </div>
    );
}


export default function Service(props) {
    const location = useLocation();
    const [dropd, setDropdState] = React.useState({ paint: false, sew: false });
    const toggleDropd = (cat) => {
        if (cat) {
            setDropdState({ ...dropd, [cat]: !dropd[cat] });
        } else {
            setDropdState({ paint: false, sew: false });
        }
    };

    const [tab, setTab] = React.useState(
        location.pathname.includes('/order') ?
            1 :
            0
    );
    const handleTab = (e, newTab) => {
        setTab(newTab);
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
            [theme.breakpoints.down(770)]: {
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
            marginBottom: 5,
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
            fontSize: 50,
            [theme.breakpoints.down(550)]: {
                fontSize: 42,
                marginTop: 0,
                marginBottom: 5,
            },
            letterSpacing: 1,
            marginBottom: 10,
            marginTop: 80,
            color: theme.palette.primary.dark1,
            textShadow: '1px 1px 0px #F1F3F4, 2px 2px 0px rgba(0,0,0,0.2)',
        },
        subNavBig: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            [theme.breakpoints.down(770)]: {
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
            [theme.breakpoints.up(770)]: {
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
            '&.on': {
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
            padding: '7px 12px',
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
        tabLabel: {
            fontFamily: theme.typography.fonts.header,
            fontSize: 20,
            /*  color: theme.palette.primary.light1, */
            '&.Mui-selected': {
                color: theme.palette.primary.dark2,
            },
            padding: '6px 8px',
            [theme.breakpoints.down(600)]: {
                padding: '6px 22px',
            },
            borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
            '& a': {
                textDecoration: 'none',
                color: 'inherit',
                width: '100%',
                height: '100%',
            },
            color: '#b0b5b7',
            borderBottom: '2.5px solid #b0b5b7',
            '&:first-of-type': {
                marginRight: 15,
            },
        },
        indicator: {
            height: 2.5,
        },
        galleryContainer: {
            justifyContent: 'center',
            marginTop: 25,
            marginBottom: 175,
            [theme.breakpoints.down('sm')]: {
                marginBottom: 110,
            },
        },
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
            backgroundPosition: 'center',
        },
        orderContainer: {
            marginTop: 25,
            marginBottom: 120,
            [theme.breakpoints.down('sm')]: {
                marginBottom: 110,
            },
        },




        myOrder: {
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'flex-start',
            [theme.breakpoints.down(900)]: {
                flexDirection: 'column',
                flexWrap: 'wrap',
                justifyContent: 'center',
            },
        },
        myOrderResults: {
            background: '#fff',
            borderRadius: theme.shape.borderRadius,
            boxShadow: '0px 1px 12px rgba(0,0,0,0.1)',
            flex: 1,
            marginRight: 15,
            padding: '16px 20px 24px 20px',
            [theme.breakpoints.down(900)]: {
                marginRight: 0,
                marginTop: 15,
                width: '100%'
            },
            minHeight: 133.25,
        },
        cardWrapper: {
            flex: '1 1 375px',
            maxWidth: 375,
            '& ul': {
                paddingInlineStart: '15px',
            },

            margin: '0 auto',

            background: '#fff',
            borderRadius: theme.shape.borderRadius,
            boxShadow: '0px 1px 12px rgba(0,0,0,0.1)',
            '& .MuiPaper-root': {
                border: 'none',
            },
            flexShrink: 1,
            /* maxHeight: 135, */
            [theme.breakpoints.down(900)]: {
                width: '100%',
                maxWidth: 'unset',
                flex: 'unset',
            },
            '& .MuiCardContent-root': {
                padding: '16px 20px 24px 20px',
            },
        },
        title: {
            fontFamily: theme.typography.fonts.header,
            textTransform: 'none',
        },
        cardContent: {
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            margin: '0 0 0 15px',
            padding: 0,
            '& li': {
                margin: '3px 0',
                fontSize: '1rem',
                marginLeft: 0,
            },
            '& li.oli': {
                paddingRight: 0,
                listStyleType: 'none',
                counterIncrement: 'step-counter',
            },
            '& li.oli:before': {
                content: 'counter(step-counter)',
                marginRight: '8px',
                fontSize: '1rem',
                backgroundColor: 'rgb(200,200,200)',
                color: 'white',
                fontWeight: 'bold',
                padding: '0 8px',
                borderRadius: '3px',
                transform: 'scale(0.8)',
                display: 'inline-block',
            },
        },
        small: {
            fontSize: '0.9rem',
            paddingTop: 15,
        },
        infoWrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        info: {
            background: 'none',
            color: theme.palette.secondary.main,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            /* borderRadius: theme.shape.borderRadius, */
            padding: '5px 13px',
            marginBottom: 12,
            '& span': {
                fontSize: 15,
                transform: 'translateY(1.5px)',
                paddingLeft: 6,
                paddingRight: 1.5,
            },
            /* boxShadow: '8px 8px 10px rgba(0,0,0,0.1), -8px -8px 10px rgba(255,255,255,1), inset 6px 6px 10px rgba(0,0,0,0.1), inset -6px -6px 10px rgba(255,255,255,0.1)', */
            marginTop: 6,
            fontWeight: 500,
        },
        noticeMsg: {
            background: theme.palette.secondary.main,
            color: 'white',
            fontWeight: 700,
            fontSize: 18,
            textAlign: 'center',
            letterSpacing: 0.9,
            padding: 12,
            borderRadius: theme.shape.borderRadius,
            marginTop: 35,
            display: 'block',
        },
    }));
    const classes = useStyles();

    return (
        <>
            <ScrollToTop />
            <Nav />
            <div className={classes.header}>
                <Container maxWidth="lg">
                    <div className={classes.subNavBig}>
                        <div className={classes.subNavSectionBig}>
                            <Typography variant="h4" component="h2" className={classes.subNavTitleBig}><PaintIcon className={classes.subNavIconBig} /> Painting:</Typography>
                            <NavLink to="/phone-cases" className={classes.subNavButtonBig}>Phone Cases</NavLink>
                            <NavLink to="/airpods-cases" className={classes.subNavButtonBig}>AirPods Cases</NavLink>
                            <NavLink to="/water-bottles" className={classes.subNavButtonBig}>Water Bottles</NavLink>
                            <NavLink to="/shoes" className={classes.subNavButtonBig}>Shoes</NavLink>
                            <NavLink to="/other" className={classes.subNavButtonBig}>Other</NavLink>
                        </div>
                        <div className={classes.subNavSectionBig}>
                            <Typography variant="h4" component="h2" className={classes.subNavTitleBig}><SewIcon className={classes.subNavIconBig} /> Sewing:</Typography>
                            <NavLink to="/masks" className={classes.subNavButtonBig} activeClassName='active'>Face Masks</NavLink>
                            <NavLink to="/scrunchies" className={classes.subNavButtonBig}>Scrunchies</NavLink>
                            <NavLink to="/hats" className={classes.subNavButtonBig}>Hats</NavLink>
                            <NavLink to="/clothes" className={classes.subNavButtonBig}>Clothes</NavLink>
                        </div>
                    </div>

                    <div className={classes.subNavSmall}>
                        <div className={classes.subNavSectionSmall}>
                            <button onClick={() => toggleDropd('paint')} className={classes.smallButtonDropd}><Typography variant="h4" component="h2" className={[classes.subNavTitleSmall, dropd['paint'] ? 'active' : '', (location.pathname.includes('/phone-cases') || location.pathname.includes('/airpods-cases') || location.pathname.includes('/water-bottles') || location.pathname.includes('/shoes') || location.pathname.includes('/other')) ? 'on' : ''].join(' ')}><PaintIcon className={classes.subNavIconSmall} /> Painting <ArrowDropDownIcon className={[classes.subNavArrowSmall, dropd['paint'] ? 'active' : ''].join(' ')} /></Typography></button>
                            <div className={[classes.subNavListSmall, dropd['paint'] ? 'active' : ''].join(' ')}>
                                <NavLink to="/phone-cases" className={classes.subNavButtonSmall} activeClassName='active' onClick={() => toggleDropd()}>Phone Cases</NavLink>
                                <NavLink to="/airpods-cases" className={classes.subNavButtonSmall} activeClassName='active' onClick={() => toggleDropd()}>AirPods Cases</NavLink>
                                <NavLink to="/water-bottles" className={classes.subNavButtonSmall} activeClassName='active' onClick={() => toggleDropd()}>Water Bottles</NavLink>
                                <NavLink to="/shoes" className={classes.subNavButtonSmall} activeClassName='active' onClick={() => toggleDropd()}>Shoes</NavLink>
                                <NavLink to="/other" className={classes.subNavButtonSmall} activeClassName='active' onClick={() => toggleDropd()}>Other</NavLink>
                            </div>
                        </div>
                        <div className={classes.subNavSectionSmall}>
                            <button onClick={() => toggleDropd('sew')} className={classes.smallButtonDropd}><Typography variant="h4" component="h2" className={[classes.subNavTitleSmall, dropd['sew'] ? 'active' : '', (location.pathname.includes('/masks') || location.pathname.includes('/scrunchies') || location.pathname.includes('/hats') || location.pathname.includes('/clothes')) ? 'on' : ''].join(' ')}><SewIcon className={classes.subNavIconSmall} /> Sewing <ArrowDropDownIcon className={[classes.subNavArrowSmall, dropd['sew'] ? 'active' : ''].join(' ')} /></Typography></button>
                            <div className={[classes.subNavListSmall, dropd['sew'] ? 'active' : ''].join(' ')}>
                                <NavLink to="/masks" className={classes.subNavButtonSmall} activeClassName='active' onClick={() => toggleDropd()}>Face Masks</NavLink>
                                <NavLink to="/scrunchies" className={classes.subNavButtonSmall} activeClassName='active' onClick={() => toggleDropd()}>Scrunchies</NavLink>
                                <NavLink to="/hats" className={classes.subNavButtonSmall} activeClassName='active' onClick={() => toggleDropd()}>Hats</NavLink>
                                <NavLink to="/clothes" className={classes.subNavButtonSmall} activeClassName='active' onClick={() => toggleDropd()}>Clothes</NavLink>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className={[classes.paintLineWrapper, classes.bottomPaintLine, classes.headerBottomPaintLine].join(' ')}><img src={PaintLine} className={classes.paintLine} alt="Paint Line" /></div>
            <Typography variant="h3" component="h1" className={classes.pageTitle}>{props.title}</Typography>
            <Tabs
                value={tab}
                onChange={handleTab}
                indicatorColor="primary"
                textColor="primary"
                centered
                classes={{ indicator: classes.indicator }}
            >
                <Tab label={<Link to={'/' + location.pathname.split('/')[1]}>Gallery</Link>} className={classes.tabLabel} />
                <Tab label={<Link to={'/' + location.pathname.split('/')[1] + '/order'}>Order</Link>} className={classes.tabLabel} />
            </Tabs>
            <TabPanel value={tab} index={0}>
                <Container maxWidth="lg">
                    <Grid container spacing={2} className={classes.galleryContainer}>
                        <Gallery urls={props.gallery} />
                    </Grid>
                </Container>
            </TabPanel>
            <TabPanel value={tab} index={1}>
                <Container maxWidth="lg" className={classes.orderContainer}>
                    {props.order ? props.order :
                        <>
                            {props.youProvide && <div className={classes.infoWrapper}><div className={classes.info}><InfoIcon /><span>{props.youProvide}</span></div></div>}
                            <div className={classes.myOrder}>
                                <div className={classes.cardWrapper}>
                                    <Card className={classes.card} variant="outlined">
                                        <CardContent>
                                            <Typography variant="h5" component="h2" className={classes.title}>
                                                Pricing
                                            </Typography>
                                            <ul className={classes.cardContent}>
                                                {props.perPrice && <li className="uli">{props.perPrice}</li>}
                                                {props.perPriceCustom}
                                                <li className="uli">{props.shippingPrice ? props.shippingPrice : '$3 - $8 shipping'}</li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className={classes.myOrderResults}>
                                    <Typography variant="h5" component="h2" className={classes.title}>How To Order</Typography>
                                    {props.howToOrder &&
                                        <p style={{ maxWidth: 700, fontSize: '1rem', margin: '10px 0' }}>
                                            {props.howToOrder}
                                        </p>
                                    }
                                    <p style={{ maxWidth: 700, fontSize: '1rem', margin: '16px 0 10px' }}>
                                        You will receive a request for payment via PayPal.<br />
                                        <span className={classes.small}>Please let me know if you need to arrange a different form of payment.<br />
                                        Payment upon pickup or delivery available for locals.</span>
                                    </p>
                                </div>
                            </div>
                            <div style={{ maxWidth: 900, margin: '0 auto' }}>
                                <ContactForm noCancel noContainer />
                            </div>
                        </>
                    }
                </Container>
            </TabPanel>
            {props.children}

            {tab === 0 && <ContactDialog />}
        </>
    )
}