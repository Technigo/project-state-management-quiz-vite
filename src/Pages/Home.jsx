import { Board } from "../components/board/Board";
// import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      {/* <Link to={`/questions/${quesiton.id}`}>{question.title}</Link> */}
      <h1>Welcome to our quiz game!</h1>
      <Board />
    </>
  );
};
