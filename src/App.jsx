import { CurrentQuestionZustand } from "./components/CurrentQuestionZustand/CurrentQuestionZustand";
import { Header } from "./components/Header/Header";
import { ProcessAnswer } from "./components/ProcessAnswer/ProcessAnswer";
import { QuestionCounter } from "./components/QuestionCounter/QuestionCounter";
import styles from "./App.module.css"
// import { Quiz } from "./components/Quiz/Quiz"; // Note the relative path and filename


export const App = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.appContainer}>
        <Header />
        <div className={styles.quizWrapper}>
          <div className={styles.currentQuestion}>
            <CurrentQuestionZustand />
          </div>
            <ProcessAnswer />
          <QuestionCounter />
        </div>
      </div>
      {/* <Quiz />  */}
    </div>
  );
};
