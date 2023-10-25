import { QuizQuestion } from "./components/layout/quiz/QuizQuestion";
import { QuizMultichoise } from "./components/layout/quiz/QuizMultichoise";

//import { QuizProvider } from "./context/QuizContext";

export const App = () => {
  return (
    <div className="layout_wrapper">
      <section className="questionBox">
        <div className="quizQuestion">
          <QuizQuestion />
        </div>
        <form className="quizMultichoise">
          <QuizMultichoise />
        </form>
      </section>
    </div>
  );
};
