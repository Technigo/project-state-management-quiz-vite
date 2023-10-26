import useQuizStore from "./stores/useQuizStore";
import Header from "./components/header/Header";
import Summary from "./components/summary/Summary";
import Question from "./components/question/Question";

export const App = () => {
    // Retrieve the completion status from the quiz store
    const hasCompleted = useQuizStore((state) => state.hasCompleted);

    return (
        <div className="max-w-lg mx-auto px-4 py-4">
            <Header />
            {/* Conditional rendering based on quiz completion */}
            {!hasCompleted && (
                // Display the current question if the quiz is not completed
                <Question />
            )}
            {hasCompleted && (
                // Display the summary if the quiz is completed
                <Summary />
            )}
        </div>
    );
};
