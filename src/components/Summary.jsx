import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import  { RestartButton } from "./RestartButton";
import useQuizStore from "../stores/useQuizStore";

export const Summary = () => {
    const answers = useQuizStore((state) => state.answers);
    const numberOfCorrectAnswers = answers.filter((answer) => answer.isCorrect).length;
    const { width, height } = useWindowSize();
    return (
        <div className="summary">
            <h2>Savvy Savor</h2>
            <h3>Congratulations!</h3>
            <p>You scored {numberOfCorrectAnswers}/7 🌟</p>
            <RestartButton />
            <Confetti width={width} height={height} />
        </div>
    );
};