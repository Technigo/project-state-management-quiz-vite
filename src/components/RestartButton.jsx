import useQuizStore from '../stores/useQuizStore';



export function RestartButton() {
    const { restart }  = useQuizStore(); //Initialize the store

    const handleRestart = () => {
        restart(); //Call the restart action to reset the quiz
    };

    return (
        <div>
            <button onClick={handleRestart}>
                Restart Quiz
            </button>
        </div>
    );
}