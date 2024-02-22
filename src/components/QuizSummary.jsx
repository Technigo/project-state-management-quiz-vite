import useQuizStore from "../stores/useQuizStore";

const QuizSummary = () => {
  const { answers, restart, questions } = useQuizStore();
  const correctAnswersCount = answers.filter((answer) => answer.isCorrect).length;
  const totalQuestions = questions.length;
  

  const getResultMessage = () => {
    const scorePercentage = (correctAnswersCount / totalQuestions) * 100;
    
    if (scorePercentage === 100) {
      return "Wow, you would be a great frontend developer! (Yeah, at least in theory.)";
    } else if (scorePercentage >= 80) {
      return "Maybe you wouldn't be completely all bad at everything after some practice!";
    } else if (scorePercentage >= 60) {
      return "Never say never but you have a long road ahead...";
    } else if (scorePercentage >= 40) {
      return "I know I wouldn't let you near my computer for a couple of years at least...";
    } else {
      return "Wow, I hope you were trying to fail on purpose!";
    }
  };

  return (
    <>
      <div className="relative top p-4 rounded-tl-md rounded-tr-md bg-gradient-to-r from-pink-300 via-sky-300 to-emerald-300 text-black w-full mt-0 font-mono font-bold"><h2>Your result:</h2></div>
      <div className="p-5 flex flex-col justify-center items-center m-5">
        <p className="m-2">You answered {correctAnswersCount} out of {totalQuestions} questions correctly!</p>
        <p className="m-2">{getResultMessage()}</p>
        <button onClick={restart} className="bg-gray-800 hover:bg-gray-900 text-white p-2 m-2 rounded-md transition-all ease-in ">Restart Quiz</button>
      </div>
    </>
  );
};

export default QuizSummary;
