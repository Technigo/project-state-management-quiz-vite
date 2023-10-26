import React from "react";
import { useStore } from "zustand";
import PropTypes from "prop-types"; // Import PropTypes

const Question = ({ question, onAnswer }) => {
    return (
        <React.fragment>
            <p>{question.questionText}</p>
            <div>
                {question.options.map((option, index) => (
                    <label key={index}>
                        <input
                            type="radio"
                            value={option}
                            onChange={() => onAnswer(option)}
                        />
                        {option}
                    </label>
                ))}
            </div>
        </React.fragment>
    );
};

// Define prop types for your component
Question.propTypes = {
    question: PropTypes.shape({
        questionText: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    onAnswer: PropTypes.func.isRequired,
};

export default Question;
