import React from 'react';

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

export default function ContactDialog() {
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
            [theme.breakpoints.down('xs')]: {
                right: 25,
                bottom: 25,
            },
            background: theme.palette.primary.main,
            color: '#fff',
            '&:hover': {
                background: theme.palette.primary.dark,
            },
        },
        title: {
            paddingLeft: 24,
            paddingTop: 24,
            paddingBottom: 10,
            '& .MuiTypography-root': {
                display: 'flex',
                alignItems: 'center',
                fontFamily: theme.typography.fontFamily,
                fontSize: '1.33rem',
                lineHeight: 1.43,
            },
        },
        header: {
            flex: 1,
        },
        headerWrapper: {
            display: 'block',
            maxWidth: '80%',
            wordBreak: 'break-all',
        },
        button: {
            fontWeight: 600,
            padding: '6px 16px',
        },
        formLayout: {
            display: 'flex',
            flexDirection: 'column',
        },
        formItem: {
            margin: '10px 0',
        },
    }));
    const classes = useStyles();

    function encode(data) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const [formState, setFormState] = React.useState({});
    const handleChange = e => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                ...formState
            })
        })
            .then(() => {
                console.log(formState);
            })
            .catch(error => alert(error));
    };

    return (
        <div>
            <Fab className={classes.fab} onClick={handleClickOpen}>
                <ModeCommentIcon />
            </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <form
                    name="contact"
                    onSubmit={handleSubmit}
                    id="contact-form"
                >
                    <DialogTitle id="form-dialog-title" className={classes.title}><span className={classes.header}><span className={classes.headerWrapper}>Contact</span></span></DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To contact me, please fill out the form below.
                        </DialogContentText>

                        <div className={classes.formLayout}>
                            <input type="hidden" name="form-name" value="contact" />
                            <p hidden>
                                <label>
                                    Don’t fill this out:{" "}
                                    <input name="bot-field" onChange={handleChange} />
                                </label>
                            </p>
                            <TextField label="Name" variant="outlined" type="text" name="name" onChange={handleChange} className={classes.formItem} />
                            <TextField label="Email" variant="outlined" type="email" name="email" onChange={handleChange} className={classes.formItem} />
                            <TextField label="Message" multiline rows={4} variant="outlined" name="message" onChange={handleChange} className={classes.formItem} />
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} className={classes.button} style={{ fontWeight: 400 }}>
                            Cancel
                        </Button>
                        <Button variant="contained" color="primary" type="submit" onClick={handleClose} className={classes.button}>
                            <SendIcon /> Send
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}