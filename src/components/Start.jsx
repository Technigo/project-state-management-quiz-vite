import React from "react";
import { useNavigate } from "react-router-dom"; // 

const Start = () => {
    const navigate = useNavigate(); // Get the history object

    const startQuiz = () => {
        navigate.push("/quiz"); // You'll need to define a route for "/quiz" in your routing setup
    };

    return (
        <div>
            <h1>Welcome to the Quiz!</h1>
            <button onClick={startQuiz}>Start</button>
        </div>
    );
};

export default Start;
