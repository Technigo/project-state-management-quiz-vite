// This component is mounted in the page 'Questions.jsx'

import useQuizStore from "../stores/useQuizStore";
import "./CurrentQuestion.css";

export const CurrentQuestionZustand = () => {
  // Retrieve the questions and current question index from the quiz store 
    const questions = useQuizStore((state) => state.questions);
    const currentQuestionIndex = useQuizStore(
        (state) => state.currentQuestionIndex
    );

    // Get the current questions based on the current index
    const question = questions[currentQuestionIndex];

    // Check if a valid question was found; if not, display an error message
    if (!question) {
        return <h1>Oh no! I could not find the current question!</h1>;
    }

    // Render the current question and question number
    return (
        <div className="question-card">
            
            <div className="question-heading-wrapper">
                <h1>{question.questionHeading}</h1>
                <p>Question {currentQuestionIndex + 1}/5</p>
            </div>
            <img src={question.imageURL} alt="Sunrise" />
            <p>{question.questionText}</p>
            
        </div>
    );
};
