import { QuestionsCard } from "../../components/QuestionsCard/QuestionsCard";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { NextQuestion } from "../../components/NextQuestion/NextQuestion";
import "./QuestionPage.css";

// Main componentpage for displaying all the Quizcontent, like progressbar, card that holds the questions and the functionality to move on to the next question
export const QuestionPage = () => {
  return (
    <section className="questions-wrapper">
      <ProgressBar />
      <QuestionsCard />
      <NextQuestion />
    </section>
  );
};
