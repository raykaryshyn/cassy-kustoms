import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';



export default function Gallery(props) {
    const useStyles = makeStyles((theme) => ({
        galleryItemWrapper: {
            position: 'relative',
            paddingTop: '75%',
            borderRadius: theme.shape.borderRadius,
            /* overflow: 'hidden', */
            [theme.breakpoints.up('md')]: {
                transition: theme.transitions.create('transform'),
                '&:hover': {
                    transform: 'scale(0.98)',
                },
            },
            [theme.breakpoints.down('md')]: {
                transition: theme.transitions.create('transform', { duration: 66 }),
                '&:active': {
                    transform: 'scale(0.966)',
                },
            },
            cursor: 'pointer',
        },
        galleryItem: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundSize: 'cover',
            backgroundColor: '#ccc',
            borderRadius: theme.shape.borderRadius,
            border: '2px solid white',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        },


        modal: {
            overflowX: 'hidden',
            overflowY: 'auto',
            '& .MuiBackdrop-root': {
                background: 'rgba(0,0,0,0.9)',
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
            padding: '64px 31px 0',
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
                maxHeight: 'calc(100vh - 144px)',
                transition: theme.transitions.create('opacity', { duration: 500 }),
                opacity: 1,
            },
        },
        closeX: {
            position: 'absolute',
            top: 0,
            /* left: '50%',
            transform: 'translateX(calc(-50% - 16px))', */
            right: 0,
            backgroundColor: theme.palette.background.paper,
            color: '#222',
            transition: theme.transitions.create('opacity'),
            '&:hover': {
                backgroundColor: theme.palette.background.paper,
                color: '#222',
                opacity: 0.8,
            },
            margin: 15,
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
        arrowButton: {
            color: '#fff',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(calc(-50% + 32px))',
            width: '30px',
            display: 'flex',
            justifyContent: 'center',
            height: '100px',
            alignItems: 'center',
            background: 'rgba(0,0,0,1)',
            transition: theme.transitions.create('opacity'),
            '&:hover': {
                background: 'rgba(0,0,0,1)',
            },
            boxShadow: theme.shadows[5],
            '& svg': {
                width: '2em',
                height: '2em',
            },
            '&.left': {
                left: 0,
            },
            '&.right': {
                right: 0,
            },
            cursor: 'pointer',
            padding: 0,
            borderRadius: 0,
            '&.inactive': {
                opacity: 0.25,
                cursor: 'unset',
            },
            zIndex: 0,
        },
    }));
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setTimeout(() => {
            setLoad(false);
        }, 500);
    };

    const [didLoad, setLoad] = React.useState(false);
    const style = didLoad ? {} : { opacity: 0 };
    const style2 = didLoad ? { flex: 1 } : { visibility: 'hidden' };

    const handleCardClick = (i) => {
        handleOpen();
        setImgNum(i);
    };

    const lastSlide = () => {
        if (imgNum > 0) {
            if (props.urls[imgNum].main !== props.urls[imgNum - 1].main) setLoad(false);
            setImgNum(imgNum - 1);
        }
    };
    const nextSlide = () => {
        if (imgNum < props.urls.length - 1) {
            if (props.urls[imgNum].main !== props.urls[imgNum + 1].main) setLoad(false);
            setImgNum(imgNum + 1);
        }
    };

    const [imgNum, setImgNum] = React.useState(0);


    // React.useEffect(() => {
    //     document.addEventListener('touchstart', handleTouchStart, false);
    //     document.addEventListener('touchmove', handleTouchMove, false);

    //     var xDown = null;
    //     var yDown = null;

    //     function getTouches(evt) {
    //         return evt.touches ||             // browser API
    //             evt.originalEvent.touches; // jQuery
    //     }

    //     function handleTouchStart(evt) {
    //         const firstTouch = getTouches(evt)[0];
    //         xDown = firstTouch.clientX;
    //         yDown = firstTouch.clientY;
    //     };

    //     function handleTouchMove(evt) {
    //         if (!xDown || !yDown) {
    //             return;
    //         }

    //         var xUp = evt.touches[0].clientX;
    //         var yUp = evt.touches[0].clientY;

    //         var xDiff = xDown - xUp;
    //         var yDiff = yDown - yUp;

    //         if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
    //             if (xDiff > 0) {
    //                 console.log('left');
    //                 nextSlide();
    //             } else {
    //                 console.log('right');
    //                 lastSlide();
    //             }
    //         } else {
    //             if (yDiff > 0) {
    //                 /* up swipe */
    //             } else {
    //                 /* down swipe */
    //                 handleClose();
    //             }
    //         }
    //         /* reset values */
    //         xDown = null;
    //         yDown = null;
    //     };
    // });

    React.useLayoutEffect(() => {
        //document.getElementsByClassName('makeStyles-paperContainer-176')[0].getBoundingClientRect().height - parseFloat(window.getComputedStyle(document.getElementsByClassName('makeStyles-paperContainer-176')[0]).getPropertyValue('padding-top'))

        const handleResize = () => {
            const container = document.getElementById('galleryContainerRef');
            const image = document.getElementById('galleryImageRef');
            if (container && image) {
                const height = container.getBoundingClientRect().height - parseFloat(window.getComputedStyle(container).getPropertyValue('padding-top'));
                const buffer = 15;
                image.style.maxHeight = (height - buffer) + 'px';
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return _ => {
            window.removeEventListener('resize', handleResize);
        }
    });

    return (
        <>
            {props.urls.map((url, i) => {
                return (
                    <Grid item xs={6} sm={4} md={3} key={i}>
                        <div className={classes.galleryItemWrapper}><div style={{ backgroundImage: `url(${url.thumb})` }} className={classes.galleryItem} onClick={() => handleCardClick(i)}></div></div>
                    </Grid>
                );
            })}
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
                    <div className={classes.paperContainer} id='galleryContainerRef'>
                        <IconButton aria-label="delete" className={classes.closeX} onClick={handleClose} centerRipple={false}>
                            <CloseIcon />
                        </IconButton>
                        <div className={classes.paper} style={style2}>
                            <img src={props.urls[imgNum].main} alt="Modal Content" onLoad={() => setLoad(true)} style={style} id="galleryImageRef" />
                        </div>
                        {!didLoad ? <div className={classes.spinnerWrapper}><CircularProgress /></div> : ''}
                        <IconButton className={[classes.arrowButton, 'left', imgNum === 0 ? 'inactive' : ''].join(' ')} centerRipple={false} onClick={lastSlide} disableRipple={imgNum === 0 ? true : false}>
                            <ArrowLeftIcon />
                        </IconButton>
                        <IconButton className={[classes.arrowButton, 'right', imgNum === props.urls.length - 1 ? 'inactive' : ''].join(' ')} centerRipple={false} onClick={nextSlide} disableRipple={imgNum === props.urls.length - 1 ? true : false}>
                            <ArrowRightIcon />
                        </IconButton>
                    </div>
                </Fade>
            </Modal>
        </>
    );
}