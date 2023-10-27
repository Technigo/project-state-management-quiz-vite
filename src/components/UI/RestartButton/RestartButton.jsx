import useQuizStore from "../../../../stores/useQuizStore";
import { Link } from "react-router-dom";
import style from "./RestartButton.css"


export const RestartButton = () => {

const handleRestart = () => {
    useQuizStore.getState().restart();
};

return (
    <div className="button-container">
        <Link to="/">
            <button type="button" onClick=  {handleRestart}>Restart Quiz!</button>
        </Link>
    </div>
    )
}

