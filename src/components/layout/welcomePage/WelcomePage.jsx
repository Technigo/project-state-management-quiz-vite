//import { useStore } from './store'; //Will I need this?
import { AllText } from "../../UI/text/AllText";
import style from "./WelcomePage.module.css"

export const WelcomePage = () => {


    return (
        <div className={style.welcome}>
            <h3 className={style.h3}>Welcome to the</h3>
            <h1 className={style.h1}>Harry Potter</h1>
            <h2 className={style.h2}>Quizard Tournament</h2>
            <div className={style.textWelcome}>
                <AllText regularText="Delve into the shadows of the Harry Potter realm in a gripping quiz duel. Chosen by the Goblet of Fire, your wits will be tested. Bound by its ancient magic and a pact sealed in blood, there's no turning back. Strive to become the Quizzard Champion and claim undying glory." />
            </div>
            <p className={style.visualForBtn}> START QUIZ BUTTON HERE?</p>
        </div >
    );
};
