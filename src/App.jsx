import useQuizStore from "./stores/useQuizStore";
import { CurrentQuestionZustand } from "./components/CurrentQuestionZustand/CurrentQuestionZustand";

import { QuestionCounter } from "./components/QuestionCounter/QuestionCounter";
import { Summary } from "./components/Summary/Summary";

export const App = () => {
  const quizOver = useQuizStore((state) => state.quizOver);

  return (
    <div>
      {quizOver ? (
        <>
          <Summary />
        </>
      ) : (
        <>
          <CurrentQuestionZustand />
          <QuestionCounter totalQuestions={5} />
        </>
      )}
    </div>
  );
};
