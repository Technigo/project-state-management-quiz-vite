import useQuizStore from "../../stores/useQuizStore"; // Adjust the path accordingly
// import styles from "./CurrentQuestionZustand.module.css";

export const CurrentQuestionZustand = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  const question = questions[currentQuestionIndex];

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div className="managed-component">
      <h2>Question</h2>
      <h1>
        {currentQuestionIndex + 1}.{question.questionText}
      </h1>
    </div>

  );
};
