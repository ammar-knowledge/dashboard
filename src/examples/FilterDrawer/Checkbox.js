import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CheckboxLabels({ data }) {
    return (
        <div style={{ marginTop: 20, width: '100%' }}>
            <Typography>Filter by {data.name}</Typography>
            <Accordion style={{ width: "100%",marginTop:10 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{data.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                        {
                            data.data.map((item, index) => <FormControlLabel sx={{fontWeight:'initial'}} control={<Checkbox defaultChecked />} label={item} key={index} />)
                        }
                    </FormGroup>
                </AccordionDetails>
            </Accordion>


        </div>
    );
}