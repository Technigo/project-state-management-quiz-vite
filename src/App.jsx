import { CurrentQuestionZustand } from "./components/CurrentQuestionZustand";
import { SubmitAnswer } from "./components/SubmitAnswer/SubmitAnswer";
import { Summary } from "./components/Summary/Summary";

export const App = () => {
  return (
    <div>
      <CurrentQuestionZustand />
      <SubmitAnswer />
      <Summary />
    </div>
  );
};
