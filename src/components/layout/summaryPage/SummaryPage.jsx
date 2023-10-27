//When the user has answered all the questions, they should get to a summary screen that tells them how many they got correct or incorrect.//

import useQuizStore from "../../../stores/useQuizStore";
import { AllText } from "../../UI/text/AllText";
import style from "./SummaryPage.module.css";

export const SummaryPage = () => {

    const { totalQuestions, totalCorrect } = useQuizStore((state) => ({
        // Calculate the total number of correct answers by filtering the answers array
        totalQuestions: state.questions.length,
        totalCorrect: state.answers.filter((answer) => answer.isCorrect).length,
    }));

    // Selects correct message based on the total number of correct answers (the players level of skill)
    let message;
    if (totalCorrect === 15) {
        message = "Brilliant! Congratulations! You've won the Quizzard Tournament with a perfect score of 15 points. You're a true wizard!";
    } else if (totalCorrect >= 10) {
        message = "Impressive Quizzardry! You've demonstrated impressive knowledge of the Harry Potter universe. Your journey into the magical world is well underway, and your grasp of the wizarding lore is commendable!";
    } else if (totalCorrect >= 5) {
        message = "Well on Your Way to becoming a Wizard! You're making great progress in your quest to master the enchanting world of Harry Potter. Keep going, and you'll soon become a formidable wizard. Your knowledge is growing!";
    } else {
        message = "Bloody hell! While you may have room for improvement, don't be disheartened! Even the most skilled wizards had to start somewhere. Continue your magical journey and consider befrending Hermione!";
    }

    return (
        <div className={style.summaryContainer}>
            <div className={style.h1}>
                <AllText header="Award Ceremony" />
                <AllText header="for the Qwizzard Tournament" />
            </div>
            <div className={style.textSummary}>
                <p className={style.subHeader}>
                    You answered {totalCorrect} out of {totalQuestions} questions correctly.
                </p>
                <p>
                    <AllText regularText={message} />
                </p>
            </div>
        </div>
    );
}
