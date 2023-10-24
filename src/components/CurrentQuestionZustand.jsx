import useQuizStore from "../stores/useQuizStore";
import { useState } from "react";

export const CurrentQuestionZustand = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );

  const question = questions[currentQuestionIndex];
  const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState(""); // Feedback message

  const handleRestart = () => {
    // Call the Zustand action to restart the quiz
    useQuizStore.restart();

    // Clear the selected answer and feedback
    setSelectedAnswer(null);
    setFeedback("");
  };

  const handleAnswerSelection = (answerIndex) => {
    // Set the selected answer
    setSelectedAnswer(answerIndex);

    // Check if the selected answer is correct
    if (answerIndex === question.correctAnswerIndex) {
      setFeedback("This is right!");
    } else {
      setFeedback("This is not correct!");
    }
  };

  const renderButtonClass = (index) => {
    if (index === selectedAnswer) {
      return index === question.correctAnswerIndex ? "green-button" : "red-button";
    }
    return "";
  };

  const handleNextQuestion = () => {
    // Clear the feedback message
    setFeedback("");

    // Clear the selected answer
    setSelectedAnswer(null);

    // Call the Zustand action to go to the next question
    goToNextQuestion();
  };


  return (
    <div className="question-container">
      <h2>Using Zustand</h2>
      <h1>Question: {question.questionText}</h1>
      <div className="option-container">
        {
          question.options.map
            ((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelection(index)}
                className={renderButtonClass(index)}
              >
                {option}
              </button>
            ))}

      </div>
      <p>{feedback}</p> {/* Display the feedback message */}
      <div className="next-question">
        <button onClick={goToNextQuestion}>Next</button></div>

    </div>

  );
};








// import useQuizStore from "../stores/useQuizStore";
// import { useState } from "react";

// export const CurrentQuestionZustand = () => {
//   const questions = useQuizStore((state) => state.questions);
//   const currentQuestionIndex = useQuizStore(
//     (state) => state.currentQuestionIndex
//   );

//   const question = questions[currentQuestionIndex];
//   const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion);
//   // const submitAnswer = useQuizStore((state) => state.submitAnswer);

//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [feedback, setFeedback] = useState(""); // Feedback message
//   const handleRestart = () => {
//     console.log("Restart button clicked");
//     // Call the Zustand action to restart the quiz
//     useQuizStore.restart();

//     // Clear the selected answer and feedback
//     setSelectedAnswer(null);
//     setFeedback("");
//   };


//   const handleAnswerSelection = (answerIndex) => {
//     // Set the selected answer
//     setSelectedAnswer(answerIndex);

//     // Check if the selected answer is correct
//     if (answerIndex === question.correctAnswerIndex) {
//       setFeedback("This is right!");
//     } else {
//       setFeedback("This is not correct!");
//     }
//   };

//   const handleNextQuestion = () => {
//     // Clear the feedback message
//     setFeedback("");

//     // Call the Zustand action to go to the next question
//     goToNextQuestion();
//   };


//   return (
//     <div className="question-container">
//       <h2>Using Zustand</h2>
//       <h1>Question: {question.questionText}</h1>
//       <div className="option-container">
//         {question.options.map((option, index) => (
//           <button
//             key={index}
//             onClick={() => handleAnswerSelection(index)}
//           >
//             {option}
//           </button>
//         ))}

//       </div>
//       <p>{feedback}</p> {/* Display the feedback message */}
//       <div className="next-question">
//         <button onClick={goToNextQuestion}>Next</button></div>
//       <div className="restart-button">
//         <button onClick={handleRestart}>Restart</button>
//       </div>



//     </div>

//   );
// };
