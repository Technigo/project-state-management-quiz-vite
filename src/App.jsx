import { CurrentQuestionZustand } from "./components/CurrentQuestionZustand";
import { QuizProvider } from "./context/QuizContext";
import Footer from './components/Footer';

export const App = () => {
  return (
    <div className="app-container">
      <QuizProvider>
        <div>
          <CurrentQuestionZustand />
        </div>
      </QuizProvider>
      <Footer />
    </div>
  );
};
