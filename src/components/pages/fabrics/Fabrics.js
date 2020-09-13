import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
/* import Grid from '@material-ui/core/Grid'; */
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import canStore from '../../../functions/canStore';
/* import FabricCard from './FabricCard';
import FabricDialog from './FabricDialog'; */
import fabricsList from './fabricsList';
import FabricsSettings from './FabricsSettings';
import Button from '@material-ui/core/Button';

import { FabricsContext, settings } from './FabricsContext';
import { Snackbar, Typography } from '@material-ui/core';
/* import FabricsCounter from './FabricsCounter'; */
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Service from '../Service';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

/* import AddFabricGrid from '../../addFabric_grid.png';
import AddFabricList from '../../addFabric_list.png'; */

import Backdrop from '@material-ui/core/Backdrop';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CircularProgress from '@material-ui/core/CircularProgress';
import FabricGallery from './FabricGallery';
import ContactDialog from '../ContactDialog';
import HowToOrder from './HowToOrder';
import { Alert as MuiAlert } from '@material-ui/lab';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}



export default function Fabrics() {
    const gallery = [
        {
            thumb: '/gallery/face-mask25-thumbnail.jpg',
            main: '/gallery/face-mask25.jpg',
        },
        {
            thumb: '/gallery/face-mask24-thumbnail.jpg',
            main: '/gallery/face-mask24.jpg',
        },
        {
            thumb: '/gallery/face-mask23-thumbnail.jpg',
            main: '/gallery/face-mask23.jpg',
        },
        {
            thumb: '/gallery/face-mask22-thumbnail.jpg',
            main: '/gallery/face-mask22.jpg',
        },
        {
            thumb: '/gallery/face-mask21-thumbnail.jpg',
            main: '/gallery/face-mask21.jpg',
        },
        {
            thumb: '/gallery/face-mask20-thumbnail.jpg',
            main: '/gallery/face-mask20.jpg',
        },
        {
            thumb: '/gallery/face-mask19-thumbnail.jpg',
            main: '/gallery/face-mask19.jpg',
        },
        {
            thumb: '/gallery/face-mask18-thumbnail.jpg',
            main: '/gallery/face-mask18.jpg',
        },
        {
            thumb: '/gallery/face-mask17-thumbnail.jpg',
            main: '/gallery/face-mask17.jpg',
        },
        {
            thumb: '/gallery/face-mask16-thumbnail.jpg',
            main: '/gallery/face-mask16.jpg',
        },
        {
            thumb: '/gallery/face-mask15-thumbnail.jpg',
            main: '/gallery/face-mask15.jpg',
        },
        {
            thumb: '/gallery/face-mask14-thumbnail.jpg',
            main: '/gallery/face-mask14.jpg',
        },
        {
            thumb: '/gallery/face-mask13-thumbnail.jpg',
            main: '/gallery/face-mask13.jpg',
        },
        {
            thumb: '/gallery/face-mask12-thumbnail.jpg',
            main: '/gallery/face-mask12.jpg',
        },
        {
            thumb: '/gallery/face-mask11-thumbnail.jpg',
            main: '/gallery/face-mask11.jpg',
        },
        {
            thumb: '/gallery/face-mask10-thumbnail.jpg',
            main: '/gallery/face-mask10.jpg',
        },
        {
            thumb: '/gallery/face-mask9-thumbnail.jpg',
            main: '/gallery/face-mask9.jpg',
        },
        {
            thumb: '/gallery/face-mask8-thumbnail.jpg',
            main: '/gallery/face-mask8.jpg',
        },
        {
            thumb: '/gallery/face-mask7-thumbnail.jpg',
            main: '/gallery/face-mask7.jpg',
        },
        {
            thumb: '/gallery/face-mask6-thumbnail.jpg',
            main: '/gallery/face-mask6.jpg',
        },
        {
            thumb: '/gallery/face-mask5-thumbnail.jpg',
            main: '/gallery/face-mask5.jpg',
        },
        {
            thumb: '/gallery/face-mask4-thumbnail.jpg',
            main: '/gallery/face-mask4.jpg',
        },
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

    /* const fabrics = fabricsList; */

    const [selectedColors, setSelectedColors] = React.useState([]);
    const selectColor = (color) => {
        setSelectedColors([...selectedColors, color]);
    };
    const unselectColor = (color) => {
        setSelectedColors(selectedColors.filter(e => e !== color));
    };
    /* const shouldShow = (colors) => {
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
    }; */

    /* const gridRef = React.useRef(); */
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
            fontSize: 42,
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
            maxHeight: 135,
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
        myOrderForm: {
            marginTop: 8,
            '& p': {
                margin: 2,
            },
        },
        myOrderFabrics: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            [theme.breakpoints.down(1090)]: {
                flexDirection: 'column',
            },
            marginTop: 9,
            marginBottom: 45,
        },
        fabricsHowToAdd: {
            display: 'block',
            margin: '0 auto',
            width: '100%',
            maxWidth: 200,
            '&.grid': {
                maxWidth: 200,
                marginTop: 35,
                marginBottom: 7,
            },
            '&.list': {
                maxWidth: 250,
                marginTop: 30,
                marginBottom: 5,
            },
        },
        measurementsContainer: {
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            marginTop: 30,
            '&:nth-of-type(even)': {
                marginLeft: 45,
            },
            [theme.breakpoints.down(1090)]: {
                '&:nth-of-type(even)': {
                    marginLeft: 0,
                },
            },
            /* '&:first-of-type': {
                marginTop: 20,
            }, */
        },
        fabricSwatchContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
        },
        fabricSwatchTitle: {
            margin: 0,
            fontWeight: 500,
            fontSize: 19,
        },
        measurementInputs: {
            display: 'flex',
            alignItems: 'flex-end',
            '& .MuiFormControl-root': {
                '&:first-of-type': {
                    marginRight: 10,
                },
            },
            '& .MuiInputBase-root': {
                maxWidth: 125,
                width: '100%',
            },
            '& .MuiOutlinedInput-input': {
                padding: 14,
            },
            [theme.breakpoints.down(1222)]: {
                flexDirection: 'column',
                alignItems: 'flex-start',
            },
            '& .MuiFormHelperText-contained': {
                marginLeft: 0,
            },
            '& .MuiFormControl-root.error': {
                '& .MuiFormHelperText-contained': {
                    color: theme.palette.error.main,
                },
            },
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
            height: 75,
            width: 75,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& img': {
                display: 'block',
                width: 'auto',
                height: '210px',
            },
            overflow: 'hidden',
            borderRadius: theme.shape.borderRadius,
            marginRight: 10,
        },
        removeFabric: {
            border: `1px solid ${theme.palette.secondary.main}`,
            background: '#fff',
            color: theme.palette.secondary.main,
            outline: 'none',
            cursor: 'pointer',
            borderRadius: theme.shape.borderRadius,
            display: 'flex',
            alignItems: 'center',
            marginTop: 5,
            padding: '2px 13px 2px 10px',
            transition: theme.transitions.create('all'),
            fontWeight: 500,
            '&:hover': {
                background: theme.palette.secondary.main,
                color: '#fff',
            },
            '& svg': {
                height: '0.95em',
                marginRight: 2,
            },
        },
        submitButton: {
            marginTop: 20,
            boxShadow: 'none',
            color: '#fff',
            background: theme.palette.primary.main,
            transition: theme.transitions.create('all'),
            '&:hover': {
                color: '#fff',
                background: theme.palette.primary.dark1,
            },
            float: 'right',
            marginRight: 8,
        },
        nameInput: {
            marginRight: 12,
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
        },
        paperContainer: {
            height: '100%',
            outline: 0,
            '&:after': {
                width: 0,
                height: '100%',
                content: '""',
                display: 'inline-block',
                verticalAlign: 'middle',
            },
            padding: '10px',
            textAlign: 'center',
            maxWidth: 1000,
            position: 'relative',
            margin: '0 auto',
        },
        paper: {
            display: 'inline-block',
            textAlign: 'center',
            verticalAlign: 'middle',
            '& img': {
                display: 'block',
                /* marginBottom: 10, */
                boxShadow: theme.shadows[10],
                width: 'auto',
                height: 'auto',
                /* maxHeight: '100%', */
                maxWidth: '100%',
                maxHeight: 'calc(100vh - 50px)',
                transition: theme.transitions.create('opacity', { duration: 500 }),
                opacity: 1,
            },
            position: 'relative',
        },
        closeX: {
            position: 'absolute',
            top: 0,
            /* left: '50%',
            transform: 'translateX(calc(-50% - 16px))', */
            right: 0,
            background: theme.palette.background.paper,
            color: '#222',
            transition: theme.transitions.create('background', { duration: 400 }),
            '&:hover': {
                background: '#eee',
                color: '#222',
            },
            margin: 10,
            padding: 6,
            boxShadow: theme.shadows[5],
            '& svg': {
                fontSize: 22,
            },
            zIndex: 1,
        },
        spinnerWrapper: {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,calc(-50% + 32px))',
            color: '#fff',
            '& .MuiCircularProgress-root': {
                color: '#fff',
            },
        },
        measurementsHowToLink: {
            color: theme.palette.primary.main,
        },
        contactLink: {
            color: theme.palette.primary.main,
            textDecoration: 'underline',
            display: 'inline-block',
            cursor: 'pointer',
        },


        snackbar: {
            padding: 10,
            [theme.breakpoints.up('sm')]: {
                transform: 'translate(-50%, 10px)',
                /* minWidth: 350, */
                /* maxWidth: 350, */
            },
            [theme.breakpoints.up(520)]: {
                minWidth: 490,
            },
            '& .MuiAlert-filledSuccess': {
                background: theme.palette.primary.main,
            },
            '& h3': {
                textTransform: 'none',
            },
            '& span': {
                fontWeight: 400,
                fontSize: 14,
            },
            '& .MuiAlert-icon svg': {
                width: '1.4em',
                height: '1.4em',
                marginTop: 1.5,
            },
            '& .MuiAlert-action': {
                marginBottom: 22,
                marginLeft: 12,
                height: 27,
            },
        },
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

        handleSnackbarOpen();
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
    const [nameValid, setNameValid] = React.useState(true);
    const [emailValid, setEmailValid] = React.useState(true);

    const [measurements, setMeasurements] = React.useState({});

    function encode(data) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }
    const handleSubmit = e => {

        let measurementsObject = {};
        let allMeasurementsValid = true;
        orderFabrics.forEach((fabric) => {
            const measurementInputs = document.getElementById(fabric).getElementsByTagName('input');
            for (let i = 0; i < measurementInputs.length; i++) {
                const measurementInput = measurementInputs[i];
                const measurementInputValid = !(measurementInput.value.trim() == null || measurementInput.value.trim() === "" || measurementInput.value === " " || isNaN(measurementInput.value) || parseFloat(measurementInput.value) === 0);
                if (!measurementInputValid) allMeasurementsValid = false;
                measurementsObject = { ...measurementsObject, [measurementInput.name]: { value: measurementInput.value, valid: measurementInputValid } };
            }
        });
        if (JSON.stringify(measurementsObject) === JSON.stringify({})) allMeasurementsValid = false;
        setMeasurements(measurementsObject);

        const name = document.getElementById('formNameRef').value;
        let nameValid = true;
        if (name === "" || name === null || !name.trim().length) {
            nameValid = false;
            setNameValid(false);
        } else {
            setNameValid(true);
        }

        const email = document.getElementById('formEmailRef').value;
        let emailValid = true;
        if (email === "" || !ValidateEmail(email)) {
            emailValid = false;
            setEmailValid(false);
        } else {
            setEmailValid(true);
        }

        if (nameValid && emailValid && allMeasurementsValid) {
            console.log("ready to go");
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
                'name': name,
                'email': email,
                'measurements': measurements(),
            }
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
                    setOrdered('ok');
                })
                .catch(error => { console.log(error); alert('error'); setOrdered('error'); });
        } else {
            console.log("errors.");
        }
    };


    const fabricsRef = React.useRef();


    const [didLoad, setLoad] = React.useState(false);
    const style2 = didLoad ? { flex: 1 } : { visibility: 'hidden' };



    const [ordered, setOrdered] = React.useState(false);


    const [snackbarOpen, handleSnackbarState] = React.useState(false);
    const handleSnackbarOpen = () => {
        handleSnackbarState(true);
    };
    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        handleSnackbarState(false);
    };

    return (
        <>
            <FabricsContext.Provider value={{ context }}>
                <Service title="Face Masks" gallery={gallery} order={

                    <>
                        <HowToOrder />
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
                                {!ordered && (<>
                                    <Typography variant="h5" component="h2" className={classes.title}>My Order</Typography>
                                    <div className={classes.myOrderForm}>
                                        {(orderFabrics === undefined || orderFabrics.length === 0) && <p style={{ fontSize: 14, }}>There are currently no fabrics selected.</p>}
                                        {(orderFabrics === undefined || orderFabrics.length === 0) && <p style={{ fontSize: 14, marginTop: 10, }}>Please refer to the "How to Order" instructions to start your order.</p>}
                                        {!(orderFabrics === undefined || orderFabrics.length === 0) && <p style={{ fontSize: 14, }}>Enter measurements for each mask. <button className={classes.measurementsHowToLink} style={{ textDecoration: 'underline', cursor: 'pointer', outline: 'none', border: 'none', background: 'none', padding: 0, fontSize: 'inherit' }} onClick={() => document.getElementById('backdrop').style.display = 'block'}>How do I measure?</button></p>}
                                        {/*                                         <p style={{fontSize: 14,}}>To add a mask, press a plus button under your selected fabric.</p>
 */}{/*                                         <p style={{fontSize: 14,}}>You will then be asked to enter your face measurements. <button className={classes.measurementsHowToLink} style={{ textDecoration: 'underline', cursor: 'pointer', outline: 'none', border: 'none', background: 'none', padding: 0, fontSize: 'inherit' }} onClick={() => document.getElementById('backdrop').style.display = 'block'}>How do I measure?</button></p>
 */}{/*                                         {(orderFabrics === undefined || orderFabrics.length === 0) ? (gridView ? <img src={AddFabricGrid} alt="How to start a mask" className={[classes.fabricsHowToAdd, 'grid'].join(' ')} /> : <img src={AddFabricList} alt="How to start a mask" className={[classes.fabricsHowToAdd, 'list'].join(' ')} />) : ''}
 */}                                        {!(orderFabrics === undefined || orderFabrics.length === 0) && (
                                            <div className={classes.myOrderFabrics} ref={fabricsRef}>
                                                {
                                                    Object.keys(orderFabrics).map((fabric, i) => {
                                                        const fabricObj = fabricsList.find(obj => {
                                                            return obj.name === orderFabrics[fabric].split('__')[0]
                                                        });
                                                        return (
                                                            <div key={i} id={orderFabrics[fabric]} className={classes.measurementsContainer}>
                                                                <div className={classes.fabricSwatchContainer}>
                                                                    <div className={classes.thumbnailOrder}>
                                                                        <img
                                                                            src={fabricObj.thumbnail}
                                                                            alt={fabricObj.name}
                                                                        />
                                                                    </div>
                                                                    <p className={classes.fabricSwatchTitle}>{fabricObj.name}</p>
                                                                </div>
                                                                <div className={classes.measurementInputs}>


                                                                    <div className={classes.measurementInputsValues}>

                                                                        <FormControl variant="outlined" className={measurements.hasOwnProperty(orderFabrics[fabric] + '__ear') ? (!measurements[orderFabrics[fabric] + '__ear'].valid ? 'error' : '') : ''}>
                                                                            <FormHelperText>Nose to Ear {measurements.hasOwnProperty(orderFabrics[fabric] + '__ear') ? (!measurements[orderFabrics[fabric] + '__ear'].valid ? ' (Invalid)' : '') : ''}</FormHelperText>
                                                                            <OutlinedInput
                                                                                endAdornment={<InputAdornment position="end">in</InputAdornment>}
                                                                                labelWidth={0}

                                                                                name={orderFabrics[fabric] + '__ear'}
                                                                                error={measurements.hasOwnProperty(orderFabrics[fabric] + '__ear') ? !measurements[orderFabrics[fabric] + '__ear'].valid : false}
                                                                            />
                                                                        </FormControl>
                                                                        {/* {measurements.hasOwnProperty(orderFabrics[fabric] + '__ear') ? (!measurements[orderFabrics[fabric] + '__ear'].valid ? 'Invalid number' : '') : ''} */}

                                                                        <FormControl variant="outlined" className={measurements.hasOwnProperty(orderFabrics[fabric] + '__chin') ? (!measurements[orderFabrics[fabric] + '__chin'].valid ? 'error' : '') : ''}>
                                                                            <FormHelperText>Nose to Chin {measurements.hasOwnProperty(orderFabrics[fabric] + '__chin') ? (!measurements[orderFabrics[fabric] + '__chin'].valid ? ' (Invalid)' : '') : ''}</FormHelperText>
                                                                            <OutlinedInput
                                                                                endAdornment={<InputAdornment position="end">in</InputAdornment>}
                                                                                labelWidth={0}

                                                                                name={orderFabrics[fabric] + '__chin'}
                                                                                error={measurements.hasOwnProperty(orderFabrics[fabric] + '__chin') ? !measurements[orderFabrics[fabric] + '__chin'].valid : false}
                                                                            />
                                                                        </FormControl>
                                                                        {/* {measurements.hasOwnProperty(orderFabrics[fabric] + '__chin') ? (!measurements[orderFabrics[fabric] + '__chin'].valid ? 'Invalid number' : '') : ''} */}
                                                                    </div>
                                                                </div>

                                                                <button onClick={() => removeOrderFabrics(orderFabrics[fabric])} className={classes.removeFabric}><DeleteOutlineIcon /> Remove</button>
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </div>
                                        )}
                                        <form name="order" onSubmit={handleSubmit}>
                                            <input type="hidden" name="form-name" value="order" />
                                            {!(orderFabrics === undefined || orderFabrics.length === 0) && (
                                                <div style={{ maxWidth: 600, fontSize: 14, margin: '10px 0 5px' }}>
                                                    You will receive a request for payment via PayPal.
                                                To arrange a different form of payment, <ContactDialog className={classes.contactLink}><span>contact me</span></ContactDialog>.
                                                Payment upon pickup or delivery available for locals.
                                                </div>
                                            )}
                                            {(orderFabrics === undefined || orderFabrics.length === 0) ? '' : <TextField id="formNameRef" label={nameValid ? "Name" : 'Name (Invalid)'} variant="outlined" type="text" name="name" className={[classes.formItem, classes.nameInput].join(' ')} error={nameValid ? false : true} style={{ width: '100%', maxWidth: 250 }} />}
                                            {(orderFabrics === undefined || orderFabrics.length === 0) ? '' : <TextField ref={formEmailRef} id="formEmailRef" label={emailValid ? "Email" : 'Email (Invalid)'} variant="outlined" type="email" name="email" className={classes.formItem} error={emailValid ? false : true} style={{ width: '100%', maxWidth: 250 }} />}

                                        </form>
                                        {(orderFabrics === undefined || orderFabrics.length === 0) ? '' : <Button variant="contained" onClick={handleSubmit} className={classes.submitButton}>Submit</Button>}
                                    </div>
                                </>)}
                                {ordered === 'ok' && (
                                    <>
                                        <Typography variant="h5" component="h2" className={classes.title}>Thank you, your order has been submitted.</Typography>
                                        <div style={{ maxWidth: 600, fontSize: '1rem', margin: '10px 0' }}>
                                            You will receive a request for payment via PayPal.
                                            To arrange a different form of payment, <ContactDialog className={classes.contactLink}><span>contact me</span></ContactDialog>.
                                            Payment upon pickup or delivery available for locals.
                                        </div>
                                    </>
                                )}
                                {ordered === 'error' && (
                                    <>
                                        <Typography variant="h5" component="h2" className={classes.title}>Sorry, there was an error on our end.</Typography>
                                        <p style={{ maxWidth: 600, fontSize: '0.9rem', margin: '10px 0' }}>
                                            Please try again or <ContactDialog className={classes.contactLink}><span>contact me</span></ContactDialog> with your order. Thank you.
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>

                        <Typography component="h2" variant="h2" className={classes.subTitle}>Fabric Choices</Typography>
                        <FabricsSettings />

                        {/* {gridView ?
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
                        } */}
                        <FabricGallery />
                    </>
                } />
            </FabricsContext.Provider>
            <Backdrop id='backdrop' className={classes.backdrop} open={true} style={{ display: 'none' }}>
                <div className={classes.paperContainer} id='galleryContainerRef'>
                    <div className={classes.paper}>
                        <IconButton aria-label="delete" className={classes.closeX} onClick={() => document.getElementById('backdrop').style.display = 'none'} centerRipple={false}>
                            <CloseIcon />
                        </IconButton>
                        <img src="/face_measuring_illustration.jpg" alt="How to measure" onLoad={() => setLoad(true)} style={style2} />
                    </div>
                    {!didLoad ? <div className={classes.spinnerWrapper}><CircularProgress /></div> : ''}
                </div>
            </Backdrop>


            <Snackbar open={snackbarOpen} autoHideDuration={2500} onClose={handleSnackbarClose} className={classes.snackbar}>
                <Alert onClose={handleSnackbarClose} severity="success">
                    <Typography variant="h5" component="h3">Fabric added</Typography>
                    <span>Please enter face measurements at the top of the page.</span>
                </Alert>
            </Snackbar>
        </>
    );
}