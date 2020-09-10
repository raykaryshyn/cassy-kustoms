import React from 'react';


import Service from './Service';
import Gallery from './Gallery';
import { Grid, makeStyles, Card, CardContent, Typography, TextField, Button } from '@material-ui/core';
import ContactDialog from './ContactDialog';



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
            name: 'Jungle Pink',
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
            padding: '16px 16px 24px 20px',
            [theme.breakpoints.down(900)]: {
                marginRight: 0,
                marginTop: 15,
                width: '100%'
            },
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
    }));
    const classes = useStyles();


    const [ordered, setOrdered] = React.useState(false);

    function encode(data) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

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

        if (nameValid && emailValid) {
            console.log("ready to go");

            const body = {
                'name': name,
                'email': email,
                'measurements': 'scrunchie order test...',
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
                .catch(error => { console.log(error); alert('error'); setOrdered('error'); });
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
                                    <li className="uli">$5 per scrunchie</li>
                                    <li className="uli">$3 - $8 shipping</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <div className={classes.myOrderResults}>
                        {!ordered && (<>
                            <Typography variant="h5" component="h2" className={classes.title}>My Order</Typography>
                            <div className={classes.myOrderForm}>
                                <div className={classes.myOrderInputs}>
                                </div>
                                <form name="order" onSubmit={handleSubmit}>
                                    <input type="hidden" name="form-name" value="order" />
                                    <div style={{ maxWidth: 600, fontSize: 14, margin: '10px 0 5px' }}>
                                        You will receive a request for payment via Paypal.
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
                                    You will receive a request for payment via Paypal.
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

                <Grid container spacing={2} className={classes.orderContainer}>
                    <Gallery urls={gallery} scrunchies metadata={metadata} />
                </Grid>
            </>
        } />
    );
}