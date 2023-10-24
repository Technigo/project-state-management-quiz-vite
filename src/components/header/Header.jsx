import useQuizStore from "../../stores/useQuizStore";
import styles from "./Header.module.css";

const Header = () => {
    const questions = useQuizStore((state) => state.questions);
    const hasCompleted = useQuizStore((state) => state.hasCompleted);
    const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);

    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Swede Quiz</h1>
            {!hasCompleted && (
                <div className={styles.counter}>
                    {`${currentQuestionIndex + 1} / ${questions.length}`}
                </div>
            )}
        </div>
    );
}

export default Header;
