import React, { useState } from 'react'
import { Slider } from '@material-ui/core'
import { Typography } from '@mui/material'

const SliderFilter = ({ data }) => {
    const [values, setValues] = useState(data.data)
    const handleValueChange = (event,newValue) => {
        setValues(newValue)
    }
    return (
        <div style={{width:"70%",marginTop:20 ,marginLeft:5}}>
            <Typography>Range By {data.nam}</Typography>
            <Slider
                value={values}
                onChange={handleValueChange}
                valueLabelDisplay="auto"
                aria-labelledby="filter-slider"
                min={3}
                max={20}
            />
        </div>
    )
}

export default SliderFilter