import { Questions } from "../components/questions/Questions";
import { useParams } from "react-router-dom";

export const QuestionPage = () => {
  const { id } = useParams();
  return (
    <>
      <Questions param={id} />
    </>
  );
};
