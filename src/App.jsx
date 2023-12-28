import { CurrentQuestionZustand } from "./components/CurrentQuestionZustand";
import { NextQuestionButton } from "./components/Bits and Bobs/NextQButton";
import useQuizStore from "./stores/useQuizStore";
import { RestartButton } from "./components/Bits and Bobs/ButtonRestart";
import { StartPage } from "./Layout Setup/Welcome/WelcomePage";
import { SummaryPage } from "./Layout Setup/Summary/SummaryPage";
import { Questions } from "./Layout Setup/Quiz/Question";
import { Answers } from "./Layout Setup/Quiz/Answers";
// import { ProgressBar } from "./components/UI/progressBar/ProgressBar";

export const App = () => {
  const startQuiz = useQuizStore((state) => state.startQuiz);
  const quizOver = useQuizStore((state) => state.quizOver);
  return (
    <div className="layout_wrapper">
      {!startQuiz && (
        <section className="welcomePage">
          <StartPage />
        </section>
      )}

    {startQuiz && !quizOver && (
      <>
        <div className="questionsFullPage">
          <div className="tasks">
            <h1>Question you answer here</h1>
          </div>
          <section className="questionBox">
            <div className="quizQuestion">
              <Questions />
            </div>
            <div className="quizMultichoiseItem">
              <Answers />
            </div>
          </section>
          <div className="nextButtonItem">
            <NextQuestionButton />
          </div>
          {/* <div className="progress-Bar">
          <ProgressBar />
        </div> */}
        </div>
      </>
    )}

    {quizOver && (
      <div className="summaryPage">
        <SummaryPage />
        <RestartButton />
      </div>
    )}
  </div>;
};
