import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import fabricsList from './fabricsList';
import { FabricsContext } from './FabricsContext';

export default function FabricsCounter(props) {
    const context = React.useContext(FabricsContext).context;
    const orderFabrics = context.orderFabrics;
    const addOrderFabrics = context.addOrderFabrics;
    const removeOrderFabrics = context.removeOrderFabrics;

    const name = fabricsList[props.id].name;

    /* const amt = orderFabrics[name] ? orderFabrics[name] : 0; */
    var amt = 0;
    for (var i = 0; i < orderFabrics.length; i++) {
        if (orderFabrics[i].split('__')[0] === name) {
            amt++;
        }
    }

    const increaseAmt = () => {
        addOrderFabrics(name);
    };
    const decreaseAmt = () => {
        removeOrderFabrics(name);
    };



    return (
        <div>
            <IconButton onClick={decreaseAmt}><RemoveIcon /></IconButton>
            <span>{amt}</span>
            <IconButton onClick={increaseAmt}><AddIcon /></IconButton>
        </div>
    );
}