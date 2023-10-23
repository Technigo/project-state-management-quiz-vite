import React from "react";
import useQuizStore from "../stores/useQuizStore";
import { Options, GoToNextQuestion, Restart, SummaryPage } from "./index";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
      <span className="progress-bar-text">{progress}%</span>
    </div>
  );
};

export const CurrentQuestionZustand = () => {
  const [showSummary, setShowSummary] = React.useState(false); // State to determine whether to show the summary page

  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);
  const question = questions[currentQuestionIndex];
  const handleAnswerSubmission = useQuizStore((state) => state.submitAnswer);
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

  // Conditionally render the Submit Answer button only on the last question
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const submitAnswerButton = isLastQuestion ? (
    <SubmitAnswer onAnswerSubmit={() => setShowSummary(true)} />
  ) : null;

  return (
    <div className="managed-component">
      <ProgressBar progress={progress} />
      <h2>The ocean quiz</h2>
      <h1>Question: {question.questionText}</h1>
      <Options options={question.options} onOptionSelect={handleOptionSelect} />
      {submitAnswerButton}
      <GoToNextQuestion onNext={goToNextQuestion} />
    </div>
  );
};

export const SubmitAnswer = ({ onAnswerSubmit }) => {
  return <button onClick={onAnswerSubmit}>Submit Answer</button>;
};




