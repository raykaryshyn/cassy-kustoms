import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import canStore from '../../../functions/canStore';
import FabricCard from './FabricCard';
import FabricDialog from './FabricDialog';
import fabricsList from './fabricsList';
import FabricsSettings from './FabricsSettings';
import Button from '@material-ui/core/Button';

import { FabricsContext, settings } from './FabricsContext';
import { Typography } from '@material-ui/core';
import FabricsCounter from './FabricsCounter';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Service from '../Service';



export default function Fabrics() {
    const gallery = [
        {
            thumb: '/gallery/face-mask3-thumbnail.jpg',
            main: '/gallery/face-mask3.jpg',
        },
        {
            thumb: '/gallery/face-mask2-thumbnail.jpg',
            main: '/gallery/face-mask2.jpg',
        },
        {
            thumb: '/gallery/face-mask1-thumbnail.jpg',
            main: '/gallery/face-mask1.jpg',
        },
    ];

    const fabrics = fabricsList;

    const [selectedColors, setSelectedColors] = React.useState([]);
    const selectColor = (color) => {
        setSelectedColors([...selectedColors, color]);
    };
    const unselectColor = (color) => {
        setSelectedColors(selectedColors.filter(e => e !== color));
    };
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
    const [gridView, setGridViewState] = React.useState(
        canStore() && localStorage.getItem('gridView') !== null ?
            localStorage.getItem('gridView') === 'true' :
            true
    );
    const setGridView = (state) => {
        setGridViewState(state);
        if (canStore()) localStorage.setItem('gridView', state);
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
            '& ul': {
                paddingInlineStart: '15px',
            },

            margin: '0 auto',

            background: '#fff',
            borderRadius: theme.shape.borderRadius,
            boxShadow: '0 0 20px rgba(0,0,0,0.1)',
            '& .MuiPaper-root': {
                border: 'none',
            },
            flexShrink: 1,
            maxHeight: 135,
            [theme.breakpoints.down(900)]: {
                width: '100%',
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
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'flex-start',
            [theme.breakpoints.down(900)]: {
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: 'stretch',
                justifyContent: 'flex-start',
            },
        },
        myOrderResults: {
            background: '#fff',
            borderRadius: theme.shape.borderRadius,
            boxShadow: '0 0 20px rgba(0,0,0,0.1)',
            flex: 1,
            marginRight: 15,
            padding: '16px 16px 24px 20px',
            minWidth: 500,
            [theme.breakpoints.down(900)]: {
                marginRight: 0,
                marginTop: 15,
                minWidth: 300,
            },
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
        thumbnailOrder: {
            height: 150,
            width: 150,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& img': {
                display: 'block',
                width: '100%',
                height: 'auto',
            },
            overflow: 'hidden',
            borderRadius: theme.shape.borderRadius,
        }
    }));
    const classes = useStyles();






    const [orderFabrics, setOrderFabricsState] = React.useState(
        canStore() && localStorage.getItem('orderFabrics') !== null ?
            JSON.parse(localStorage.getItem('orderFabrics')) :
            []
    );
    const setOrderFabrics = (fabrics) => {
        for (const fabric in fabrics) {
            if (fabrics[fabric] === 0) {
                delete fabrics[fabric]
            }
        }
        setOrderFabricsState(fabrics);
        if (canStore()) localStorage.setItem('orderFabrics', JSON.stringify(fabrics));
    };
    const addOrderFabrics = (fabric) => {
        let clone = orderFabrics.slice(0);

        let num = 0;
        for (const f in orderFabrics) {
            if (orderFabrics[f].split('__')[0] === fabric) {
                num += 1;
            }
        }

        let name = fabric + '__' + num;
        clone.push(name);
        setOrderFabrics(clone);
    };
    const removeOrderFabrics = (fabric) => {
        let clone = orderFabrics.slice(0);

        if (fabric.split('__').length === 1) {
            for (var i = orderFabrics.length - 1; i >= 0; i--) {
                if (orderFabrics[i].split('__')[0] === fabric) {
                    clone.splice(i, 1);
                    setOrderFabrics(clone);
                    break;
                }
            }
        } else {
            clone = clone.filter(item => item !== fabric);
            setOrderFabrics(clone);
        }
    };
    const context = {
        ...settings,
        selectedColors: selectedColors,
        selectColor: selectColor,
        unselectColor: unselectColor,
        gridView: gridView,
        setGridView: setGridView,
        orderFabrics: orderFabrics,
        addOrderFabrics: addOrderFabrics,
        removeOrderFabrics: removeOrderFabrics,
    };



    const cancelOrder = () => {
        setOrderFabrics([]);
        if (canStore()) {
            localStorage.removeItem('orderFabrics');
        }
    };


    function ValidateEmail(emailAddr) {
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailAddr)) {
            return (true)
        }
        return (false)
    }
    const formEmailRef = React.createRef();
    const [emailValid, setEmailValid] = React.useState(true);

    const [measurements, setMeasurements] = React.useState({});

    function encode(data) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }
    const handleSubmit = e => {
        alert('submitting');

        let measurementsObject = {};
        let allMeasurementsValid = true;
        orderFabrics.forEach((fabric) => {
            const measurementInputs = document.getElementById(fabric).getElementsByTagName('input');
            for (const measurementInput of measurementInputs) {
                const measurementInputValid = !(measurementInput.value.trim() == null || measurementInput.value.trim() === "" || measurementInput.value === " " || isNaN(measurementInput.value) || parseFloat(measurementInput.value) === 0);
                if (!measurementInputValid) allMeasurementsValid = false;
                measurementsObject = { ...measurementsObject, [measurementInput.name]: { value: measurementInput.value, valid: measurementInputValid } };
            }
        });
        if (JSON.stringify(measurementsObject) === JSON.stringify({})) allMeasurementsValid = false;
        setMeasurements(measurementsObject);
        alert('measurements: ' + JSON.stringify(measurementsObject));

        const email = document.getElementById('formEmailRef').value;
        let emailValid = true;
        if (email === "" || !ValidateEmail(email)) {
            emailValid = false;
            setEmailValid(false);
        } else {
            setEmailValid(true);
        }
        alert('email valid: ' + emailValid);

        if (emailValid && allMeasurementsValid) {
            console.log("ready to go");
            alert('ready to go');
            let measurements = () => {
                var out = '';
                Object.keys(measurementsObject).forEach(i => {
                    out += i;
                    out += ': ';
                    out += measurementsObject[i].value + ' in';
                    out += '\n';
                });
                return out;
            };
            const body = {
                'email': email,
                'measurements': measurements(),
            }
            alert('body: ' + JSON.stringify(body));
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({
                    "form-name": 'order',
                    ...body
                })
            })
                .then(() => {
                    console.log(body);
                    cancelOrder();
                    alert('sending');
                })
                .catch(error => { console.log(error); alert('error'); });
        } else {
            console.log("errors.");
            alert('errors');
        }
    };


    const fabricsRef = React.useRef();

    return (
        <>
            <FabricsContext.Provider value={{ context }}>
                <Service title="Face Masks" gallery={gallery} order={

                    <>
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

                            <div className={classes.myOrderResults}>
                                <Typography variant="h5" component="h2" className={classes.title}>My Order</Typography>
                                <form name="order" onSubmit={handleSubmit}>
                                    <input type="hidden" name="form-name" value="order" />
                                    <TextField ref={formEmailRef} id="formEmailRef" label="Email" variant="outlined" type="email" name="email" className={classes.formItem} error={emailValid ? false : true} helperText={emailValid ? '' : 'Invalid email'} />
                                </form>
                                <div className={classes.myOrderFabrics} ref={fabricsRef}>
                                    {orderFabrics ?
                                        Object.keys(orderFabrics).map((fabric, i) => {
                                            const fabricObj = fabricsList.find(obj => {
                                                return obj.name === orderFabrics[fabric].split('__')[0]
                                            });
                                            return (
                                                <div key={i} id={orderFabrics[fabric]}>
                                                    <p>{fabricObj.name}</p>
                                                    <div className={classes.thumbnailOrder}>
                                                        <img
                                                            src={fabricObj.thumbnail}
                                                            alt={fabricObj.name}
                                                        />
                                                    </div>
                                                    <FormControl variant="outlined">
                                                        <FormHelperText>Nose to Ear</FormHelperText>
                                                        <OutlinedInput
                                                            endAdornment={<InputAdornment position="end">in</InputAdornment>}
                                                            labelWidth={0}

                                                            name={orderFabrics[fabric] + '__ear'}
                                                            error={measurements.hasOwnProperty(orderFabrics[fabric] + '__ear') ? !measurements[orderFabrics[fabric] + '__ear'].valid : false}
                                                        />
                                                    </FormControl>
                                                    {measurements.hasOwnProperty(orderFabrics[fabric] + '__ear') ? (!measurements[orderFabrics[fabric] + '__ear'].valid ? 'Invalid number' : '') : ''}

                                                    <FormControl variant="outlined">
                                                        <FormHelperText>Nose to Chin</FormHelperText>
                                                        <OutlinedInput
                                                            endAdornment={<InputAdornment position="end">in</InputAdornment>}
                                                            labelWidth={0}

                                                            name={orderFabrics[fabric] + '__chin'}
                                                            error={measurements.hasOwnProperty(orderFabrics[fabric] + '__chin') ? !measurements[orderFabrics[fabric] + '__chin'].valid : false}
                                                        />
                                                    </FormControl>
                                                    {measurements.hasOwnProperty(orderFabrics[fabric] + '__chin') ? (!measurements[orderFabrics[fabric] + '__chin'].valid ? 'Invalid number' : '') : ''}

                                                    <button onClick={() => removeOrderFabrics(orderFabrics[fabric])}>Remove</button>
                                                </div>
                                            );
                                        })
                                        :
                                        ''
                                    }
                                </div>
                                {(orderFabrics === undefined || orderFabrics.length === 0) ? '' : <Button variant="contained" onClick={handleSubmit}>Submit</Button>}
                            </div>
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
                } />
            </FabricsContext.Provider >
        </>
    );
}