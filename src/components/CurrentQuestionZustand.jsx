import useQuizStore from "../stores/useQuizStore"; 

const CurrentQuestionZustand = () => {
  const { questions, currentQuestionIndex, submitAnswer, selectedAnswerIndex } = useQuizStore();
  const question = questions[currentQuestionIndex];

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <>
      <div className="relative top p-5 rounded-tl-md rounded-tr-md bg-gradient-to-r from-pink-300 via-sky-300 to-emerald-300 text-black w-full mt-0 font-mono font-bold"><h2>Question {currentQuestionIndex + 1} / {questions.length}</h2></div> 
      <div className="p-5 flex flex-col"><h2 className="text-white text-center text-xl m-4">{question.questionText}</h2>
      <div className="flex flex-col items-center">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`transition-all ease-in p-2 m-2 w-full md:w-1/2 rounded-md ${selectedAnswerIndex === index ? (index === question.correctAnswerIndex ? 'bg-green-500' : 'bg-red-500') : 'bg-gray-800 hover:bg-gray-900'} text-white`}
            onClick={() => submitAnswer(question.id, index)}
            disabled={selectedAnswerIndex !== -1}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
    </>
  );
}
      

export default CurrentQuestionZustand;