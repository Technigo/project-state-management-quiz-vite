import { CurrentQuestionZustand } from "./components/CurrentQuestionZustand";
import { QuizProvider } from "./context/QuizContext";
import Header from './components/Header';
import Footer from './components/Footer';

export const App = () => {
  return (
    <div className="app-container">
      <QuizProvider>
        <div>
          <Header />
          <CurrentQuestionZustand />
        </div>
      </QuizProvider>
      <Footer />
    </div>
  );
};
