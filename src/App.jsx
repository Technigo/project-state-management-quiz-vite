import { CurrentQuestionZustand } from "./components/CurrentQuestionZustand";
import { QuizProvider } from "./context/QuizContext";
import Footer from './components/Footer';

export const App = () => {
  return (
    <QuizProvider>
      <div>
        <CurrentQuestionZustand />
      </div>
      <Footer />
    </QuizProvider>
  );
};
