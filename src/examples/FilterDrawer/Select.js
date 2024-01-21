import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

export default function LimitTags({ data }) {
    console.log(data)
    return (
        <div>
            <Typography style={{marginBottom:10}}>Filter by {data.name}</Typography>
            <Autocomplete
                multiple
                limitTags={2}
                id="multiple-limit-tags"
                options={data.data}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                    <TextField {...params} label={data.name} placeholder="Search" />
                )}
                sx={{ width: '400px' }}
            />
        </div>
    );
}
