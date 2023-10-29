import { WelcomePage } from "./components/layout/welcomePage/WelcomePage";
import { QuizQuestion } from "./components/layout/quiz/QuizQuestion";
import { QuizMultichoise } from "./components/layout/quiz/QuizMultichoise";
import { ProgressBar } from "./components/UI/progressBar/ProgressBar";
import { NextButton } from "./components/UI/nextButton/NextButton";
//import { AllText } from "./components/UI/text/AllText";
import { SummaryPage } from "./components/layout/summaryPage/SummaryPage";
import useQuizStore from "./stores/useQuizStore";
import { RestartButton } from "./components/UI/RestartButton/RestartButton";

//import { QuizProvider } from "./context/QuizContext";

export const App = () => {
  const startQuiz = useQuizStore((state) => state.startQuiz);
  const quizOver = useQuizStore((state) => state.quizOver);
  //console.log(startQuiz, quizOver);
  return (
    <div className="layout_wrapper">
      {!startQuiz && (
        <section className="welcomePage">
          <WelcomePage />
        </section>
      )}

      {startQuiz && !quizOver && (
        <>
          <div className="questionsFullPage">
            <div className="tasks">
              <h1>QUIZZARD TASK:</h1>
            </div>
            <section className="questionBox">
              <div className="quizQuestion">
                <QuizQuestion />
              </div>
              <div className="quizMultichoiseItem">
                <QuizMultichoise />
              </div>
            </section>
            <div className="nextButtonItem">
              <NextButton />
            </div>
            <div className="progress-Bar">
              <ProgressBar />
            </div>
          </div>
        </>
      )}

      {quizOver && (
        <div className="summaryPage">
          <SummaryPage />
          <RestartButton />
        </div>
      )}
    </div>
  );
};
