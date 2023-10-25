import { Questions } from "../questions/Questions";
import { QuestionPage } from "../../pages/QuestionPage";
import { Link } from "react-router-dom";
import useQuestions from "../../stores/useQuestions";
import useQuizStore from "../../stores/useQuestions";
import "./board.css";

export const Board = () => {
  const { answers } = useQuizStore();
  console.log(answers);
  // const [answers, setAnswers] = useState({
  //   q1: false,
  //   q2: true,
  //   q3: true,
  //   q4: false,
  //   q5: true,
  //   q6: false,
  //   q7: true,
  //   q8: false,
  //   q9: true,
  // });
  const questions = useQuestions((state) => state.questions);

  return (
    <>
      <div className="board-container">
        {questions.map((question) => (
          <div className="a-question" key={question.id}>
            <Link to={`/quest/${question.id}`}>
              <button className="board-question-btn">
                <img src={question.qImage} />
                {console.log(question.qImage)}
              </button>
            </Link>
          </div>
        ))}
        <div className="a-question">
          <Link to={`/questions/random`} element={<QuestionPage />}>
            {/* <Link to={`/questions/${id}`}> */}
            <button className="board-question-btn">
              <img
                src={
                  "https://article-imgs.scribdassets.com/7hvqm6oa9s9t814m/images/file5NOI67ER.jpg"
                }
              />
              {/* {answers.q1 ? (
                <div className="circle"></div>
              ) : (
                <div className="x">❌</div>
              )} */}
            </button>
          </Link>
        </div>

        <div className="a-question">
          <Link to={`/questions/random`}>
            <button className="board-question-btn">
              <img
                src={
                  "https://article-imgs.scribdassets.com/7hvqm6oa9s9t814m/images/file5NOI67ER.jpg"
                }
              />
              {/* {answer === "circle" && <div className="circle">&#9675;</div>} */}
              {/* {answers.q2 ? (
                <div className="circle"></div>
              ) : (
                <div className="x">❌</div>
              )} */}
            </button>
          </Link>
        </div>
        <div className="a-question">X</div>
        <div className="a-question">O</div>
        <div className="a-question">X</div>
        <div className="a-question">O</div>
        <div className="a-question">X</div>
        <div className="a-question">O</div>
        <div className="a-question">
          <Link to={`/quest/${questions[0].id}`} element={<QuestionPage />} />X
        </div>
      </div>
      <button onClick={console.log(answers)}>log answers</button>
    </>
  );
};
