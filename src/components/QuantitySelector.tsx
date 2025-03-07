import React, { FC } from 'react';
import { IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


interface IQuantitySelector {
    value: number
    onIncrease: any
    onDecrease: any
}

const QuantitySelector: FC<IQuantitySelector> = ({ value, onIncrease, onDecrease }) => {

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={onDecrease} size="small">
                <RemoveIcon />
            </IconButton>
            <TextField
                value={value}
                variant="outlined"
                size="small"
                inputProps={{ style: { textAlign: 'center', width: '20px', height: '15px' } }}
                disabled
            />
            <IconButton onClick={onIncrease} size="small">
                <AddIcon />
            </IconButton>
        </div>
    );
};

export default QuantitySelector;