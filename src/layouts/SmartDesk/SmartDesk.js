import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Whiteboard from './Whiteboard';
import Editor from './TextEditor';
import Graphs from './DesmosGraphs'
import CodeBlock from './CodeBlock'
import CircuitBuilder from './CircuitBuilder'
import Quiz from './Quiz'
import { Excalidraw } from "@excalidraw/excalidraw";
import { SaveLocal } from 'utils/localStorage';
import { GetLocal } from 'utils/localStorage';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function SmartDesk() {

    const [seconds, setSeconds] = React.useState(0);
    const [isActive, setIsActive] = React.useState(true)
    const [value, setValue] = React.useState(0);
    const [leftValue, setLeftValue] = React.useState(0)
    const [textEditorValue, setTextEditorValue] = React.useState({ value: null })
    const [excalidrawAppState, setExcalidrawAppState] = React.useState({})
    const [excalidrawInitialData, setExcalidrawInitialData] = React.useState({})
    const [excalidrawAPI, setExcalidrawAPI] = React.useState(null);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (excalidrawAPI) {
            const appState = excalidrawAPI.getAppState()
            console.log(appState)
            SaveLocal('excalidraw-app-state', appState)
        }
    };
    const handleLeftChange = (event, newValue) => {
        setLeftValue(newValue)
    }


    React.useEffect(() => {
        const appState = GetLocal('excalidraw-app-state')
        setExcalidrawInitialData(appState)
    }, [value])

    React.useEffect(() => {
        let interval;

        if (isActive) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setSeconds(0);
        setIsActive(false);
    };


    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = Math.floor(timeInSeconds % 60);

        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };
    return (
        <div className='flex flex-col' >
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: "#fff", padding: 10, marginBottom: 5 }}>
                <div className='flex flex-row items-center justify-center'>
                    <Typography>SmartDesk</Typography>
                </div>
                <div>
                    <Typography>Timer: {formatTime(seconds)}</Typography>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between', backgroundColorL: "#e5e7eb" }}>
                <Box sx={{ width: "22%", height: "100%", backgroundColor: "#fff", borderRadius: "8px" }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', height: '75vh' }}>
                        <Tabs value={leftValue} onChange={handleLeftChange} aria-label="left-tab">
                            <Tab label="Overview" {...a11yProps(0)} />
                            <Tab label="Vocabulary" {...a11yProps(1)} />
                            <Tab label="Resources" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={leftValue} index={0}>

                    </CustomTabPanel>
                    <CustomTabPanel value={leftValue} index={1}>
                    </CustomTabPanel>
                    <CustomTabPanel value={leftValue} index={2}>
                    </CustomTabPanel>
                </Box>
                <Box sx={{ width: '75%', backgroundColor: "#fff", borderRadius: "8px", height: '80vh' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="WhiteBoard" {...a11yProps(0)} />
                            <Tab label="Text Editor" {...a11yProps(1)} />
                            <Tab label="Graphs" {...a11yProps(2)} />
                            <Tab label="Coding" {...a11yProps(3)} />
                            <Tab label="Circuit Builder" {...a11yProps(4)} />
                            <Tab label="Quiz" {...a11yProps(5)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <div style={{ height: '70vh' }}>
                            <Excalidraw excalidrawAPI={(api) => setExcalidrawAPI(api)} initialData={excalidrawInitialData} />
                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <Editor state={textEditorValue} setState={setTextEditorValue} />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <Graphs />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={3}>
                        <Box sx={{ height: "100%", zIndex: 100 }}>
                            <CodeBlock />
                        </Box>
                    </CustomTabPanel >
                    <CustomTabPanel value={value} index={4}>
                        <CircuitBuilder />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={5}>
                        <Quiz />
                    </CustomTabPanel>
                </Box>
            </div>
        </div>
    );
}