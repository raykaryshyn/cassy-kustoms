import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import fabricsList from './fabricsList';
import canStore from '../../../functions/canStore';
import { FabricsContext } from './FabricsContext';

export default function FabricsCounter(props) {
    const context = React.useContext(FabricsContext).context;
    const addOrderFabrics = context.addOrderFabrics;
    const removeOrderFabrics = context.removeOrderFabrics;

    const name = fabricsList[props.id].name;
    const [amount, setAmountState] = React.useState(
        canStore() && localStorage.getItem('fabric__' + name) !== null ?
            parseInt(localStorage.getItem('fabric__' + name)) :
            0
    );
    const dict = {}
    dict[name] = amount;
    const setAmount = (amt) => {
        setAmountState(amt);
        if (canStore()) localStorage.setItem('fabric__' + name, amt);
    };
    const increaseAmt = () => {
        setAmount(amount + 1);
        addOrderFabrics(name);
    };
    const decreaseAmt = () => {
        setAmount(amount > 0 ? amount - 1 : amount);
        removeOrderFabrics(name);
    };



    return (
        <div>
            <IconButton onClick={decreaseAmt}><RemoveIcon /></IconButton>
            <span>{amount}</span>
            <IconButton onClick={increaseAmt}><AddIcon /></IconButton>
        </div>
    );
}