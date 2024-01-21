import React, { useState } from "react";
import MDButton from "components/MDButton";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const data = require("./questions.json");
let questionsData = "";
try {
  questionsData = JSON.parse(JSON.stringify(data));
  console.log("JSON Array:", questionsData);
} catch (parseError) {
  console.error("Error parsing JSON:", parseError);
}

const TestApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleCheckAnswer = () => {
    const currentQuestion = questionsData[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    setShowAnswer(true);
  };

  const handleHideAnswer = () => {
    setShowAnswer(false);
  };

  const handleNextQuestion = () => {
    setSelectedOption("");
    setShowAnswer(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setSelectedOption("");
    setShowAnswer(false);
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const renderOptions = (options) => {
    return options.map((option, index) => (
      <>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={option}
          onChange={() => handleOptionSelect(option)}
        ></RadioGroup>
        <label key={index} className="option">
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={() => handleOptionSelect(option)}
            disabled={showAnswer}
          />
          {option}
        </label>
      </>
    ));
  };

  const renderCurrentQuestion = () => {
    const currentQuestion = questionsData[currentQuestionIndex];
    return (
      <div className="question-container">
        <h2>Question {currentQuestionIndex + 1}</h2>
        <p>{currentQuestion.question}</p>
        <div className="options-container">{renderOptions(currentQuestion.options)}</div>
        <MDButton
          onClick={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
          type="submit"
          variant="gradient"
          color="dark"
        >
          Back
        </MDButton>
        <MDButton
          onClick={handleNextQuestion}
          disabled={currentQuestionIndex === questionsData.length - 1}
          type="submit"
          variant="gradient"
          color="dark"
        >
          Next
        </MDButton>
        {showAnswer ? (
          <>
            <p>{currentQuestion.correctAnswer}</p>
            <p>{currentQuestion.answerExplanantion}</p>
            <MDButton
              onClick={handleNextQuestion}
              disabled={currentQuestionIndex === questionsData.length - 1}
              type="submit"
              variant="gradient"
              color="dark"
            >
              Hide Answer
            </MDButton>
          </>
        ) : (
          <>
            <MDButton
              onClick={handleCheckAnswer}
              disabled={!selectedOption}
              type="submit"
              variant="gradient"
              color="dark"
            >
              Check Answer
            </MDButton>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="app-container">
      <h1>Online Practice Test</h1>
      {currentQuestionIndex < questionsData.length ? (
        renderCurrentQuestion()
      ) : (
        <div className="result-container">
          <h2>Test Completed</h2>
          <p>
            Your Score: {score} / {questionsData.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default TestApp;
