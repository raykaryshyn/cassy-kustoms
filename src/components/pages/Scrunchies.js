import React from 'react';


import Service from './Service';
import Gallery from './Gallery';
import { Grid, makeStyles, Card, CardContent, Typography, TextField, Button, FormControl, InputLabel, Select } from '@material-ui/core';
import ContactDialog from './ContactDialog';
import { Add, DeleteOutline } from '@material-ui/icons';



export default function Scrunchies() {
    const metadata = [
        {
            name: 'Black',
            material: 'Velour',
        },
        {
            name: 'Orange',
            material: 'Felt',
        },
        {
            name: 'White',
            material: 'Silk',
        },
        {
            name: 'Light Blue',
            material: 'Felt',
        },
        {
            name: 'Grey',
            material: 'Velour',
        },
        {
            name: 'Mauve',
            material: 'Velour',
        },
        {
            name: 'Off-White',
            material: 'Cotton',
        },
        {
            name: 'Blue',
            material: 'Silk',
        },
        {
            name: 'Black & White',
            material: '',
        },
        {
            name: 'Mauve Design',
            material: '',
        },
        {
            name: 'Pale Yellow',
            material: 'Cotton',
        },
        {
            name: 'Teal Floral',
            material: 'Cotton',
        },
        {
            name: 'Dark Blue',
            material: 'Satin',
        },
        {
            name: 'Pink & Brown',
            material: 'Felt',
        },
        {
            name: 'Light Blue',
            material: 'Satin',
        },
        {
            name: 'Blue Gingham',
            material: 'Cotton',
        },
        {
            name: 'Olive Green',
            material: 'Silk',
        },
        {
            name: 'Multicolor Stripes',
            material: 'Cotton',
        },
        {
            name: 'Blue & White',
            material: '',
        },
        {
            name: 'Blue Floral',
            material: '',
        },
        {
            name: 'Starry Night',
            material: '',
        },
        {
            name: 'Neutral Stripes',
            material: '',
        },
        {
            name: 'Flower Diamonds',
            material: '',
        },
        {
            name: 'Jungle Floral',
            material: 'Cotton',
        },
        {
            name: 'Owl Brown',
            material: '',
        },
        {
            name: 'Pink Floral',
            material: '',
        },
        {
            name: 'Lizards',
            material: 'Cotton',
        },
        {
            name: 'Fuzzy Green',
            material: '',
        },
        {
            name: 'Mauve Floral',
            material: '',
        },
        {
            name: 'Pink & Grey',
            material: '',
        },
        {
            name: 'Rose Pattern',
            material: '',
        },
        {
            name: 'Tinker Bell Green',
            material: 'Cotton',
        },
    ];
    const gallery = Array.from({ length: 32 }, (_, i) => i + 1).reverse().map(x => (
        {
            thumb: `/gallery/scrunchie${x}-thumbnail.jpg`,
            main: `/gallery/scrunchie${x}.jpg`,
        }
    ));


    const useStyles = makeStyles((theme) => ({
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
        contactLink: {
            color: theme.palette.primary.main,
            textDecoration: 'underline',
            display: 'inline-block',
            cursor: 'pointer',
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
        nameInput: {
            marginRight: 12,
        },


        orderContainer: {
            marginTop: 50,
            marginBottom: 175,
        },

        myOrderForm: {
            marginTop: 15,
        },
        myOrderInputs: {
            paddingBottom: 55,
            '& .scrunchie-input-group': {
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                marginBottom: 13,
            },
        },

        formControl: {
            '&.selection': {
                marginRight: 9,
                marginBottom: 9.5,
            },
        },

        times: {
            fontSize: 21,
            opacity: 0.75,
            marginRight: 9,
        },

        quantity: {
            maxWidth: 86,
        },

        add: {
            display: 'inline-flex',
            alignItems: 'center',
            cursor: 'pointer',
            fontSize: 24,
            '& svg': {
                background: theme.palette.primary.main,
                borderRadius: '50%',
                color: 'white',
                width: '1.55em',
                height: '1.55em',
                marginRight: 8,
                padding: 3,
                transition: theme.transitions.create('all', { duration: 200 }),
            },
            color: theme.palette.primary.dark3,
            fontFamily: theme.typography.fonts.header,
            textTransform: 'uppercase',
            transition: theme.transitions.create('all', { duration: 200 }),
            [theme.breakpoints.up(600)]: {
                '&:hover': {
                    color: theme.palette.primary.dark1,
                    '& svg': {
                        boxShadow: `0 0 0 3.5px ${theme.palette.primary.light2}`,
                    },
                },
            },
            [theme.breakpoints.down(450)]: {
                width: '100%',
                justifyContent: 'center',
            },
        },
        remove: {
            fontSize: 13.5,
            border: `1px solid ${theme.palette.secondary.main}`,
            background: '#fff',
            color: theme.palette.secondary.main,
            outline: 'none',
            cursor: 'pointer',
            borderRadius: theme.shape.borderRadius,
            display: 'flex',
            alignItems: 'center',
            marginBottom: 9.5,
            padding: '2px 13px 2px 10px',
            transition: theme.transitions.create('all'),
            fontWeight: 500,
            '&:hover': {
                background: theme.palette.secondary.main,
                color: '#fff',
            },
            '& svg': {
                height: '0.95em',
                width: '0.95em',
                marginRight: 3,
            },
            marginLeft: 9,
        },
    }));
    const classes = useStyles();


    const [ordered, setOrdered] = React.useState(false);

    /* function encode(data) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    } */

    const handleSubmit = () => {
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

        const wants = document.getElementsByClassName('scrunchie-input-group');
        /* console.log(select); */
        let select2 = {};
        let allWantsValid = true;
        [...wants].forEach(a => {
            const selectValue = a.querySelector('.selection .MuiSelect-root').value;
            const selectValid = !(selectValue.trim() == null || selectValue.trim() === "" || selectValue === " " || isNaN(selectValue));
            /* console.log(selectValue, selectValid); */

            const quantityValue = a.querySelector('.MuiInputBase-root input').value;
            const quantityValid = !(quantityValue.trim() == null || quantityValue.trim() === "" || quantityValue === " " || isNaN(quantityValue) || parseFloat(quantityValue) <= 0);
            /* console.log(quantityValue, quantityValid); */

            const id = a.querySelector('.MuiInputBase-root input').id.split('-')[2];

            select2 = {
                ...select2,
                [id]: {
                    num: selectValue,
                    quantity: quantityValue,
                    valid: { select: selectValid, quantity: quantityValid },
                },
            };
            if (!selectValid || !quantityValid) allWantsValid = false;
        });
        handleSelectState(select2);

        if (nameValid && emailValid && allWantsValid) {
            console.log("ready to go");

            /* const message = () => {
                var text = '';
                Object.keys(select).forEach(i => {
                    text += '#' + (parseInt(select[i].num) + 1) + ' ' + metadata[select[i].num].name + ': ' + select2[i].quantity + '\n';
                });
                return (text);
            };

            const body = {
                'name': name,
                'email': email,
                'measurements': message(),
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
                    setOrdered('ok');
                })
                .catch(error => { console.log(error); alert('error'); */ setOrdered('error'); /* }); */
        } else {
            console.log("errors.");
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


    const [select, handleSelectState] = React.useState({
        0: {
            num: '',
            valid: { select: true, quantity: true },
        },
    });
    const handleSelectChange = (i, e) => {
        console.log({
            ...select,
            [i]: {
                num: e.target.value,
                valid: { select: true, quantity: true },
            },
        });
        handleSelectState({
            ...select,
            [i]: {
                num: e.target.value,
                valid: { select: true, quantity: true },
            },
        });
    };

    const handleAdd = () => {
        handleSelectState(select => {
            console.log(select);
            let length = Object.keys(select).length;
            while (select.hasOwnProperty(length)) {
                length++;
            }
            console.log(length);
            return ({
                ...select,
                [length]: {
                    num: '',
                    valid: { select: true, quantity: true },
                },
            })
        });
    };

    const handleRemove = (i) => {
        handleSelectState(current => {
            if (Object.keys(current).length > 1) {
                const n = { ...current };
                if (n[i]) delete n[i];
                console.log(n);
                return (
                    n
                );
            }
        });
    };

    return (
        <Service title="Scrunchies" gallery={gallery} order={
            <>
                <div className={classes.myOrder}>
                    <div className={classes.cardWrapper}>
                        <Card className={classes.card} variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="h2" className={classes.title}>
                                    Pricing
                                </Typography>
                                <ul className={classes.cardContent}>
                                    <li className="uli">$1 per scrunchie</li>
                                    <li className="uli">$2 shipping</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <div className={classes.myOrderResults}>
                        {!ordered && (<>
                            <Typography variant="h5" component="h2" className={classes.title}>My Order</Typography>
                            <div className={classes.myOrderForm}>
                                <div className={classes.myOrderInputs} id="scrunchie-inputs">
                                    {Object.keys(select).map((i) => (
                                        <React.Fragment key={i}>
                                            {select[i] !== undefined &&
                                                <div className="scrunchie-input-group" key={i}>
                                                    <FormControl variant="outlined" className={[classes.formControl, 'selection'].join(' ')} error={select[i].valid.select ? false : true}>
                                                        <InputLabel htmlFor={"scrunchie-selection-" + i}>Selection</InputLabel>
                                                        <Select
                                                            native
                                                            value={select[i].num}
                                                            onChange={(e) => handleSelectChange(i, e)}
                                                            label="Schruncie"
                                                            inputProps={{
                                                                name: 'scrunchie-selection-' + i,
                                                                id: 'scrunchie-selection-' + i,
                                                            }}
                                                        >
                                                            <option aria-label="Select a scrunchie" value="" disabled></option>
                                                            {Object.keys(metadata).map((key) => (
                                                                <option value={key} key={key}>#{parseInt(key) + 1} - {metadata[key].name}</option>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10, }}>
                                                        <span className={classes.times}>x</span>
                                                        <TextField className={classes.quantity} id={"scrunchie-quantity-" + i} label="Quantity" variant="outlined" defaultValue="1" type="number" inputProps={{ min: 1, step: 1 }} error={select[i].valid.quantity ? false : true} />
                                                    </div>
                                                    {Object.keys(select).length > 1 && <button className={classes.remove} onClick={() => handleRemove(i)}><DeleteOutline /> <span>Remove</span></button>}
                                                </div>
                                            }
                                        </React.Fragment>
                                    ))}
                                    {/* <div className="scrunchie-input-group">
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <InputLabel htmlFor="scrunchie-selection-0">Selection</InputLabel>
                                            <Select
                                                native
                                                value={select[0]}
                                                onChange={(e) => handleSelectChange(0, e)}
                                                label="Schruncie"
                                                inputProps={{
                                                    name: 'scrunchie-selection-0',
                                                    id: 'scrunchie-selection-0',
                                                }}
                                            >
                                                <option aria-label="Select a scrunchie" value=""></option>
                                                {Object.keys(metadata).map((key) => (
                                                    <option value={key} key={key}>#{parseInt(key) + 1} - {metadata[key].name}</option>
                                                ))}
                                            </Select>
                                        </FormControl>
                                        <span>x</span>
                                        <TextField id="scrunchie-quantity-0" label="Quantity" variant="outlined" />
                                    </div>
                                    <div className="scrunchie-input-group">
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <InputLabel htmlFor="scrunchie-selection-1">Selection</InputLabel>
                                            <Select
                                                native
                                                value={select[1]}
                                                onChange={(e) => handleSelectChange(1, e)}
                                                label="Schruncie"
                                                inputProps={{
                                                    name: 'scrunchie-selection-1',
                                                    id: 'scrunchie-selection-1',
                                                }}
                                            >
                                                <option aria-label="Select a scrunchie" value=""></option>
                                                {Object.keys(metadata).map((key) => (
                                                    <option value={key} key={key}>#{parseInt(key) + 1} - {metadata[key].name}</option>
                                                ))}
                                            </Select>
                                        </FormControl>
                                        <span>x</span>
                                        <TextField id="scrunchie-quantity-1" label="Quantity" variant="outlined" />
                                    </div> */}
                                    <div onClick={handleAdd} className={classes.add}><Add /><span>Add</span></div>
                                </div>
                                <form name="order" onSubmit={handleSubmit}>
                                    <input type="hidden" name="form-name" value="order" />
                                    <div style={{ maxWidth: 600, fontSize: 14, margin: '10px 0 5px' }}>
                                        You will receive a request for payment via PayPal.
                                                To arrange a different form of payment, <ContactDialog className={classes.contactLink}><span>contact me</span></ContactDialog>.
                                                Payment upon pickup or delivery available for locals.
                                        </div>
                                    <TextField id="formNameRef" label={nameValid ? "Name" : 'Name (Invalid)'} variant="outlined" type="text" name="name" className={[classes.formItem, classes.nameInput].join(' ')} error={nameValid ? false : true} style={{ width: '100%', maxWidth: 250 }} />
                                    <TextField ref={formEmailRef} id="formEmailRef" label={emailValid ? "Email" : 'Email (Invalid)'} variant="outlined" type="email" name="email" className={classes.formItem} error={emailValid ? false : true} style={{ width: '100%', maxWidth: 250 }} />
                                </form>
                                <Button variant="contained" onClick={handleSubmit} className={classes.submitButton}>Submit</Button>
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
                                    {/* Please try again or <ContactDialog className={classes.contactLink}><span>contact me</span></ContactDialog> with your order. Thank you. */}
                                    Please try emailing me at <a href="mailto:cassykustoms@gmail.com" className={classes.contactLink}>cassykustoms@gmail.com</a> instead. Thank you.
                                </p>
                            </>
                        )}
                    </div>
                </ div>

                <Grid container spacing={2} className={classes.orderContainer}>
                    <Gallery urls={gallery} scrunchies metadata={metadata} />
                </Grid>
            </>
        } />
    );
}