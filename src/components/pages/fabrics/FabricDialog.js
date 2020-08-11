import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FabricDialog(props) {
  const name = props.fabric.name;
  const image = props.fabric.image;
  const limited = props.fabric.limited;
  const id = props.id;

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    document.querySelectorAll('.MuiDialog-container.MuiDialog-scrollBody').forEach(elm => {
      elm.scrollTo(0, 0);
    });
  };
  const handleClose = () => {
    setOpen(false);
    /* setLoad(false); */
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const useStyles = makeStyles((theme) => ({
    root: {
      width: 'calc(100% - 30px)',
      maxWidth: '960px !important',
      margin: '30px 15px',
    },
    title: {
      padding: '12px',
      '& .MuiTypography-root': {
        display: 'flex',
        alignItems: 'center',
        fontFamily: theme.typography.fontFamily,
        fontSize: '1.33rem',
        lineHeight: '1.75rem',
      },
    },
    header: {
      flex: 1,
      paddingLeft: '12px',
    },
    headerWrapper: {
      maxWidth: '90%',
      wordBreak: 'break-word',
      display: 'flex',
      alignItems: 'flex-start',
    },
    content: {
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height: 'auto',
      display: 'block',
      transition: theme.transitions.create('opacity', { duration: 500 }),
      opacity: 1,
    },
    spinnerWrapper: {
      padding: 10,
    },
    loader: {
      height: '400px',
    },
    button: {
      fontWeight: 600,
      padding: '6px 16px',

      '&:hover': {
        background: 'rgba(0,0,0,0.06)',
      }
    },

    limited: {
      background: theme.palette.error.main,
      color: 'white',
      padding: '5px 10px',
      borderRadius: '5px',
      fontFamily: theme.typography.fontFamily,
      fontSize: '0.8rem',
      lineHeight: '0.75rem',
      display: 'table',
      marginTop: '4px',
    },

    actionButton: {
      padding: '6px',
      '&:hover': {
        background: 'rgba(0,0,0,0.06)',
      }
    },

    number: {
      color: 'rgba(0, 0, 0, 0.5)',
      fontSize: '1.2rem',
      paddingRight: 10,
      display: 'block',
      wordBreak: 'keep-all',
    },
  }));
  const classes = useStyles();

  const [didLoad, setLoad] = React.useState(false);
  const style = didLoad ? {} : { opacity: 0 };
  const style2 = didLoad ? { flex: 1 } : { visibility: 'hidden' };
  return (
    <>
      <div onClick={() => handleClickOpen()}>{props.children}</div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll='body'
        TransitionComponent={Transition}
        fullWidth={true}
        maxWidth='md'
        classes={{ paper: classes.root }}
        keepMounted
      >
        <DialogTitle className={classes.title}>
          <span className={classes.header}>
            <span className={classes.headerWrapper}><span className={classes.number}>#{id}</span> {name}</span>
            {limited ?
              <div className={classes.limited}>Limited</div>
              : ''}
          </span>
          <IconButton
            edge="start"
            className={[classes.actionButton].join(' ')}
            color="inherit"
            onClick={handleClose}
            disableRipple
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers={false} className={classes.content}>
          <div style={style2}>
            <img src={image} alt="Turtle" className={classes.image}
              style={style} onLoad={() => setLoad(true)} />
          </div>
          {!didLoad ? <div className={classes.spinnerWrapper}><CircularProgress /></div> : ''}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={classes.button}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
