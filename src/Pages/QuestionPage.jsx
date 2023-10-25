import { Questions } from "../components/Questions";
import { useParams } from "react-router-dom";

export const QuestionPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <h1> QUESTION </h1>
      <Questions param={id} />;
    </>
  );
};
