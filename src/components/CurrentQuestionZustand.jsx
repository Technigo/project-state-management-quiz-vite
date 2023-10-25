import useQuizStore from "../stores/useQuizStore"; // Adjust the path accordingly

export const CurrentQuestionZustand = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  const question = questions[currentQuestionIndex];
  const submitAnswer = useQuizStore((state) => state.submitAnswer);
  const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion);
  const quizOver = useQuizStore((state) => state.quizOver);
  const restart = useQuizStore((state) => state.restart);

  /*const { submitAnswer, goToNextQuestion, restart } = useQuizStore() infinite loop from Diego ?*/

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div className="managed-component">
      <h2>Using Zustand</h2>
      <h1>Question: {question.questionText}</h1>
      <div>
        {question.options.map((option, index) => ( // https://www.geeksforgeeks.org/javascript-index-inside-map-function/
          <label
            className="radio-button-label"
            htmlFor="radio-btn"
            key={option}>
            <input
              type="radio"
              className="radio-button"
              name="radio-btn"
              value={option}
              onChange={submitAnswer(question.id, index)}
            //checked={value === option}
            />
            {option}
          </label>
        ))}
      </div>
      <div>
        <button
          className="next-btn"
          onClick={goToNextQuestion}>Next</button>
      </div>
      <div>
        {quizOver && <button
          className="restart-btn"
          onClick={restart}>Restart</button>}
      </div>

    </div>
  );
};
