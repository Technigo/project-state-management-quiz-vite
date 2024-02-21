import CurrentQuestionZustand from "./components/CurrentQuestionZustand";
import QuizSummary from "./components/QuizSummary";
import useQuizStore from "./stores/useQuizStore";

const App = () => {
  const quizOver = useQuizStore((state) => state.quizOver);

  return (
    <div>
      {quizOver ? <QuizSummary /> : <CurrentQuestionZustand />}
    </div>
  );
};

export default App;