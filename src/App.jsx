import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./Routes/Routes";
import { CurrentQuestionUseContext } from "./components/CurrentQuestionUseContext";
import { CurrentQuestionZustand } from "./components/CurrentQuestionZustand";
import { QuizProvider } from "./context/QuizContext";

export const App = () => {
  return (
    <QuizProvider>
      <BrowserRouter>
        <div>
          <CurrentQuestionUseContext />
          <CurrentQuestionZustand />
        </div>
        <Routes>{routes}</Routes>
      </BrowserRouter>
    </QuizProvider>
  );
};
