import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import canStore from '../../../functions/canStore';
import FabricCard from './FabricCard';
import FabricDialog from './FabricDialog';
import fabricsList from './fabricsList';
import ContactDialog from '../ContactDialog';
import FabricsSettings from './FabricsSettings';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import { FabricsContext, settings } from './FabricsContext';
import { Typography } from '@material-ui/core';
import PaintLine from '../../paintStroke.png';
import FabricsCounter from './FabricsCounter';




export default function Fabrics() {
    const [selectedColors, setSelectedColors] = React.useState([]);
    const selectColor = (color) => {
        setSelectedColors([...selectedColors, color]);
    };
    const unselectColor = (color) => {
        setSelectedColors(selectedColors.filter(e => e !== color));
    };



    const [gridView, setGridViewState] = React.useState(
        canStore() && localStorage.getItem('gridView') !== null ?
            localStorage.getItem('gridView') === 'true' :
            true
    );
    const setGridView = (state) => {
        setGridViewState(state);
        if (canStore()) localStorage.setItem('gridView', state);
    };

    const [orderWorking, setOrderWorkingState] = React.useState(
        canStore() && localStorage.getItem('orderWorking') !== null ?
            localStorage.getItem('orderWorking') === 'true' :
            false
    );
    const setOrderWorking = (state) => {
        setOrderWorkingState(state);
        if (canStore()) localStorage.setItem('orderWorking', state);
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
        paintLineTop: {
            marginTop: 25,
        },
        paintLineBottom: {
            transform: 'scale(-1, -1)',
            marginBottom: 25,
            float: 'right',
        },
        header: {
            background: '#c8e1e0',
            padding: '20px 0',
            color: '#005861',
        },
        mainTitle: {
            textAlign: 'center',
            fontSize: '2.2rem',
            letterSpacing: '0.3rem',
            wordSpacing: '0.3rem',
            marginBottom: '0.66rem',
        },
        subTitle: {
            fontWeight: 300,
            fontSize: 48,
            textAlign: 'center',
            lineHeight: 1,
            marginBottom: 10,
            letterSpacing: -2,
            textTransform: 'none',
        },
        grid: {
            marginTop: '33px',
            [theme.breakpoints.down(664)]: {
                marginTop: '12px',
            },
            justifyContent: 'center',
            marginBottom: '80px',
        },
        fab: {
            position: 'fixed',
            right: 35,
            bottom: 35,
            [theme.breakpoints.down('xs')]: {
                right: 25,
                bottom: 25,
            },
            background: theme.palette.info.main,
            color: '#fff',
            '&:hover': {
                background: theme.palette.info.dark,
            },
        },
        gridListItem: {
            '&:last-of-type': {
                paddingBottom: 40,
            },
            [theme.breakpoints.down('xs')]: {
                '&:last-of-type': {
                    paddingBottom: 25,
                },
            },
        },
        info: {
            maxWidth: 700,
            margin: '0 auto',
            textAlign: 'center',
            fontFamily: theme.typography.fonts.header,
            fontSize: '1.1rem',
            padding: '0 10px 0.66rem',
        },
        cards: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            margin: '0 auto 125px',
            width: '100%',
            justifyContent: 'center',
        },
        cardWrapper: {
            flex: '1 1 400px',
            maxWidth: '400px',
            padding: 5,
            '& ul': {
                paddingInlineStart: '15px',
            },

            margin: '0 auto',
        },
        title: {
            fontFamily: theme.typography.fonts.body,
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
        contactLink: {
            display: 'inline',
            textDecoration: 'underline',
            color: theme.palette.primary.main,
            cursor: 'pointer',
        },
        beginOrderBtn: {
            boxShadow: 'none',
            background: 'rgba(206, 72, 66, 1)',
            color: '#fff',
            '&:hover': {
                background: 'rgba(206, 72, 66, 1)',
                boxShadow: theme.shadow(0, 0, 0, 'rgba(206, 72, 66, .3)', 3.5),
            },
            margin: '0 auto',
            fontSize: '1.1rem',
            display: 'block',
            padding: '7px 20px',
            fontFamily: 'Roboto Condensed',
        },
        myOrder: {
            marginBottom: '125px',
        },
        myOrderResults: {
            border: '1px solid rgba(0, 0, 0, 0.12)',
        },
        myOrderFabrics: {
            display: 'flex',
        }
    }));
    const classes = useStyles();


    const fabrics = fabricsList;



    const [orderFabrics, setOrderFabricsState] = React.useState(
        canStore() && localStorage.getItem('orderFabrics') !== null ?
            JSON.parse(localStorage.getItem('orderFabrics')) :
            {}
    );
    const setOrderFabrics = (fabrics) => {
        setOrderFabricsState(fabrics);
        if (canStore()) localStorage.setItem('orderFabrics', JSON.stringify(fabrics));
    };
    const addOrderFabrics = (fabric) => {
        setOrderFabrics({ ...orderFabrics, [fabric]: orderFabrics[fabric] ? orderFabrics[fabric] + 1 : 1 });
    };
    const removeOrderFabrics = (fabric) => {
        setOrderFabrics({ ...orderFabrics, [fabric]: orderFabrics[fabric] || orderFabrics[fabric] > 0 ? orderFabrics[fabric] - 1 : 0 });
    };
    const context = {
        ...settings,
        selectedColors: selectedColors,
        selectColor: selectColor,
        unselectColor: unselectColor,
        gridView: gridView,
        setGridView: setGridView,
        orderWorking: orderWorking,
        orderFabrics: orderFabrics,
        addOrderFabrics: addOrderFabrics,
        removeOrderFabrics: removeOrderFabrics,
    };
    console.log(orderFabrics);

    const shouldShow = (colors) => {
        if (selectedColors.length === 0) {
            return true;
        }
        for (let i = 0; i < colors.length; i++) {
            for (let j = 0; j < selectedColors.length; j++) {
                if (colors[i] === selectedColors[j]) {
                    return true;
                }
            }
        }
        return false;
    };

    const gridRef = React.useRef();

    const cancelOrder = () => {
        setOrderWorking(false);
        setOrderFabrics({});
        if (canStore()) {
            localStorage.removeItem('orderFabrics');
            for (const key in localStorage) {
                if (key.includes('fabric__')) {
                    localStorage.removeItem(key);
                }
            }
        }
    };

    return (
        <FabricsContext.Provider value={{ context }}>
            <div style={{ overflow: 'hidden' }}>
                <img src={PaintLine} className={[classes.paintLine, classes.paintLineTop].join(' ')} alt="Paint Line" />
                <div className={classes.header}>
                    <Typography variant="h3" component="h1" className={classes.mainTitle}>Face Masks</Typography>
                    <Typography className={classes.info}>
                        Each mask is made with 2 layers of 100% cotton. They have a custom fit based on your face measurements and come with a removable nose piece wire and comfortable earloops.
                </Typography>
                </div>
                <img src={PaintLine} className={[classes.paintLine, classes.paintLineBottom].join(' ')} alt="Paint Line" />
            </div>

            <Container maxWidth="lg">
                {/* <div className={classes.cards}>
                    <div className={classes.cardWrapper}>
                        <Card className={classes.card} variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="h2" className={classes.title}>
                                    How to Order
                                </Typography>
                                <ol className={classes.cardContent}>
                                    <li className="oli">Pick a fabric</li>
                                    <li className="oli"><ContactDialog className={classes.contactLink}>Contact me</ContactDialog> for measurement instructions</li>
                                </ol>
                            </CardContent>
                        </Card>
                    </div>
                    <div className={classes.cardWrapper}>
                        <Card className={classes.card} variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="h2" className={classes.title}>
                                    Pricing
                                </Typography>
                                <ul className={classes.cardContent}>
                                    <li className="uli">$5 per mask</li>
                                    <li className="uli">$3 - $8 shipping</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div> */}

                <div className={classes.myOrder}>
                    <div className={classes.cardWrapper}>
                        <Card className={classes.card} variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="h2" className={classes.title}>
                                    Pricing
                                </Typography>
                                <ul className={classes.cardContent}>
                                    <li className="uli">$5 per mask</li>
                                    <li className="uli">$3 - $8 shipping</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    {!orderWorking ? <Button variant="contained" className={classes.beginOrderBtn} onClick={() => setOrderWorking(true)}>Place an Order</Button> : ''}

                    {orderWorking ?
                        <div className={classes.myOrderResults}>
                            <Typography variant="h5" component="h1">My Order</Typography>
                            <div className={classes.myOrderFabrics}>
                                {orderFabrics ?
                                    Object.entries(orderFabrics, (fabric) => {
                                        return (
                                            {/* <p>
                                                {fabric}
                                            </p> */}
                                        );
                                    })
                                    :
                                    ''
                                }
                            </div>
                            <Button variant="outlined" onClick={cancelOrder}>Cancel</Button>
                            <Button variant="contained">Submit</Button>
                        </div>
                        :
                        ''
                    }
                </div>

                <Typography component="h2" variant="h2" className={classes.subTitle}>Fabric Choices</Typography>
                <FabricsSettings />

                {gridView ?
                    <Grid container spacing={4} className={classes.grid} ref={gridRef}>
                        {fabrics.map((fabric, i) => {
                            if (shouldShow(fabric.colors)) {
                                return (
                                    <Grid item xs={12} sm={6} md={4} key={i}>
                                        <FabricDialog fabric={fabric} id={i + 1}><FabricCard gridView={gridView} fabric={fabric} id={i + 1} /></FabricDialog>
                                        {orderWorking ? <FabricsCounter id={i} /> : ''}
                                    </Grid>
                                )
                            } else {
                                return '';
                            }
                        })}
                    </Grid>
                    :
                    <Grid container spacing={2} className={classes.grid} ref={gridRef}>
                        {fabrics.map((fabric, i) => {
                            if (shouldShow(fabric.colors)) {
                                return (
                                    <Grid item xs={12} md={6} key={i} className={classes.gridListItem}>
                                        <FabricDialog fabric={fabric} id={i + 1}><FabricCard gridView={gridView} fabric={fabric} id={i + 1} /></FabricDialog>
                                        {orderWorking ? <FabricsCounter id={i} /> : ''}
                                    </Grid>
                                )
                            } else {
                                return '';
                            }
                        })}
                    </Grid>
                }
            </Container>
            <ContactDialog />
        </FabricsContext.Provider >
    );
}
