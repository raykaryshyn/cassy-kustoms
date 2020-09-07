import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import FabricCard from './FabricCard';
import FabricDialog from './FabricDialog';
import fabricsList from './fabricsList';
import FabricsCounter from './FabricsCounter';

import { FabricsContext } from './FabricsContext';



/* export default function FabricGallery() { */
    const FabricGallery = React.memo(props => {

    const fabrics = fabricsList;

    
    const context = React.useContext(FabricsContext).context;
    const gridView = context.gridView;
    const selectedColors = context.selectedColors;

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
            flexDirection: 'column',
        },
        formItem: {
            margin: '6px 0',
            '& .MuiInputBase-formControl': {
                borderRadius: theme.shape.borderRadius,
                '&:before': {
                    border: 'none',
                },
                '&:after': {
                    border: 'none',
                },
            },
            '& .MuiFilledInput-input:-webkit-autofill': {
                borderRadius: theme.shape.borderRadius,
            },
        },
        tabLabel: {
            fontFamily: theme.typography.fonts.header,
            fontSize: 20,
            color: theme.palette.primary.light1,
            '&.Mui-selected': {
                color: theme.palette.primary.dark2,
            },
            [theme.breakpoints.down(600)]: {
                padding: '6px 22px',
            },
            borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
        },
    }));
    const classes = useStyles();






    /* const Lists = React.memo(() => {
        console.log('complex..', gridView);
        return (
            <p>
                complex...
            </p>
        );
    }); */

    const gridRef = React.useRef();


    return (
        <>

            {gridView ?
                <Grid container spacing={4} className={classes.grid} ref={gridRef}>
                    {fabrics.map((fabric, i) => {
                        if (shouldShow(fabric.colors)) {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={i}>
                                    <FabricDialog fabric={fabric} id={i + 1}><FabricCard gridView={gridView} fabric={fabric} id={i + 1} /></FabricDialog>

                                    <FabricsCounter id={i} />
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

                                    <FabricsCounter id={i} />
                                </Grid>
                            )
                        } else {
                            return '';
                        }
                    })}
                </Grid>
            }
        </>
    );
});
export default React.memo(FabricGallery);