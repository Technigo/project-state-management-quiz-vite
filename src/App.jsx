import { CurrentQuestionZustand } from "./components/CurrentQuestionZustand/CurrentQuestionZustand";
import { Header } from "./components/Header/Header";

export const App = () => {
  return (
    // <QuizProvider>
    <div>
      <Header />
      <CurrentQuestionZustand />
    </div>
    // </QuizProvider>
  );
};
