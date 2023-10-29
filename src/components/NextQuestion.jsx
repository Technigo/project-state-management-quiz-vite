/* eslint-disable react/prop-types */
import  useQuizStore  from '../stores/useQuizStore';

export function NextQuestion({showSammary}) {
    const quizStore = useQuizStore(); //Initialize the store

    const handleNextQuestion = () => {
        quizStore.goToNextQuestion(); //Call the got to next question action 
    };

    return (
        <div>
            <button onClick={handleNextQuestion}>
                {showSammary ? "See your results!" : "Next Question"}
            </button>
        </div>
    );
}