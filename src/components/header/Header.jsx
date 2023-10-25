import useQuizStore from "../../stores/useQuizStore"; // Custom hook for accessing quiz state

const Header = () => {
    // Using the custom hook `useQuizStore` to access the quiz state
    const questions = useQuizStore((state) => state.questions);
    const hasCompleted = useQuizStore((state) => state.hasCompleted);
    const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);

    return (
        <div className="">
            <h1 className="">Swede Quiz</h1>
            {!hasCompleted && (
                <div className="">
                    {`${currentQuestionIndex + 1} / ${questions.length}`} {/* Rendering the question count */}
                </div>
            )}
        </div>
    );
}

export default Header; // Exporting the Header component
