import useQuizStore from "../stores/useQuizStore"; // Adjust the path accordingly


export const CurrentQuestionZustand = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );

  const question = questions[currentQuestionIndex];
  const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion);

  //  if (!question) {
  //     return <h1>Oh no! I could not find the current question!</h1>;
  //   }

  if (question === null) {
    alert("Oh no! I could not find the current question!");
  } else if (question.options.index !== currentQuestionIndex) {
    alert("This is not correct!");
  } else {
    alert("This is right!");
  }

  return (
    <div className="question-container">
      <h2>Using Zustand</h2>
      <h1>Question: {question.questionText}</h1>
      <div className="option-container">
        {question.options.map((option, index) => (
          <button key={index}>{option}</button>
        ))}

      </div>
      <div className="next-question">
        <button onClick={goToNextQuestion}>Next</button></div>
    </div>

  );
};
