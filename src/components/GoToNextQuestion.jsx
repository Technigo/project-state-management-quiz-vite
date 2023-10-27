import "./buttons.css";

export const GoToNextQuestion = ({ onNext }) => {
  return <button className="next-button" onClick={onNext}>Next Question</button>;
};
