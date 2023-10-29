import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useQuestions from "../../stores/useQuestions";
import useQuizStore from "../../stores/useQuestions";
import { Timer } from "../Timer";
import "./questions.css";

export const Questions = ({ param }) => {
  const [showImage, setShowImage] = useState(true);
  const [answerIndex, setAnswerIndex] = useState(null);
  const navigate = useNavigate();
  const { submitAnswer } = useQuizStore();
  const questions = useQuestions((state) => state.questions);
  const question = questions[param - 1];
  const qImageURL = question.qImage;
  const qOptions = question.options;
  const timerInterval = 3000;

  const flipCard = () => {
    const timer = setTimeout(() => {
      setShowImage(!showImage);
    }, timerInterval);
    return () => clearTimeout(timer);
  };

  useEffect(flipCard, []);

  const handleOptionChange = (event) => {
    setAnswerIndex(Number(event.target.value));
  };

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div className="the-question">
      {showImage && (
        <>
          <img
            className="an-image"
            src={qImageURL}
            alt="A picture to memorize and answer questions about"
          />
          <Timer time={3000} />
        </>
      )}
      {!showImage && <p className="question-text">{question.questionText}</p>}
      {!showImage && (
        <form className="the-answer-options">
          {qOptions.map((item, index) => (
            <label key={item}>
              <input
                type="radio"
                id={item}
                name="answer"
                value={index}
                onChange={handleOptionChange}
              />
              {item}
            </label>
          ))}
        </form>
      )}
      {!showImage && (
        <button
          className="button"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            submitAnswer(question.id, answerIndex);
            navigate("/");
          }}
        >
          SUBMIT
        </button>
      )}
    </div>
  );
};