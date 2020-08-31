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
import Button from '@material-ui/core/Button';

import { FabricsContext, settings } from './FabricsContext';
import { Typography } from '@material-ui/core';
/* import PaintLine from '../../paintStroke.png'; */
import FabricsCounter from './FabricsCounter';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';

/* import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
 */
import Service from '../Service';


/* function TabPanel(props) {
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
} */



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

    /* const [orderWorking, setOrderWorkingState] = React.useState(
        canStore() && localStorage.getItem('orderWorking') !== null ?
            localStorage.getItem('orderWorking') === 'true' :
            false
    );
    const setOrderWorking = (state) => {
        setOrderWorkingState(state);
        if (canStore()) localStorage.setItem('orderWorking', state);
    }; */

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
            /* minWidth: 80,
            margin: '0 25px', */
            [theme.breakpoints.down(600)]: {
                padding: '6px 22px',
            },
            borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
        },
    }));
    const classes = useStyles();


    const fabrics = fabricsList;



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
        /* orderWorking: orderWorking, */
        orderFabrics: orderFabrics,
        addOrderFabrics: addOrderFabrics,
        removeOrderFabrics: removeOrderFabrics,
    };
    /* console.log(orderFabrics); */

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
        /* setOrderWorking(false); */
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

    /* const [email, setEmail] = React.useState(
        ''
    ); */
    /* const handleEmailChange = e => {
        setEmail(e.target.value);
    }; */
    function encode(data) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }
    const handleSubmit = e => {
        const inputs = fabricsRef.current.getElementsByTagName('input');

        let mes2;
        if (inputs.length !== Object.keys(mes).length) {
            let newMes = {};
            Object.keys(inputs).forEach(i => {
                if (!mes.hasOwnProperty(inputs[i].name)) {
                    newMes = { ...newMes, [inputs[i].name]: { value: inputs[i].value, valid: !isNaN(inputs[i].value) } };
                }
            });
            setMes({ ...mes, ...newMes });
            mes2 = { ...mes, ...newMes };
        } else {
            mes2 = { ...mes };
        }

        let newMes2 = { ...mes2 };
        for (let i = 0; i < inputs.length; ++i) {
            let val = mes2[inputs[i].name].value;
            if (val.trim() == null || val.trim() === "" || val === " " || isNaN(val)) {
                newMes2 = { ...newMes2, [inputs[i].name]: { value: inputs[i].value, valid: false } };
            } else {
                newMes2 = { ...newMes2, [inputs[i].name]: { value: inputs[i].value, valid: true } };
            }
        }
        setMes({ ...mes2, ...newMes2 });

        let allMesValid = true;
        let checkMesObj = { ...mes2, ...newMes2 };
        if (Object.keys(checkMesObj).length === 0) allMesValid = false;
        Object.keys(checkMesObj).forEach(i => {
            if (!checkMesObj[i].valid) {
                allMesValid = false;
            }
        });

        const email = document.getElementById('formEmailRef').value;
        console.log(email);
        let emailValid = true;
        if (email === "" || !ValidateEmail(email)) {
            emailValid = false;
            setEmailValid(false);
        } else {
            setEmailValid(true);
        }

        if (emailValid && allMesValid) {
            console.log("ready to go");
            let measurements = () => {
                var out = '';
                Object.keys(checkMesObj).forEach(i => {
                    out += i;
                    out += ': ';
                    out += checkMesObj[i].value + ' in';
                    out += '\n';
                });
                return out;
            };
            const body = {
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
                })
                .catch(error => console.log(error));
        } else {
            console.log("errors.");
        }
    };


    const [mes, setMes] = React.useState({});
    const handleMes = e => {
        setMes({ ...mes, [e.target.name]: { value: e.target.value, valid: !isNaN(e.target.value) } });
        console.log({ ...mes, [e.target.name]: { value: e.target.value, valid: !isNaN(e.target.value) } });
    };


    const fabricsRef = React.useRef();


    /* const [tab, setTab] = React.useState(0);

    const handleTab = (e, newTab) => {
        setTab(newTab);
    }; */




    const gallery = [
        {
            thumb: 'https://picsum.photos/400',
            main: 'https://picsum.photos/1000/1777',
        },
        {
            thumb: 'https://picsum.photos/400',
            main: 'https://picsum.photos/1777/1000',
        },
        {
            thumb: 'https://picsum.photos/400',
            main: 'https://picsum.photos/1000/1777',
        },
        {
            thumb: 'https://picsum.photos/400',
            main: 'https://picsum.photos/1000/1777',
        },
        {
            thumb: 'https://picsum.photos/400',
            main: 'https://picsum.photos/1000/1777',
        },
        {
            thumb: 'https://picsum.photos/400',
            main: 'https://picsum.photos/1000/1777',
        },        
    ];

    return (

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
                            <Typography variant="h5" component="h1">My Order</Typography>
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
                                            <div key={i}>
                                                <p>{fabricObj.name}</p>
                                                <img
                                                    src={fabricObj.thumbnail}
                                                    alt={fabricObj.name}
                                                />
                                                <FormControl variant="outlined">
                                                    <FormHelperText>Nose to Ear</FormHelperText>
                                                    <OutlinedInput
                                                        endAdornment={<InputAdornment position="end">in</InputAdornment>}
                                                        labelWidth={0}
                                                        onChange={handleMes}
                                                        name={orderFabrics[fabric] + '__ear'}
                                                        error={mes.hasOwnProperty(orderFabrics[fabric] + '__ear') ? !mes[orderFabrics[fabric] + '__ear'].valid : false}
                                                    />
                                                </FormControl>
                                                {mes.hasOwnProperty(orderFabrics[fabric] + '__ear') ? (!mes[orderFabrics[fabric] + '__ear'].valid ? 'Invalid number' : '') : ''}

                                                <FormControl variant="outlined">
                                                    <FormHelperText>Nose to Chin</FormHelperText>
                                                    <OutlinedInput
                                                        endAdornment={<InputAdornment position="end">in</InputAdornment>}
                                                        labelWidth={0}
                                                        onChange={handleMes}
                                                        name={orderFabrics[fabric] + '__chin'}
                                                        error={mes.hasOwnProperty(orderFabrics[fabric] + '__chin') ? !mes[orderFabrics[fabric] + '__chin'].valid : false}
                                                    />
                                                </FormControl>
                                                {mes.hasOwnProperty(orderFabrics[fabric] + '__chin') ? (!mes[orderFabrics[fabric] + '__chin'].valid ? 'Invalid number' : '') : ''}

                                                <button onClick={() => removeOrderFabrics(orderFabrics[fabric])}>Remove</button>
                                            </div>
                                        );
                                    })
                                    :
                                    ''
                                }
                            </div>
                            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
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

            <ContactDialog />
        </FabricsContext.Provider>
    );
}




















/* import React from 'react';

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
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
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
    }));
    const classes = useStyles();


    const fabrics = fabricsList;



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

    const [email, setEmail] = React.useState(
        ''
    );
    const handleEmailChange = e => {
        setEmail(e.target.value);
    };
    function encode(data) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }
    const handleSubmit = e => {
        const inputs = fabricsRef.current.getElementsByTagName('input');

        let mes2;
        if (inputs.length !== Object.keys(mes).length) {
            let newMes = {};
            Object.keys(inputs).forEach(i => {
                if (!mes.hasOwnProperty(inputs[i].name)) {
                    newMes = { ...newMes, [inputs[i].name]: { value: inputs[i].value, valid: !isNaN(inputs[i].value) } };
                }
            });
            setMes({ ...mes, ...newMes });
            mes2 = { ...mes, ...newMes };
        } else {
            mes2 = { ...mes };
        }

        let newMes2 = { ...mes2 };
        for (let i = 0; i < inputs.length; ++i) {
            let val = mes2[inputs[i].name].value;
            if (val.trim() == null || val.trim() === "" || val === " " || isNaN(val)) {
                newMes2 = { ...newMes2, [inputs[i].name]: { value: inputs[i].value, valid: false } };
            } else {
                newMes2 = { ...newMes2, [inputs[i].name]: { value: inputs[i].value, valid: true } };
            }
        }
        setMes({ ...mes2, ...newMes2 });

        let allMesValid = true;
        let checkMesObj = { ...mes2, ...newMes2 };
        if (Object.keys(checkMesObj).length === 0) allMesValid = false;
        Object.keys(checkMesObj).forEach(i => {
            if (!checkMesObj[i].valid) {
                allMesValid = false;
            }
        });

        let emailValid = true;
        if (email === "" || !ValidateEmail(email)) {
            emailValid = false;
            setEmailValid(false);
        } else {
            setEmailValid(true);
        }

        if (emailValid && allMesValid) {
            console.log("ready to go");
            let measurements = () => {
                var out = '';
                Object.keys(checkMesObj).forEach(i => {
                    out += i;
                    out += ': ';
                    out += checkMesObj[i].value + ' in';
                    out += '\n';
                });
                return out;
            };
            const body = {
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
                })
                .catch(error => console.log(error));
        } else {
            console.log("errors.");
        }
    };


    const [mes, setMes] = React.useState({});
    const handleMes = e => {
        setMes({ ...mes, [e.target.name]: { value: e.target.value, valid: !isNaN(e.target.value) } });
        console.log({ ...mes, [e.target.name]: { value: e.target.value, valid: !isNaN(e.target.value) } });
    };


    const fabricsRef = React.useRef();


    const [tab, setTab] = React.useState(0);

    const handleTab = (e, newTab) => {
        setTab(newTab);
    };

    React.useEffect(() => {
        const elms1 = document.querySelectorAll("a[href='/#about']");
        for (let i = 0; i < elms1.length; i++) {
            elms1[i].classList.remove('active');
        }
        const elms2 = document.querySelectorAll("a[href='/#services']");
        for (let i = 0; i < elms2.length; i++) {
            elms2[i].classList.add('active');
        }
        const elms3 = document.querySelectorAll("a[href='/#contact']");
        for (let i = 0; i < elms3.length; i++) {
            elms3[i].classList.remove('active');
        }
    });

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

            <Tabs
                value={tab}
                onChange={handleTab}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Gallery" />
                <Tab label="Order" />
            </Tabs>
            <TabPanel value={tab} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={tab} index={1}>
                <Container maxWidth="lg">

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
                                <Typography variant="h5" component="h1">My Order</Typography>
                                <form name="order" onSubmit={handleSubmit}>
                                    <input type="hidden" name="form-name" value="order" />
                                    <TextField ref={formEmailRef} label="Email" variant="outlined" type="email" name="email" onChange={handleEmailChange} className={classes.formItem} error={emailValid ? false : true} helperText={emailValid ? '' : 'Invalid email'} />
                                </form>
                                <div className={classes.myOrderFabrics} ref={fabricsRef}>
                                    {orderFabrics ?
                                        Object.keys(orderFabrics).map((fabric, i) => {
                                            const fabricObj = fabricsList.find(obj => {
                                                return obj.name === orderFabrics[fabric].split('__')[0]
                                            });
                                            return (
                                                <div key={i}>
                                                    <p>{fabricObj.name}</p>
                                                    <img
                                                        src={fabricObj.thumbnail}
                                                        alt={fabricObj.name}
                                                    />
                                                    <FormControl variant="outlined">
                                                        <FormHelperText>Nose to Ear</FormHelperText>
                                                        <OutlinedInput
                                                            endAdornment={<InputAdornment position="end">in</InputAdornment>}
                                                            labelWidth={0}
                                                            onChange={handleMes}
                                                            name={orderFabrics[fabric] + '__ear'}
                                                            error={mes.hasOwnProperty(orderFabrics[fabric] + '__ear') ? !mes[orderFabrics[fabric] + '__ear'].valid : false}
                                                        />
                                                    </FormControl>
                                                    {mes.hasOwnProperty(orderFabrics[fabric] + '__ear') ? (!mes[orderFabrics[fabric] + '__ear'].valid ? 'Invalid number' : '') : ''}

                                                    <FormControl variant="outlined">
                                                        <FormHelperText>Nose to Chin</FormHelperText>
                                                        <OutlinedInput
                                                            endAdornment={<InputAdornment position="end">in</InputAdornment>}
                                                            labelWidth={0}
                                                            onChange={handleMes}
                                                            name={orderFabrics[fabric] + '__chin'}
                                                            error={mes.hasOwnProperty(orderFabrics[fabric] + '__chin') ? !mes[orderFabrics[fabric] + '__chin'].valid : false}
                                                        />
                                                    </FormControl>
                                                    {mes.hasOwnProperty(orderFabrics[fabric] + '__chin') ? (!mes[orderFabrics[fabric] + '__chin'].valid ? 'Invalid number' : '') : ''}

                                                    <button onClick={() => removeOrderFabrics(orderFabrics[fabric])}>Remove</button>
                                                </div>
                                            );
                                        })
                                        :
                                        ''
                                    }
                                </div>
                                <Button variant="outlined" onClick={cancelOrder}>Cancel</Button>
                                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
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
                </Container>
            </TabPanel>
            <ContactDialog />
        </FabricsContext.Provider >
    );
}
 */