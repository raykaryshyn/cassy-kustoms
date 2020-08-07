import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CircularProgress from '@material-ui/core/CircularProgress';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FabricDialog(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setLoad(false);
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
    title: {
      '& .MuiTypography-root': {
        fontFamily: theme.typography.fontFamily,
        fontSize: '1.33rem',
        lineHeight: 1.43,
      },
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
      transition: theme.transitions.create('opacity'),
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
      padding: '6px 18px',
    },
  }));
  const classes = useStyles();

  const [didLoad, setLoad] = React.useState(false);
  console.log(didLoad);
  const style = didLoad ? {} : { opacity: 0, width: 0 };

  return (
    <div>
      <div onClick={() => handleClickOpen()}>{props.children}</div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll='body'
        TransitionComponent={Transition}
        fullWidth={true}
        maxWidth='md'
      >
        <DialogTitle className={classes.title}>Subscribe</DialogTitle>
        <DialogContent dividers={false} className={classes.content}>
          <img src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg" alt="Turtle" className={classes.image}
            style={style} onLoad={() => setLoad(true)} />
          {!didLoad ? <div className={classes.spinnerWrapper}><CircularProgress /></div> : ''}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={classes.button}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
