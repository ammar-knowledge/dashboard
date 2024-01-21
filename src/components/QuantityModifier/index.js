import React, { useState } from 'react';
import { Button, Input, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1),
    },
    button: {
        width: "34px",
        height: "40px",
        outline:'none',
        borderColor:'#20C0A0',
        borderRadius:"8px"
    },
    input: {
        width: "36px",
        height: "36px",
        fontSize: 16,
        color: '#20C0A0',
        '& input[type=number]': {
            '-moz-appearance': 'textfield'
        },
        '& input[type=number]::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        },
        '& input[type=number]::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        }
    },
}));

const QuantityModifier = (setValue) => {
    const classes = useStyles();
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleChange = (event) => {
        const newValue = event.target.value;
        if (!isNaN(newValue) && newValue >= 0) {
            setQuantity(parseInt(newValue));
            setValue(parseInt(newValue))
        }
    };

    return (
        <Box className={classes.root} style={{ border: '1px solid #20C0A0', borderRadius: "8px"  }}>
            <button
                className={classes.button}
                onClick={handleDecrement}
                style={{ backgroundColor: '#20C0A0', borderTopRightRadius: 0, borderBottomRightRadius: 0,padding:0 }}
                
            >-</button>
            <Input
                className={classes.input}
                value={quantity}
                onChange={handleChange}
                type="number"
                inputProps={{
                    min: 0,
                    style: { textAlign: 'center' },
                }}
            />
            <button
                className={classes.button}
                onClick={handleIncrement}
                style={{ backgroundColor: '#20C0A0', borderBottomLeftRadius: 0, borderTopLeftRadius: 0,padding:0 }}
               
            >+</button>
        </Box>
    );
};

export default QuantityModifier;
