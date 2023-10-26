//I have added "TODO" but also comments so that I will remember why I structured the code like this. They do not need to stay when we hand in. *Elba

import useQuizStore from "../../../stores/useQuizStore";
import { AllText } from "../../UI/text/AllText";
import style from "./QuizQandA.module.css";

export const QuizMultichoise = () => {

    // Retrieve the list of questions from our state/store (initialized with data from data.js).
    const questions = useQuizStore(state => state.questions);

    // We get the current position (index) of the question that is being displayed. See useQuizStore.
    const currentQuestionIndex = useQuizStore(state => state.currentQuestionIndex);

    // Wer use the currentQuestionIndex to retrieve the active question from our list.
    const currentQuestion = questions[currentQuestionIndex];


    // Safety check: Ensure the current question exists, if not, display an error.
    if (!currentQuestion) {
        return <AllText regularText="Oh no! I could not find the current question!" />;
    }

    return (
        <div>
            <div className={style.quizMultichoise}>
                <AllText header="ANSWER OPTIONS:" />
                {/* Display each answer option for the current question. */}
                {currentQuestion.options.map((option, index) => (
                    <AllText key={index} regularText={option} />
                    // TODO: Elin, I think you can add buttons here for each option. 
                    // Please add some way to check the selected option against the correct answer when clicked. *Elba
                ))}
            </div>
            <div className={style.levelContainer}>
                <span className={style.levelText}>Level: </span>
                <img className={style.levelWand} src={currentQuestion.questionLevel} alt="Question Level" />
            </div>
        </div>
    );
};
