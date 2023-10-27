//When the user has answered all the questions, they should get to a summary screen that tells them how many they got correct or incorrect.//

import { AllText } from "../../UI/text/AllText";
import style from "./SummaryPage.module.css";

export const SummaryPage = () => {

    return (
        <div className={style.summaryContainer}>
            <AllText header="Brilliant Effort!" />
            <AllText regularText="You answered X out of X questions correctly." />
            <AllText regularText="Message to be displayed" />
        </div>
    );
};

/*
import useQuizStore from './stores/useQuizStore.js';
//import style from '/SummaryPage.module.css';

export const SummaryPage = () => {
    // Access the Zustand store state with useQuizStore
    const { totalQuestions, totalCorrect } = useQuizStore((state) => ({
        totalQuestions: state.questions.length,
        totalCorrect: state.answers.filter((answer) => answer.isCorrect).length,
    })); // Calculate the total number of correct answers by filtering the answers array

    // Determine the appropriate message based on the total number of correct answers
    let message;
    if (totalCorrect === 15) {
        message = "Congratulations! You've won the Quizzard Tournament with a perfect score of 15 points. You're a true wizard!";
    } else if (totalCorrect >= 10) {
        message = "Impressive Quizzardry! You've demonstrated impressive knowledge of the Harry Potter universe. Your journey into the magical world is well underway, and your grasp of the wizarding lore is commendable!";
    } else if (totalCorrect >= 5) {
        message = "Well on Your Way to becoming a Wizard! You're making great progress in your quest to master the enchanting world of Harry Potter. Keep going, and you'll soon become a formidable wizard. Your knowledge is growing!";
    } else {
        message = "Bloody hell! While you may have room for improvement, don't be disheartened! Even the most skilled wizards had to start somewhere. Continue your magical journey and consider befrending Hermione!";
    }

    return (
        <div>
            <h2>Brilliant Effort!</h2>
            <p>You answered {totalCorrect} out of {totalQuestions} questions correctly.</p>
            <p>{message}</p>
        </div>
    );
};*/
