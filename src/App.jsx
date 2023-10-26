import { CurrentQuestionZustand } from "./components/CurrentQuestionZustand/CurrentQuestionZustand";
import { Header } from "./components/Header/Header";
import { ProcessAnswer } from "./components/ProcessAnswer/ProcessAnswer";
import { QuestionCounter } from "./components/QuestionCounter/QuestionCounter";

export const App = () => {
  return (
    <div>
      <Header />
      <CurrentQuestionZustand />
      <QuestionCounter />
      <ProcessAnswer />
    </div>
  );
};
