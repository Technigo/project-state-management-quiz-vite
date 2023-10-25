import "./SummaryPage.css";
//import { useQuizStore } from "../../stores/useQuizStore";

export const SummaryPage = () => {
  //const quizOver = useQuizStore((state) => state.quizOver);
  //const score = useQuizStore((state) => state.score);
  //console.log(quizOver);

  return (
    <div className="summary-wrapper">
      Summary Page
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quis
        recusandae reiciendis fugiat accusantium obcaecati laudantium iure
        adipisci delectus, est nobis consequuntur debitis soluta asperiores eum
        vero! Maxime, a. Dolorum earum nisi quos delectus laboriosam animi
        impedit cum enim magnam labore iusto libero, culpa sint rerum illum
        saepe minima. Laboriosam rerum voluptatibus unde quis necessitatibus
        itaque enim fuga quae? Maiores laboriosam magnam odit numquam,
        distinctio qui ipsum quisquam, dolore voluptas doloremque accusamus
        suscipit deserunt id excepturi beatae quo aliquam nobis, at fugiat
        itaque neque soluta mollitia. Delectus, facere placeat ipsum sed eius
        nihil accusantium autem dolorum optio odit assumenda eaque!
      </p>
    </div>
  );
};

//   <div className="summary-wrapper">
//     {quizOver ? (
//       <>
//         <h2>Quiz Completed!</h2>
//         <p>Your Score: {score}</p>
//         {/* Add more summary content based on quiz data? */}
//       </>
//     ) : (
//       <>
//         <h2>Quiz Incomplete</h2>
//         <p>Please complete the quiz to view the summary.</p>
//       </>
//     )}
//   </div>
// );
