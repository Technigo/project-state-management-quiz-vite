// Page for the summary which is shown after all questions are answered. This component is mounted in the page 'Summary.jsx'

import useQuizStore from "../stores/useQuizStore";

export const SummaryResponse = () => {
    //Retrieve the user's answers from the quiz store
    const answers = useQuizStore((state) => state.answers);

    //Creating a variable to hold number of correct answers
    //Reduce users isCorrect from every object in the array and combines the incorrect to a single result
    // Calculate the sum of correct answers from an array of answer objects
    const sumOfCorrectAnswers = answers.reduce((total, answer) => {
        // Check if the current answer is correct, if it is correct, add 1 to the total; otherwise, add 0
        return total + (answer.isCorrect ? 1 : 0);
    }, 0);

    // Log to see the total number of correct answers to the console
    console.log("Total Correct Answers:", sumOfCorrectAnswers);

    // Initalizing a variable to store the summary response
    let summaryHeading = "";
    let summaryParagraph = "";
    //Determines the summary response based on the number of correct answers
    if (sumOfCorrectAnswers === 0 || sumOfCorrectAnswers === 2) {
        summaryHeading = `You’re a real winner!`;
        summaryParagraph = `Not! You got ${sumOfCorrectAnswers} questions right...Better luck next time!`;
        
    } else if(sumOfCorrectAnswers === 1 ) {
        summaryHeading = `You’re a real winner!`;
        summaryParagraph= `Not! You only got ${sumOfCorrectAnswers} question right... Better luck next time!`;
    } else if (sumOfCorrectAnswers === 3) {
        summaryHeading =`Almost there!`;
        summaryParagraph= `You got ${sumOfCorrectAnswers} questions right. But... try again, we think you can do better!`;
    } else if (sumOfCorrectAnswers === 4) {
        summaryHeading = "Great!";
        summaryParagraph = `You almost got them all! You got ${sumOfCorrectAnswers} of 5 questions right. Keep on trying! `;
    } else {
        summaryHeading = "Amazing!";
        summaryParagraph = `You must be a genius! You got all ${sumOfCorrectAnswers} questions right!`;
    }

    const seconds = useQuizStore((state) => state.seconds);

    // Render the summary response and the number of correct answers
    return (
      <div className="summary-card">
        <h1>{summaryHeading}</h1>
        <p>{summaryParagraph}</p>
        <p>Your time was {seconds} seconds!</p>
      </div>
    );
};
