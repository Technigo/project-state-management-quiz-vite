import useQuizStore from "../../stores/useQuizStore";
import "./SubmitAnswer.css";

export const SubmitAnswer = ({ questionId, selectedOption }) => {
  const submitAnswer = useQuizStore((state) => state.submitAnswer);
  const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion);

  const handleSubmission = (event) => {
    event.preventDefault(); // This will prevent the default form submission behavior
    submitAnswer(questionId, selectedOption);
    goToNextQuestion();
  };

  return <button onClick={handleSubmission}>Submit</button>;
};
