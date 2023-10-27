import { WelcomePage } from "./components/layout/welcomePage/WelcomePage";
import { QuizQuestion } from "./components/layout/quiz/QuizQuestion";
import { QuizMultichoise } from "./components/layout/quiz/QuizMultichoise";
import { ProgressBar } from "./components/UI/progressBar/ProgressBar";

//import { QuizProvider } from "./context/QuizContext";

export const App = () => {
  return (
    <div className="layout_wrapper">
      <section className="welcomePage">
        <WelcomePage />
      </section>
      <section className="questionBox">
        <div className="quizQuestion">
          <QuizQuestion />
        </div>
        <form className="quizMultichoise">
          <QuizMultichoise />
        </form>
      </section>
      <div className="progressBar">
        <ProgressBar />
      </div>
    </div>
  );
};
