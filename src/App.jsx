import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Import BrowserRouter and Route
import { Start } from "./components/Start"; // Import the StartComponent
import { CurrentQuestionZustand } from "./components/CurrentQuestionZustand";
import { QuizProvider } from "./context/QuizContext";
import Header from './components/Header';
import Footer from './components/Footer';

export const App = () => {
  return (
    <Router>
      <div className="app-container">
        <QuizProvider>
          <div>
            <Header />
            <Switch>
              <Route path="/quiz" component={CurrentQuestionZustand} />
              <Route path="/" component={Start} />
            </Switch>
          </div>
        </QuizProvider>
        <Footer />
      </div>
    </Router>
  );
};
