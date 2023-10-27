import { WelcomePage } from "./components/layout/welcomePage/WelcomePage";
import { QuizQuestion } from "./components/layout/quiz/QuizQuestion";
import { QuizMultichoise } from "./components/layout/quiz/QuizMultichoise";
import { ProgressBar } from "./components/UI/progressBar/ProgressBar";
import { NextButton } from "./components/UI/nextButton/NextButton";
import { SummaryPage } from "./components/layout/summaryPage/SummaryPage";
import useQuizStore from "./stores/useQuizStore";

//import { QuizProvider } from "./context/QuizContext";

export const App = () => {
  const startQuiz = useQuizStore((state) => state.startQuiz);
  const quizOver = useQuizStore((state) => state.quizOver);
  console.log(startQuiz, quizOver);
  return (
    <div className="layout_wrapper">
      {!startQuiz && (
        <section className="welcomePage">
          <WelcomePage />
        </section>
      )}
      {startQuiz && !quizOver && (
        <>
          <section className="questionBox">
            <div className="quizQuestion">
              <QuizQuestion />
            </div>
            <div className="quizMultichoise">
              <QuizMultichoise />
              <NextButton />
            </div>
          </section>
          <div className="progressBar">
            <ProgressBar />
          </div>
        </>
      )}

      {quizOver && (
        <div className="summaryPage">
          <SummaryPage />
        </div>
      )}
    </div>
  );
};
