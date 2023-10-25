import { useState, useEffect } from "react";
import useQuestions from "../../stores/useQuestions"; // Adjust the path accordingly
import { Timer } from "../Timer";
import "./questions.css";

export const Questions = () => {
  const [showImage, setShowImage] = useState(true);
  /*
  const [correctAnswer, setCorrectAnswer] = useState(false);
  if the answer is correct, set to true and have connection to global state that affects the board
  also reroute the user back to the board after having answered. delay optional
  <Link to="/"/>
*/
  const questions = useQuestions((state) => state.questions);
  const currentQuestionIndex = useQuestions(
    (state) => state.currentQuestionIndex
  );
  const question = questions[currentQuestionIndex];
  const qImageURL = question.qImage;
  const qOptions = question.options;

  const timerInterval = 2000;
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
    <div className="a-question">
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
      {!showImage && <p>Question: {question.questionText}</p>}
      {!showImage && (
        <form className="the-answer-options">
          {qOptions.map((item) => (
            <label key={item}>
              <input type="radio" id={item} name="answer" value={item} />
              {item}
            </label>
          ))}
        </form>
      )}
    </div>
  );
};
