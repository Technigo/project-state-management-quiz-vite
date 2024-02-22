import CurrentQuestionZustand from "./components/CurrentQuestionZustand";
import QuizSummary from "./components/QuizSummary";
import useQuizStore from "./stores/useQuizStore";

const App = () => {
  const quizOver = useQuizStore((state) => state.quizOver);

  return (
    <>
      <main className="flex flex-col items-center bg-gray-800 w-screen min-h-screen">
      <h1 className="text-3xl md:text-5xl top-0 font-mono m-10 font-bold text-center bg-gradient-to-r from-pink-400 via-sky-400 to-emerald-400 text-transparent bg-clip-text">Can You Make It As A Frontend Developer?</h1>
      <div className="h-auto w-screen md:w-1/2 bg-gray-600 rounded-md text-white shadow-[10px_10px_0px_0px_#424242]">
      {quizOver ? <QuizSummary /> : <CurrentQuestionZustand />}
      </div>
    </main>
  </>
  )
};

export default App;