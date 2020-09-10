import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import ModeCommentIcon from '@material-ui/icons/ModeComment';

import ContactForm from './ContactForm';

export default function ContactDialog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const useStyles = makeStyles((theme) => ({
        fab: {
            position: 'fixed',
            right: 35,
            bottom: 35,
            [theme.breakpoints.down('md')]: {
                right: 25,
                bottom: 25,
            },
            [theme.breakpoints.down('xs')]: {
                right: 20,
                bottom: 20,
            },
            background: theme.palette.secondary.main,
            color: '#fff',
            '&:hover': {
                background: theme.palette.secondary.main,
            },
            zIndex: 2,
        },
        fabIcon: {
            fontSize: '1.8rem',
        },
        title: {
            paddingBottom: 0,
            '& .MuiTypography-root': {
                display: 'flex',
                alignItems: 'center',
                fontFamily: theme.typography.fontFamily,
                fontSize: '1.33rem',
                lineHeight: 1.43,
                textTransform: 'none',
            },
        },
        header: {
            flex: 1,
        },
        headerWrapper: {
            display: 'block',
            maxWidth: '80%',
            wordBreak: 'break-word',
        },
        text: {
            paddingLeft: 24,
            fontSize: '0.9rem',
        },
        button: {
            '& .MuiButton-label': {
                fontWeight: 500,
            },
            padding: '6px 16px',
        },
        formLayout: {
            display: 'flex',
            flexDirection: 'column',
        },
        formItem: {
            margin: '6px 0',
            '& .MuiInputBase-formControl': {
                backgroundColor: 'rgba(0, 0, 0, 0.07)',
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
        sendIcon: {
            fontSize: '1.25rem',
            marginRight: '8px',
        },
        content: {
            paddingTop: 0,
        },

        dialogPaper: {
            width: 'calc(100% - 30px)',
            margin: '30px 15px',
            maxWidth: '600px !important',
        },
    }));
    const classes = useStyles();


    return (
        <>
            {props.children ?
                <div onClick={handleClickOpen} className={props.className} style={props.style}>
                    {props.children}
                </div>
                :
                <Fab className={classes.fab} onClick={handleClickOpen}>
                    <ModeCommentIcon className={classes.fabIcon} />
                </Fab>
            }

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" scroll='body' fullWidth={true} maxWidth='sm' classes={{ paper: classes.dialogPaper }}>

                <DialogTitle id="form-dialog-title" className={classes.title}><span className={classes.header}><span className={classes.headerWrapper}>Contact</span></span></DialogTitle>
                <DialogContentText className={classes.text + ' ' + classes.header}>
                    <span className={classes.headerWrapper}>
                        Please fill out the form below to get in touch with me.
                    </span>
                </DialogContentText>
                <ContactForm closeFunc={handleClose} />
            </Dialog>

        </>
    );
}

/* import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import ModeCommentIcon from '@material-ui/icons/ModeComment';

import SendIcon from '@material-ui/icons/Send';

export default function ContactDialog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setFormValid({ name: true, email: true, message: true });
    };

    const useStyles = makeStyles((theme) => ({
        fab: {
            position: 'fixed',
            right: 35,
            bottom: 35,
            [theme.breakpoints.down('md')]: {
                right: 25,
                bottom: 25,
            },
            [theme.breakpoints.down('xs')]: {
                right: 20,
                bottom: 20,
            },
            background: theme.palette.secondary.main,
            color: '#fff',
            '&:hover': {
                background: theme.palette.secondary.main,
            },
            zIndex: 2,
        },
        fabIcon: {
            fontSize: '1.8rem',
        },
        title: {
            paddingBottom: 0,
            '& .MuiTypography-root': {
                display: 'flex',
                alignItems: 'center',
                fontFamily: theme.typography.fontFamily,
                fontSize: '1.33rem',
                lineHeight: 1.43,
                textTransform: 'none',
            },
        },
        header: {
            flex: 1,
        },
        headerWrapper: {
            display: 'block',
            maxWidth: '80%',
            wordBreak: 'break-word',
        },
        text: {
            paddingLeft: 24,
            fontSize: '0.9rem',
        },
        button: {
            '& .MuiButton-label': {
                fontWeight: 500,
            },
            padding: '6px 16px',
        },
        formLayout: {
            display: 'flex',
            flexDirection: 'column',
        },
        formItem: {
            margin: '6px 0',
            '& .MuiInputBase-formControl': {
                backgroundColor: 'rgba(0, 0, 0, 0.07)',
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
        sendIcon: {
            fontSize: '1.25rem',
            marginRight: '8px',
        },
        content: {
            paddingTop: 0,
        },

        dialogPaper: {
            width: 'calc(100% - 30px)',
            margin: '30px 15px',
            maxWidth: '600px !important',
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
                    handleClose();
                    setFormState({});
                })
                .catch(error => console.log(error));
        }
    };

    const formNameRef = React.createRef();
    const formEmailRef = React.createRef();
    const formMessageRef = React.createRef();

    return (
        <>
            {props.children ?
                <div onClick={handleClickOpen} className={props.className}>
                    {props.children}
                </div>
                :
                <Fab className={classes.fab} onClick={handleClickOpen}>
                    <ModeCommentIcon className={classes.fabIcon} />
                </Fab>
            }

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" scroll='body' fullWidth={true} maxWidth='sm' classes={{ paper: classes.dialogPaper }}>

                <DialogTitle id="form-dialog-title" className={classes.title}><span className={classes.header}><span className={classes.headerWrapper}>Contact</span></span></DialogTitle>
                <DialogContentText className={classes.text + ' ' + classes.header}>
                    <span className={classes.headerWrapper}>
                        Please fill out the form below to get in touch with me.
                    </span>
                </DialogContentText>
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
                <DialogActions>
                    <Button type="button" onClick={handleClose} className={classes.button} style={{ fontWeight: 400 }}>
                        Cancel
                    </Button>
                    <Button variant="contained" color="primary" type="submit" className={classes.button} onClick={handleSubmit}>
                        <SendIcon className={classes.sendIcon} /> Send
                    </Button>
                </DialogActions>
            </Dialog>

        </>
    );
} */