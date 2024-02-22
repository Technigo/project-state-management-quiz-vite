import useQuizStore from "../stores/useQuizStore";

const QuizSummary = () => {
  const { answers, restart, questions } = useQuizStore();
  const correctAnswersCount = answers.filter((answer) => answer.isCorrect).length;

  return (
    <>
    <div className="relative top p-4 rounded-tl-md rounded-tr-md bg-gradient-to-r from-pink-300 via-sky-300 to-emerald-300 text-black w-full mt-0 font-mono font-bold"><h2>Your result:</h2></div>
      <div className="p-5 flex flex-col justify-center items-center m-5">
        <p className="m-2">You answered {correctAnswersCount} out of {questions.length} questions correctly!</p>
          <button onClick={restart} className="bg-gray-800 hover:bg-gray-900 text-white p-2 m-2 rounded-md transition-all ease-in ">Restart Quiz</button>
          </div>
    </>
  );
};

export default QuizSummary;