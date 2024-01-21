import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const questionsList = [
  'What is your favorite color?',
  'How many siblings do you have?',
  'What is your favorite food?',
  'What is your dream travel destination?',
  'Do you enjoy reading?',
  'What is your favorite hobby?',
];

const getRandomQuestions = () => {
  const shuffledQuestions = questionsList.sort(() => 0.5 - Math.random());
  return shuffledQuestions.slice(0, 6);
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'flex-start',
    alignItems: 'start',
    marginTop: theme.spacing(2),
  },
  paper: {
    width: '300px',
    padding: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const QuestionsList = () => {
  const classes = useStyles();
  const [questions, setQuestions] = useState(getRandomQuestions());
  const [checked, setChecked] = useState(new Array(6).fill(false));

  const handleToggle = (index) => () => {
    const newChecked = [...checked];
    newChecked[index] = !checked[index];
    setChecked(newChecked);
  };

  const handleReset = () => {
    setQuestions(getRandomQuestions());
    setChecked(new Array(6).fill(false));
  };

  return (
    <div className={classes.root}>
      <div elevation={3} className={classes.paper}>
        {questions.map((question, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={checked[index]}
                onChange={handleToggle(index)}
                color="primary"
              />
            }
            label={question}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionsList;
