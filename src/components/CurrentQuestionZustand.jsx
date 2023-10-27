import React from "react";
import useQuizStore from "../stores/useQuizStore";
import { Options, GoToNextQuestion, Restart, SummaryPage } from "./index";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ width: `${progress}%` }}
      ></div>
      <span className="progress-bar-text">{progress}%</span>
    </div>
  );
};

export const CurrentQuestionZustand = () => {
  const [showSummary, setShowSummary] = React.useState(false); // State to determine whether to show the summary page

  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  const question = questions[currentQuestionIndex];
  const handleAnswerSubmission = useQuizStore((state) => state.submitAnswer);
  const resultTextArray = useQuizStore((state) => state.resultTextArray);
  const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion);
  const restart = useQuizStore((state) => state.restart);

  if (showSummary) {
    return (
      <>
        <SummaryPage />
        <Restart
          onRestart={() => {
            setShowSummary(false);
            // Reset currentQuestionIndex to 0 when restarting
            restart();
          }}
        />
      </>
    );
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const handleOptionSelect = (index) => {
    handleAnswerSubmission(question.id, index);
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const submitAnswerButton = isLastQuestion ? (
    <SubmitAnswer onAnswerSubmit={() => setShowSummary(true)} />
  ) : null;

  // Conditionally render the "Next Question" button based on whether it's the last question
  const nextQuestionButton = isLastQuestion ? null : (
    <GoToNextQuestion onNext={goToNextQuestion} />
  );

  return (
    <div className="managed-component">
      <ProgressBar progress={progress} />

      <h1>Question: {question.questionText}</h1>
      <img src={question.imagesrc} alt="Lake" />
      <Options
        options={question.options}
        onOptionSelect={handleOptionSelect}
        resultTextArray={resultTextArray}
      />
      {submitAnswerButton}
      {nextQuestionButton}
    </div>
  );
};

export const SubmitAnswer = ({ onAnswerSubmit }) => {
  return <button className="submit-button" onClick={onAnswerSubmit}>Submit Answers</button>;
};
