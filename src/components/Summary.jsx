import useQuizStore from "../stores/useQuizStore";

export const Summary = () => {
  const quizOver = useQuizStore((state) => state.quizOver);
  const restart = useQuizStore((state) => state.restart);
  return (
    <div className="summary-part">
      {/* create the summary part, show the how many questions that user has answered correct
        <p>You have answered 2 correct questions</p> 
        */}
      {/* show the picture when the user answered how many correct questions */}
      {/* restart button */}
      {quizOver && (
        <button className="restart-btn" onClick={restart}>
          Restart
        </button>
      )}
    </div>
  );
};
