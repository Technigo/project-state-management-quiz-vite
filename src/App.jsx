import useQuizStore from "./stores/useQuizStore";
import Header from "./components/header/Header";
import Summary from "./components/summary/Summary";
import Question from "./components/question/Question";

export const App = () => {
    const hasCompleted = useQuizStore((state) => state.hasCompleted);
    return (
        <div className="">
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
