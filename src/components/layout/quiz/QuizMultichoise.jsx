import useQuizStore from "../../../stores/useQuizStore";
import { AllText } from "../../UI/text/AllText";
import style from "./QuizQandA.module.css";

export const QuizMultichoise = () => {

    const questions = useQuizStore(state => state.questions);
    const currentQuestionIndex = useQuizStore(state => state.currentQuestionIndex);
    const currentQuestion = questions[currentQuestionIndex];

    //Added these 3 const to be able to display the right answer *Elin
    const correctAnswerIndex = currentQuestion.correctAnswerIndex;
    //console.log("correct:", correctAnswerIndex);
    const selectedAnswerIndex = useQuizStore((state) => state.answers[currentQuestionIndex]?.answerIndex);
    const isAnswerCorrect = useQuizStore((state) => state.answers[currentQuestionIndex]?.isCorrect);

    const handleOptionClick = (index) => {
        //console.log("Option clicked:", index);
        if (selectedAnswerIndex !== undefined) return;
        useQuizStore.getState().submitAnswer(currentQuestion.id, index);
    };

    // Safety check: Ensure the current question exists, if not, display an error.
    if (!currentQuestion) {
        return <AllText regularText="Oh no! I could not find the current question!" />;
    }

    return (
        <>
            <div className={style.quizMultichoise}>
                <AllText header="ANSWER OPTIONS:" />
                {/* Display each answer option for the current question. */}
                {currentQuestion.options.map((option, index) => (

                    <button
                        key={index}
                        type="button"
                        onClick={() => handleOptionClick(index)}

                        className={`${style.ButtonNext} ${selectedAnswerIndex === index
                            ? isAnswerCorrect
                                ? style.correct
                                : style.incorrect
                            :
                            index === correctAnswerIndex && selectedAnswerIndex !== undefined
                                ? style.correct
                                : ""
                            }`
                        } >
                        {option}
                    </button>

                ))}
            </div>
            <div className={style.levelContainer}>
                <span className={style.levelText}>Level: </span>
                <img className={style.levelWand} src={currentQuestion.questionLevel} alt="Question Level" />
            </div>
        </>
    );
};
