import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Placeholder from 'assets/images/dataStructures.jpg'
import { Button } from '@mui/material';
export default function AccordionExpandIcon() {
  return (
    <div style={{ width: "100%", alignItems: 'center' }}>
      <Accordion style={{ width: '100%' }}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
            <img src={Placeholder} style={{ height: 20, width: 20, objectFit: 'cover', marginRight: 10 }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start' }}>
              <Typography style={{ fontSize: "14px", fontWeight: 'bold' }}>Data Structures and Algorithm</Typography>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Typography style={{ fontSize: '12px', marginRight:5 }}>Grades 1-12</Typography>
                <Typography style={{ fontSize: '12px', }}>Duration 2 hours 10 minutes</Typography>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ fontSize: "14px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
        <Accordion style={{ width: "90%" }}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
              <img src={Placeholder} style={{ height: 20, width: 20, objectFit: 'cover', marginRight: 10 }} />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start' }}>
                <Typography style={{ fontSize: "14px", fontWeight: 'bold' }}>Data Structures</Typography>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                  <Typography style={{ fontSize: '12px', marginRight:5 }}>Grades 1-12</Typography>
                  <Typography style={{ fontSize: '12px', }}>Duration 2 hours 10 minutes</Typography>
                </div>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', width: "100%" }}>
              <Typography style={{ fontSize: "14px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'end', justifyContent: 'flex-end', marginTop: 20 }}>
                <Button variant="outlined" style={{ paddingLeft: 30, paddingRight: 30, borderColor: '#20C0A0', borderRadius: 3, color: "#20C0A0", alignItems: 'center' }}>
                  Start
                </Button>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: "90%" }}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
              <img src={Placeholder} style={{ height: 20, width: 20, objectFit: 'cover', marginRight: 10 }} />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start' }}>
                <Typography style={{ fontSize: "14px", fontWeight: 'bold' }}>Algorithms</Typography>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                  <Typography style={{ fontSize: '12px', marginRight:5 }}>Grades 1-12</Typography>
                  <Typography style={{ fontSize: '12px',  }}>Duration 2 hours 10 minutes</Typography>
                </div>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', width: "100%" }}>
              <Typography style={{ fontSize: "14px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'end', justifyContent: 'flex-end', marginTop: 20 }}>
                <Button variant="outlined" style={{ paddingLeft: 30, paddingRight: 30, borderColor: '#20C0A0', borderRadius: 3, color: "#20C0A0", alignItems: 'center' }}>
                  Start
                </Button>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </Accordion>

    </div>
  );
}