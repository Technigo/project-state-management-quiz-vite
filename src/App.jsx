import { CurrentQuestionZustand } from "./components/CurrentQuestionZustand/CurrentQuestionZustand";

import { QuestionCounter } from "./components/QuestionCounter/QuestionCounter";
import { Summary } from "./components/Summary/Summary";

export const App = () => {
  return (
    <div>
      <CurrentQuestionZustand />

      <Summary />
      <QuestionCounter totalQuestions={5} />
    </div>
  );
};
