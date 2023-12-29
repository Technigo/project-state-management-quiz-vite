// import { CurrentQuestionZustand } from "./components/CurrentQuestionZustand";
import { NextButton } from "./components/BitsAndBobs/NextQButton";
import useQuizStore from "./stores/useQuizStore";
import { RestartButton } from "./components/BitsAndBobs/ButtonRestart";
import { WelcomePage } from "./LayoutSetup/Welcome/WelcomePage";
import { SummaryPage } from "./LayoutSetup/Summary/SummaryPage";
import { Question } from "./LayoutSetup/Quiz/Question";
import { Answers } from "./LayoutSetup/Quiz/Answers";
import { Steps } from "./components/BitsAndBobs/Steps";

export const App = () => {
  const startQuiz = useQuizStore((state) => state.startQuiz);
  const quizOver = useQuizStore((state) => state.quizOver);
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
              <h1>Reply to question, given here!</h1>
            </div>

            <section className="questionBox">
              <div className="quizQuestion">
                <Question />
              </div>
              <div className="quizMultichoiceItem">
                <Answers />
              </div>
            </section>
            <div className="nextButtonItem">
              <NextButton />
            </div>
            <div className="num">
              <Steps />
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
