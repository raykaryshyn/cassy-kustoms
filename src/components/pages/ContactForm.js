import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/Error';

import SendIcon from '@material-ui/icons/Send';
import { Typography } from '@material-ui/core';

export default function ContactDialog(props) {

    const useStyles = makeStyles((theme) => ({
        button: {
            '& .MuiButton-label': {
                fontFamily: theme.typography.fonts.header,
                letterSpacing: props.secondary ? 3 : 1,
                fontSize: props.secondary ? 18 : 16,
            },
            padding: '6px 16px',
            background: theme.palette.primary.dark2,
            '&:hover': {
                background: theme.palette.primary.dark3,
            },
        },
        formLayout: {
            display: 'flex',
            flexDirection: 'column',
        },
        formItem: {
            margin: '6px 0',
            '& .MuiInputBase-formControl': {
                backgroundColor: props.secondary ? 'rgba(255, 255, 255, 1)' : theme.palette.primary.light3,
                borderRadius: theme.shape.borderRadius,
                border: '1px solid ' + theme.palette.primary.light1,
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
            '& .MuiFormLabel-root': {
                color: props.secondary ? theme.palette.primary.light1 : theme.palette.primary.dark2,
                fontFamily: theme.typography.fonts.header,
                fontSize: props.secondary ? 18 : 16,
                letterSpacing: 1,
                '&.Mui-error': {
                    color: theme.palette.secondary.main,
                },
            },
            '& .MuiFormHelperText-root.Mui-error': {
                color: theme.palette.secondary.main,
                fontWeight: 500,
            },
        },
        sendIcon: {
            fontSize: '1.25rem',
            marginRight: '10px',
            marginLeft: '6px',
            opacity: 0.8,
            transform: 'rotate(-25deg) translateY(-4px)',
        },

        dialogPaper: {
            width: 'calc(100% - 30px)',
            margin: '30px 15px',
            maxWidth: '600px !important',
        },

        actionBar: {
            padding: props.secondary ? '8px 0 120px' : '0 24px 24px 0',
        },

        ending: {
            display: 'none',
            width: '100%',
            background: '#fff',
            border: props.secondary ? '1px solid ' + theme.palette.primary.light1 : 'none',
            borderRadius: props.secondary ? theme.shape.borderRadius : 0,
        },

        endingWrapper: {
            display: 'flex',
            flexDirection: 'row',
            [theme.breakpoints.down(510)]: {
                flexDirection: 'column',
            },
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
        },
        endingIcon: {
            fontSize: 70,
            borderRadius: '50%',
            padding: 10,
            margin: 30,
        },
        checkIcon: {
            background: theme.palette.primary.main,
            color: '#fff',
        },
        errorIcon: {
            background: theme.palette.secondary.main,
            color: '#fff',
        },
        endingTitle: {
            fontSize: 28,
            letterSpacing: 1,
            [theme.breakpoints.down(510)]: {
                textAlign: 'center',
            },
        },
        endingText: {
            margin: '0 30px 0 0',
            [theme.breakpoints.down(510)]: {
                margin: '0 30px 30px',
                textAlign: 'center',
            },
        },
        content: {
            '&:first-child': {
                paddingTop: 0,
            },
            padding: props.secondary ? 0 : '0 24px 8px',
        },
        button2: {
            background: '#e7e7e7',
            color: '#333',
            '&:hover': {
                background: '#ccc',
            },
        },
        actionBar2: {
            display: 'none',
        },
        buttonCancel: {
            background: 'none',
            '&:hover': {
                background: '#e7e7e7',
            },
        },
    }));
    const classes = useStyles();

    function encode(data) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    function ValidateEmail(emailAddr) {
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailAddr)) {
            return (true)
        }
        return (false)
    }

    const [formState, setFormState] = React.useState({});
    const handleChange = e => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };
    const [formValid, setFormValid] = React.useState({ name: true, email: true, message: true });
    const updateFormValid = (id, value) => {
        setFormValid(prevState => ({ ...prevState, [id]: value }));
        console.log(id, value);
    };
    const handleSubmit = e => {
        const form = 'contact';
        var formName = formState.hasOwnProperty('name') ? formState['name'] : '';
        var formEmail = formState.hasOwnProperty('email') ? formState['email'] : '';
        var formMessage = formState.hasOwnProperty('message') ? formState['message'] : '';

        let formFlag = true;
        if (formName.trim() == null || formName.trim() === "" || formName === " ") {
            console.log('formName error');
            formFlag = false;
            updateFormValid('name', false);
        } else {
            updateFormValid('name', true);
        }
        if (formEmail === "" || !ValidateEmail(formEmail)) {
            console.log('formEmail error');
            formFlag = false;
            updateFormValid('email', false);
        } else {
            updateFormValid('email', true);
        }
        if (formMessage.trim() == null || formMessage.trim() === "" || formMessage === " ") {
            console.log('formMessage error');
            formFlag = false;
            updateFormValid('message', false);
        } else {
            updateFormValid('message', true);
        }

        if (formFlag) {
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({
                    "form-name": form,
                    ...formState
                })
            })
                .then(() => {
                    console.log(formState);
                    setFormState({});
                    document.getElementById('formRef').style.display = 'none';
                    document.getElementById('thanksRef').style.display = 'block';
                    if (!props.secondary) {
                        document.getElementById('closeBtn').style.display = 'flex';
                    }
                })
                .catch(error => {
                    console.log(error);
                    document.getElementById('thanksRef').style.display = 'none';
                    document.getElementById('failRef').style.display = 'block';
                });
        }
    };

    const formNameRef = React.createRef();
    const formEmailRef = React.createRef();
    const formMessageRef = React.createRef();

    return (
        <div className={props.className}>
            <div id='formRef'>
                <DialogContent dividers={false} className={classes.content}>
                    <form name="contact" onSubmit={handleSubmit}>
                        <div className={classes.formLayout}>
                            <input type="hidden" name="form-name" value="contact" />
                            <TextField ref={formNameRef} label="Name" variant="filled" type="text" name="name" onChange={handleChange} className={classes.formItem} error={formValid['name'] ? false : true} helperText={formValid['name'] ? '' : 'Invalid name'} />
                            <TextField ref={formEmailRef} label="Email" variant="filled" type="email" name="email" onChange={handleChange} className={classes.formItem} error={formValid['email'] ? false : true} helperText={formValid['email'] ? '' : 'Invalid email'} />
                            <TextField ref={formMessageRef} label="Message" multiline rows={6} variant="filled" name="message" onChange={handleChange} className={classes.formItem} error={formValid['message'] ? false : true} helperText={formValid['message'] ? '' : 'Invalid message'} />
                        </div>
                    </form>
                </DialogContent>
                <DialogActions className={classes.actionBar}>
                    {!props.secondary ?
                        <Button type="button" onClick={props.closeFunc} className={[classes.button, classes.buttonCancel].join(' ')} style={{ fontWeight: 400 }}>
                            Cancel
                        </Button> : ''
                    }
                    <Button variant="contained" color="primary" type="submit" className={classes.button} onClick={handleSubmit}>
                        <SendIcon className={classes.sendIcon} /> Send
                    </Button>
                </DialogActions>
            </div>

            <div className={[classes.ending, classes.thanks].join(' ')} id='thanksRef'>
                <div className={classes.endingWrapper}>
                    <CheckIcon className={[classes.endingIcon, classes.checkIcon].join(' ')} />
                    <div>
                        <Typography component="h3" variant="h3" className={classes.endingTitle}>Thanks!</Typography>
                        <p className={classes.endingText}>I will get back to you as soon as possible.</p>
                    </div>
                </div>
            </div>
            <div className={[classes.ending, classes.fail].join(' ')} id='failRef'>
                <div className={classes.endingWrapper}>
                    <ErrorIcon className={[classes.endingIcon, classes.errorIcon].join(' ')} />
                    <div>
                        <Typography component="h3" variant="h3" className={classes.endingTitle}>Sorry!</Typography>
                        <p className={classes.endingText}>Your message was not able to be sent at this time.</p>
                    </div>
                </div>
            </div>

            <DialogActions className={[classes.actionBar, classes.actionBar2].join(' ')} id="closeBtn">
                <Button color="primary" type="button" className={[classes.button, classes.button2].join(' ')} onClick={props.closeFunc}>
                    Close
                </Button>
            </DialogActions>
        </div>
    );
}