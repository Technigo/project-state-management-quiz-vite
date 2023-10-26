import { QuizQuestion } from "./components/layout/quiz/QuizQuestion";
import { QuizMultichoise } from "./components/layout/quiz/QuizMultichoise";
import { ProgressBar } from "./components/UI/progressBar/ProgressBar";
import { NextButton } from "./components/UI/nextButton/NextButton";
import { SummaryPage } from "./components/layout/summaryPage/SummaryPage";

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
          <NextButton />
        </form>
      </section>
      <div className="progressBar">
        <ProgressBar />
      </div>
      <div className="summaryPage">
        <SummaryPage />
      </div>
    </div>
  );
};
