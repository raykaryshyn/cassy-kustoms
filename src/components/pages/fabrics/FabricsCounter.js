import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import fabricsList from './fabricsList';
import { FabricsContext } from './FabricsContext';
import { makeStyles } from '@material-ui/core/styles';

export default function FabricsCounter(props) {
    const context = React.useContext(FabricsContext).context;
    const gridView = context.gridView;
    const orderFabrics = context.orderFabrics;
    const addOrderFabrics = context.addOrderFabrics;
    const removeOrderFabrics = context.removeOrderFabrics;

    const name = fabricsList[props.id].name;

    /* const amt = orderFabrics[name] ? orderFabrics[name] : 0; */
    var amt = 0;
    for (const f in orderFabrics) {
        if (f.split('__')[0] === name) {
            amt++;
        }
    }

    const increaseAmt = () => {
        addOrderFabrics(name);
    };
    const decreaseAmt = () => {
        removeOrderFabrics(name);
    };


    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            justifyContent: gridView ? 'center' : 'flex-start',
            alignItems: 'center',
            marginTop: gridView ? -4 : 6,
            marginBottom: gridView ? 10 : 12,
            marginLeft: gridView ? 0 : 6,
            [theme.breakpoints.up(600)]: {
                marginLeft: gridView ? 0 : 20,
            },
        },
        button: {
            background: theme.palette.primary.main,
            color: '#fff',
            padding: 3,
            '&:hover': {
                background: theme.palette.primary.main,
                color: '#fff',
            },
            '&:first-of-type': {
                marginRight: 8,
            },
            '&:last-of-type': {
                marginLeft: 8,
            },
            '&.inactive': {
                background: theme.palette.primary.light3,
            }, 
        },
        amt: {
            fontFamily: theme.typography.fonts.header,
            fontSize: 20,
        },
    }));
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <IconButton onClick={decreaseAmt} className={[classes.button, amt === 0 ? 'inactive' : ''].join(' ')}><RemoveIcon /></IconButton>
            <span className={classes.amt}>{amt}</span>
            <IconButton onClick={increaseAmt} className={classes.button}><AddIcon /></IconButton>
        </div>
    );
}