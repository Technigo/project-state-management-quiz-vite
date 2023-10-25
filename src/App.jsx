import useQuizStore from "./stores/useQuizStore";
import Header from "./components/header/Header";
import Summary from "./components/summary/Summary";
import Question from "./components/question/Question";

export const App = () => {
    const hasCompleted = useQuizStore((state) => state.hasCompleted);
    return (
        <div className="max-w-lg mx-auto px-4 py-4">
            <Header />
            {!hasCompleted && (
                <Question />
            )}
            {hasCompleted && (
                <Summary />
            )}
        </div>
    );
};
