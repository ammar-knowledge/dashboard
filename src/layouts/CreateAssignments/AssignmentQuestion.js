import { Typography, IconButton } from '@mui/material'
import React from 'react'
import AddQuestionCircle from 'assets/images/addQuestion.svg'
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles((theme) => ({

    border: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: "3px solid",
        borderColor: '#20C0A0',
        borderRadius: '8px',
        width: "100%",
        marginTop: 10,
        paddingLeft:10
    }
}));
const AssignmentQuestion = ({ added ,AddQuestionToQuiz,removeQuestionFromQuiz,question, }) => {
    const classes = useStyles();
    console.log(question)
    return question ? (
        <div className={classes.border}>
            <div>
                <Typography style={{fontSize:'12px'}}>{question.statement}</Typography>
            </div>
            <div style={{ marginTop: 5 }}>
                {added ? <img src={AddQuestionCircle} onClick={() => AddQuestionToQuiz(question.id)} /> : 
                <IconButton onClick={() => removeQuestionFromQuiz(question.id)}>
                    <CloseIcon style={{ color: '#FF0000' }} />
                </IconButton>
                }
            </div>
        </div>
    ) : <></>
}

export default AssignmentQuestion