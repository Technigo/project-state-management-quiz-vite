import useQuizStore from "../../stores/useQuizStore";

// Defining a functional component named Header
const Header = () => {
    // Accessing 'questions' and 'currentQuestionIndex' from the quiz state using the custom hook
    const questions = useQuizStore((state) => state.questions);
    const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);

    return (
        <div className="flex place-content-between items-center mb-4">
            <h1 className="text-2xl font-bold">Swede Quiz</h1>
            <div className="bg-yellow-500 text-gray-900 p-2 rounded-lg text-sm font-bold">
                {`${currentQuestionIndex + 1} / ${questions.length}`}
            </div>
        </div>
    );
}

export default Header;
