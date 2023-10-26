import "./Summary.css";
import useQuizStore from "../../stores/useQuizStore";
import { Restart } from "../Restart/Restart";

const getSummary = (correctAnswers) => {
  switch (correctAnswers) {
    case 0:
      return "Oops! Looks like your brain's on vacation. Better luck next time!";
    case 1:
      return "Well, it's a start! Remember, even Jupiter had to start small!";
    case 2:
      return "Two out of five! You're swimming up the trivia river!";
    case 3:
      return "Three's a crowd, but in a good way here! You're more than halfway there!";
    case 4:
      return "Four out of five! You're blazing through like the 2016 Olympics!";
    case 5:
      return "Perfect score! Are you sure you're not a trivia textbook in disguise?";
    default:
      return "Oops! Something went wrong!";
  }
};

export const Summary = () => {
  const { numberOfCorrectAnswers, totalQuestions, answers } = useQuizStore(
    (state) => ({
      numberOfCorrectAnswers: state.answers.filter((answer) => answer.isCorrect)
        .length,
      totalQuestions: state.questions.length,
      answers: state.answers,
    })
  );
  console.log(answers);
  const summaryMessage = getSummary(numberOfCorrectAnswers);

  return (
    <div className="summary-container">
      <h3>Summary</h3>
      <p className="summary-message">{summaryMessage}</p>
      <p className="correct-answers">
        You got {numberOfCorrectAnswers} correct answers out of {totalQuestions}
        !
      </p>
      <Restart />
    </div>
  );
};
