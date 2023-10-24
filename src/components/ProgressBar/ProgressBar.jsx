import "./ProgressBar.css";
// import { useQuizStore } from "../../stores/useQuizStore";

export const ProgressBar = () => {
  return (
    <div className="progress-wrapper">
      <span>1/10</span>
      <div className="progress-bar">
        <span className="bar"></span>
      </div>
    </div>
  );
};
