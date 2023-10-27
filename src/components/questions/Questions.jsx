import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useQuestions from "../../stores/useQuestions"; // Adjust the path accordingly
import { Timer } from "../Timer";
import "./questions.css";
import useQuizStore from "../../stores/useQuestions";

export const Questions = ({ param }) => {
  const [showImage, setShowImage] = useState(true);

  const { submitAnswer } = useQuizStore();
  const [answerIndex, setAnswerIndex] = useState(null);

  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setAnswerIndex(Number(event.target.value));
    console.log("answerIndex = " + answerIndex);
  };
  /*
  const [correctAnswer, setCorrectAnswer] = useState(false);
  if the answer is correct, set to true and have connection to global state that affects the board
  also reroute the user back to the board after having answered. delay optional
  <Link to="/"/>
*/

  const questions = useQuestions((state) => state.questions);
  const question = questions[param - 1];
  const qImageURL = question.qImage;
  const qOptions = question.options;

  const timerInterval = 5000;
  const flipCard = () => {
    setTimeout(() => {
      setShowImage(!showImage);
    }, timerInterval);
  };

  useEffect(() => flipCard, []);

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
          <Timer time={timerInterval} />
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
        </form>
      )}
    </div>
  );
};
