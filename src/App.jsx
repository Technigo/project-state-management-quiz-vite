import React, { useState } from "react";
import { QuizProvider } from "./context/QuizContext";
import Header from './components/Header';
import Footer from './components/Footer';
import { CurrentQuestionZustand } from "./components/CurrentQuestionZustand";

const StartButton = ({ onStartClick }) => (
  <button onClick={onStartClick}>Start Quiz</button>
);

export const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartClick = () => {
    setQuizStarted(true);
  };

  return (
    <div className="app-container">
      <QuizProvider>
        <Header />
        {quizStarted ? (
          <CurrentQuestionZustand />
        ) : (
          <div className="start">
            <div className="startImg">
              <img src="/lake.jpeg" alt="a picture of a lake" />
              <img src="/snorkel.jpeg" alt="a picture of a person snorkling" />
              <img src="/sea.jpeg" alt="a picture of a sea" />
            </div>
            <StartButton onStartClick={handleStartClick} />
          </div>
        )}
      </QuizProvider>
      <Footer />
    </div>
  );
};
