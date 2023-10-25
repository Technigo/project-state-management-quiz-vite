import { QuestionsCard } from "../../components/QuestionsCard/QuestionsCard";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { NextQuestion } from "../../components/NextQuestion/NextQuestion";
import "./QuestionPage.css";

export const QuestionPage = () => {
  return (
    <section className="questions-wrapper">
      <ProgressBar />
      <QuestionsCard />
      <NextQuestion />
    </section>
  );
};
