import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';



export default function GalleryModal(props) {
    const useStyles = makeStyles((theme) => ({
        modal: {
            overflowX: 'hidden',
            overflowY: 'auto',
            '& .MuiBackdrop-root': {
                background: 'rgba(0,0,0,0.8)',
            }
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
            padding: '66px 10px 0',
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
                marginBottom: 10,
                boxShadow: theme.shadows[5],
                width: 'auto',
                height: 'auto',
                /* maxHeight: '100%', */
                maxWidth: '100%',
                maxHeight: 'calc(100vh - 90px)',
            },
        },
        closeX: {
            position: 'fixed',
            top: 0,
            left: '50%',
            transform: 'translateX(calc(-50% - 16px))',
            backgroundColor: theme.palette.background.paper,
            color: '#222',
            '&:hover': {
                backgroundColor: theme.palette.background.paper,
                color: '#222',
            },
            margin: 15,
            padding: 8,
            boxShadow: theme.shadows[5],
        },
        spinnerWrapper: {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            color: '#fff',
            '& .MuiCircularProgress-root': {
                color: '#fff',
            },
        },
    }));
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [didLoad, setLoad] = React.useState(false);
    const style = didLoad ? {} : { opacity: 0 };
    const style2 = didLoad ? { flex: 1 } : { visibility: 'hidden' };
    return (
        <>
            <div style={{ backgroundImage: `url(${props.url.thumb})` }} className={props.className} onClick={handleOpen}></div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className={classes.modal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paperContainer}>
                        <div className={classes.paper} style={style2}>
                            <img src={props.url.main} alt="Modal Content" onLoad={() => setLoad(true)} style={style} />
                        </div>
                        {!didLoad ? <div className={classes.spinnerWrapper}><CircularProgress /></div> : ''}
                        <IconButton aria-label="delete" className={classes.closeX} onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                </Fade>
            </Modal>
        </>
    );
}