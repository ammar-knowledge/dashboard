import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    IconButton,
    Box,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import QuantityModifier from 'components/QuantityModifier';
import { Input,Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        margin: 'auto',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(2),
    },
    formControl: {
        marginTop: 10,
        marginRight: theme.spacing(2),
        width: 275,
        borderRadius: 8,
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#63D3BD',
            },
        },
    },
    numberInput: {
        width: "36px",
        height: "36px",
        fontSize: 16,
        color: '#20C0A0',
        border: "1px solid",
        borderRadius: "8px",
        borderColor:"#20C0A0"
    },
}));

const Dropdowns = ({ skills, handleRemovSkillFields, hiddenSubSkill, setHiddenSubSkill, skillsData, setSkillsData }) => {
    const { id } = skills
    const classes = useStyles();
    const [selectedSkill, setSelectedSkill] = useState();
    const [selectedSubSkill, setSelectedSubSkill] = useState();
    const [skillPoints,setSkillPoints] = useState(0)

    const handleSkillChange = (skill) => {
        setSelectedSkill(skill);
        const newArr = skillsData.map((item) => {
            if (item.id === id) return { ...item, name: skill.name };
        })
        setSkillsData(newArr)
        setSelectedSubSkill();
    };

    const handleSubSkillChange = (subSkill) => {
        setSelectedSubSkill(subSkill);
        const newArr = skillsData.map((item) => {
            if (item.id === id) return { ...item, name: subSkill.name };
        })
        setSkillsData(newArr)
    };

    return (
        <div className={classes.root}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="skills-label">Skills</InputLabel>
                    <Select
                        labelId="skills-label"
                        id="skills"
                        value={selectedSkill}
                        label="Skills"
                    >
                        {skillsData.map((skill) => skill.parentId === null && (
                            <MenuItem key={skill.id} value={skill.name} onClick={() => handleSkillChange(skill)} >
                                {skill.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>


                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="sub-skills-label">Sub-skills</InputLabel>
                    <Select
                        labelId="sub-skills-label"
                        id="sub-skills"
                        value={selectedSubSkill}
                        label="Sub-skills"
                        disabled={!selectedSkill} // Disable if no skill is selected
                    >
                        {skillsData.map((subSkill) => selectedSkill && selectedSkill.id === subSkill.parentId && (
                            <MenuItem key={subSkill} value={subSkill} onClick={() => handleSubSkillChange(subSkill)}>
                                {subSkill.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>


                <Box>
                    <IconButton onClick={() => handleRemovSkillFields(id)} aria-label="delete" color="secondary" style={{ marginLeft: -10 }}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </div>
            <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between',width:"15%" }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: "100%" }}>
                    <Typography variant='h5' style={{ color: "#20C0A0" }} id="question-marks" gutterBottom>
                        Points:
                    </Typography>
                    <Input
                        className={classes.numberInput}
                        value={skillPoints}
                        onChange={(e) => setSkillPoints(e.target.value)}
                        type="number"
                        inputProps={{
                            min: 0,
                            style: { textAlign: 'center' },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Dropdowns;
