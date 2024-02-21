import useQuizStore from "../stores/useQuizStore"; // Adjust the path accordingly

const CurrentQuestionZustand = () => {
  const { questions, currentQuestionIndex, submitAnswer, selectedAnswerIndex } = useQuizStore();
  const question = questions[currentQuestionIndex];

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div className="managed-component">
      <h2>Question {currentQuestionIndex + 1} / {questions.length}</h2> {/* Display question number */}
      <h1>{question.questionText}</h1>
      <div>
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`p-2 m-2 ${selectedAnswerIndex === index ? (index === question.correctAnswerIndex ? 'bg-green-500' : 'bg-red-500') : 'bg-blue-500'} text-white`}
            onClick={() => submitAnswer(question.id, index)}
            disabled={selectedAnswerIndex !== -1}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CurrentQuestionZustand;