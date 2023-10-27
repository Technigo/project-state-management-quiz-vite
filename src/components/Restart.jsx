import "./buttons.css";

export const Restart = ({ onRestart }) => {
  return <div className="restart"><button className="restart-button" onClick={onRestart}>Restart Quiz</button></div>;
};
