// import React, { useState } from "react";
// import Score from "./Score";
// import { CurrentQuestionZustand } from "../CurrentQuestionZustand/CurrentQuestionZustand";

// export const Quiz = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [correctCount, setCorrectCount] = useState(0);
//   const [totalCount, setTotalCount] = useState(0);

//   const handleAnswer = (isCorrect) => {
//     if (isCorrect) {
//       setCorrectCount(correctCount + 1);
//     }
//     setTotalCount(totalCount + 1);
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//   };

//   return (
//     <div>
//       <Score correctCount={correctCount} totalCount={totalCount} />
//       {/* <CurrentQuestionZustand
//         question={questions[currentQuestionIndex]}
//         onAnswer={handleAnswer} 
//       />  */}
//     </div>
//   );
// };

import React, { useState } from "react";
import Score from "../Score/Score";
// import { CurrentQuestionZustand } from "../CurrentQuestionZustand/CurrentQuestionZustand";

export const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setCorrectCount(correctCount + 1);
    }
    setTotalCount(totalCount + 1);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <React.Fragment>
      <div>
        <Score correctCount={correctCount} totalCount={totalCount} />
        {/* <CurrentQuestionZustand
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        /> */}
      </div>
    </React.Fragment>
  );
};
