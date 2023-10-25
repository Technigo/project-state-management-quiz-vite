import useQuestions from "../stores/useQuestions"; // Adjust the path accordingly

export const Questions = () => {
  const questions = useQuestions((state) => state.questions);
  const currentQuestionIndex = useQuestions(
    (state) => state.currentQuestionIndex
  );
  const question = questions[currentQuestionIndex];
  const qImageURL = question.qImage;

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div className="a-question">
      <img
        className="an-image"
        src={qImageURL}
        alt="A picture to memorize and answer questions about"
      />
      <h1>Question: {question.questionText}</h1>
    </div>
  );
};
