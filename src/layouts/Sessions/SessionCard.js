import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Stack from '@mui/material/Stack';
import CoursePlaceHolder from 'assets/images/course.jpg'
import Divider from '@mui/material/Divider';
import AssignmentIcon from 'assets/images/assgnmentIcon.svg'
import QuestIcon from "assets/images/QuestIcon.svg"
import QuizIcon from "assets/images/quizIcon.svg"
import ArrowIon from 'assets/images/arrowIcon.svg'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DataTable from "examples/Tables/DataTable";
import authorsTableData from "layouts/tables/data/authorsTableData";
import MDBox from "components/MDBox";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: "551px",
    width: "60vw",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const Type = (type) => {
    switch (type) {
        case 'quiz':
            return <span style={{ height: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}><img src={QuizIcon} style={{ width: "20px", height: '20px' }} />Quiz</span>
            break;
        case 'quest':
            return <span style={{ height: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}><img src={QuestIcon} style={{ width: "20px", height: '20px' }} />Quest</span>
            break;
        case 'assignment':
            return <span style={{ height: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}><img src={AssignmentIcon} style={{ width: "20px", height: '20px' }} />Assignment</span>
            break;
        default:
            break;
    }
}


const ScorePercent = (score) => (score > 50 ? <span style={{ color: "#FFA800", backgroundColor: "#FFA800aa", borderRadius: "12px", padding: 5 }}>{score}%</span > : score > 70 ? <span style={{ color: "#20C0A0", backgroundColor: "#20C0A0aa", borderRadius: "12px", padding: 5 }}>{score}%</span> : <span style={{ color: "#EB5757", backgroundColor: "#EB5757aa", borderRadius: "12px", padding: 5 }}>{score}%</span>)

const rows = [
    createData('Loops and Conditionals', Type('quiz'), 'Dec 01, 2022 11:59pm', "5min 30sec", ScorePercent(100)),
    createData('What are algorihtms?', Type('assignment'), 'Dec 01, 2022 11:59pm', "5min 30sec", ScorePercent(50)),
    createData('The Code Showdown', Type('quest'), 'Dec 01, 2022 11:59pm', "5min 30sec", ScorePercent(60)),
    createData('Data Structures Review', Type('quest'), 'Dec 01, 2022 11:59pm', "5min 30sec", ScorePercent(40)),
    createData('Tech Trivia', Type('assignment'), 'Dec 01, 2022 11:59pm', "5min 30sec", ScorePercent(98)),
];

export default function ContentCards() {
    const [open, setOpen] = React.useState(false);
    const [openSecondModal, setOpenSeconModal] = React.useState(false);
    const { columns, rows } = authorsTableData();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSecondOpen = () => setOpenSeconModal(true)
    const handleSecondClose = () => setOpenSeconModal(false)
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="260"
                        image={CoursePlaceHolder}
                        alt=""
                    />
                    <CardContent>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
                            <Stack direction='column' spacing={1}>
                                <Typography gutterBottom variant="h5" component="div" >
                                    Anatomy of A Seed
                                </Typography>
                            </Stack>
                            <div style={{ width: 50, height: 50 }}>
                                <CircularProgressbar value={66} text={`${66}%`} />
                            </div>
                        </div>
                        <Stack direction='column' spacing={1}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
                                <Typography variant="body2" color="text.secondary">Grade</Typography>
                                <Typography variant="body2" color="text.secondary">2 - 7</Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
                                <Typography variant="body2" color="text.secondary">Date</Typography>
                                <Typography variant="body2" color="text.secondary">26 June 2023</Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
                                <Typography variant="body2" color="text.secondary">Learners</Typography>
                                <Typography variant="body2" color="text.secondary">6/12</Typography>
                            </div>
                        </Stack>
                        <div style={{ marginTop: 10 }}>
                            <Button variant='contained' style={{ backgroundColor: "#20C0A0", color: "#fff" }} onClick={handleOpen}>View</Button>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                style={{ borderRadius: "8px", paddingTop: "17px", paddingLeft: "60px" }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: "center", width: "100%" }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: "start", justifyContent: 'flex-start', width: "100%", marginBottom: 20 }}>
                            <Typography>James Alexander</Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: "100%" }}>
                            <div>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between' }}>
                                    <div style={{ width: 110, height: 110, marginRight: 20 }}>
                                        <CircularProgressbar value={66} text={`${66}%`} styles={{ color: "#6072D7" }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between' }}>
                                        <span style={{ backgroundColor: "#EFFBF8", paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, borderRadius: "12px", color: "#06A585", fontSize: "12px" }}>Active Session</span>
                                        <Typography >Fundamentals of Programming</Typography>
                                        <div style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 20, width: "100%" }}>
                                            <Typography style={{ fontSize: "14px", color: "#8E97B1" }}>5/15 Activities</Typography>
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                                <Typography style={{ fontSize: "14px", marginRight: 5 }}>Grade </Typography>
                                                <Typography style={{ color: "#4E587D" }}>59.88%</Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 70 }}>
                                    <div style={{ display: "flex", flexDirection: 'column', alignContent: 'start', justifyContent: "start" }}>
                                        <img src={QuizIcon} style={{ width: "50px", height: '50px' }} />
                                        <Typography style={{ fontSize: 14, marginTop: 5 }}>1/3Quiz</Typography>
                                    </div>
                                    <Divider />
                                    <div style={{ display: "flex", flexDirection: 'column', alignContent: 'start', justifyContent: "start" }}>
                                        <img src={AssignmentIcon} style={{ width: "50px", height: '50px' }} />
                                        <Typography style={{ fontSize: 14, marginTop: 5 }}>2/3 Assignment</Typography>
                                    </div>
                                    <Divider />
                                    <div style={{ display: "flex", flexDirection: 'column', alignContent: 'start', justifyContent: "start" }}>
                                        <img src={QuestIcon} style={{ width: "50px", height: '50px' }} />
                                        <Typography style={{ fontSize: 14, marginTop: 5 }}>1/1 Video Quest</Typography>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center', marginTop: 70 }}>
                                    <Button variant='contained' style={{ backgroundColor: "#20C0A0", color: "#fff" }} onClick={handleSecondOpen}>View Grades</Button>
                                </div>
                            </div>
                            <Divider orientation="vertical" flexItem />
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between', width: "40%" }}>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between', width: "100%", marginBottom: 20 }}>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Typography style={{ fontSize: "14px", color: "#404F7A" }}>Basics of Algebra using Supplies</Typography>
                                        <Typography style={{ fontSize: "11px", color: "#8E97B1" }}>10/30 Activities</Typography>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', }}>
                                        <img src={ArrowIon} style={{ width: "25px" }} />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between', width: "100%", marginBottom: 20 }}>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Typography style={{ fontSize: "14px", color: "#404F7A" }}>Basics of Algebra using Supplies</Typography>
                                        <Typography style={{ fontSize: "11px", color: "#8E97B1" }}>10/30 Activities</Typography>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', }}>
                                        <img src={ArrowIon} style={{ width: "25px" }} />
                                    </div>
                                </div><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between', width: "100%", marginBottom: 20 }}>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Typography style={{ fontSize: "14px", color: "#404F7A" }}>Basics of Algebra using Supplies</Typography>
                                        <Typography style={{ fontSize: "11px", color: "#8E97B1" }}>10/30 Activities</Typography>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', }}>
                                        <img src={ArrowIon} style={{ width: "25px" }} />
                                    </div>
                                </div><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between', width: "100%", marginBottom: 20 }}>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Typography style={{ fontSize: "14px", color: "#404F7A" }}>Basics of Algebra using Supplies</Typography>
                                        <Typography style={{ fontSize: "11px", color: "#8E97B1" }}>10/30 Activities</Typography>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', }}>
                                        <img src={ArrowIon} style={{ width: "25px" }} />
                                    </div>
                                </div><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between', width: "100%", marginBottom: 20 }}>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Typography style={{ fontSize: "14px", color: "#404F7A" }}>Basics of Algebra using Supplies</Typography>
                                        <Typography style={{ fontSize: "11px", color: "#8E97B1" }}>10/30 Activities</Typography>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', }}>
                                        <img src={ArrowIon} style={{ width: "25px" }} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
            <Modal
                open={openSecondModal}
                onClose={handleSecondClose}
                style={{ borderRadius: "8px", paddingTop: "17px", paddingLeft: "60px" }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', width: "100%", flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography>
                                James Alexander
                            </Typography>
                        </div>
                        <MDBox pt={3}>
                            <DataTable
                                table={{ columns: columns, rows: rows }}
                                isSorted={false}
                                entriesPerPage={false}
                                showTotalEntries={false}
                                noEndBorder
                            />
                        </MDBox>
                    </div>
                </Box>
            </Modal>
        </>
    );
}
