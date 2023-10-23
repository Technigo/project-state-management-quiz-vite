import React from "react";
import useQuizStore from "../stores/useQuizStore"; 
import { Options, GoToNextQuestion, Restart, SummaryPage } from "./index"; 

export const CurrentQuestionZustand = () => {
  const [showSummary, setShowSummary] = React.useState(false); // State to determine whether to show the summary page

  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);
  const question = questions[currentQuestionIndex];
  const handleAnswerSubmission = useQuizStore((state) => state.submitAnswer);
  const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion);
  const restart = useQuizStore((state) => state.restart);

  if (showSummary) {
    return <SummaryPage />;
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const handleOptionSelect = (index) => {
    handleAnswerSubmission(question.id, index);
  };

  return (
    <div className="managed-component">
      <h2>The ocean quiz</h2>
      <h1>Question: {question.questionText}</h1>
      <Options options={question.options} onOptionSelect={handleOptionSelect} />
      <SubmitAnswer onAnswerSubmit={() => setShowSummary(true)} /> {/* Directly set showSummary to true */}
      <GoToNextQuestion onNext={goToNextQuestion} />
      <Restart onRestart={restart} />
    </div>
  );
};

export const SubmitAnswer = ({ onAnswerSubmit }) => {
  return <button onClick={onAnswerSubmit}>Submit Answer</button>;
};




