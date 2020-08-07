import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Skeleton from '@material-ui/lab/Skeleton';

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
    },
    image: {
      width: '100%',
      height: 'auto',
      display: 'block',
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
  const style = didLoad ? {} : { visibility: 'hidden' };

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
          {!didLoad ? <Skeleton animation="wave" variant="rect" className={classes.loader} /> : ''}
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
