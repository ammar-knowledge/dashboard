import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup({ data }) {
    return (
        <div style={{marginTop:20}}>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">{data.name}</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                >
                    {data.data.map((item, index) => <FormControlLabel value={item} control={<Radio />} label={item} key={index} />)}
                </RadioGroup>
            </FormControl>
        </div>
    );
}