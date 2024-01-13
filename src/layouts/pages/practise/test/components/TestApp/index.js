import React, { useState } from "react";
import MDButton from "components/MDButton";

const questionsData = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswer: "Mars",
  },
  // Add more questions here
];

const TestApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    const currentQuestion = questionsData[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption("");
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setSelectedOption("");
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const renderOptions = (options) => {
    return options.map((option, index) => (
      <div
        key={index}
        className={`option ${selectedOption === option ? "selected" : ""}`}
        onClick={() => handleOptionSelect(option)}
      >
        {option}
      </div>
    ));
  };

  const renderCurrentQuestion = () => {
    const currentQuestion = questionsData[currentQuestionIndex];
    return (
      <div className="question-container">
        <h2>Question {currentQuestionIndex + 1}</h2>
        <p>{currentQuestion.question}</p>
        <div className="options-container">{renderOptions(currentQuestion.options)}</div>
        <MDButton onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
          Back
        </MDButton>
        <MDButton onClick={handleNextQuestion} disabled={!selectedOption}>
          Next
        </MDButton>
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
