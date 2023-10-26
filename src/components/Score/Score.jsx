import React from "react";
import PropTypes from "prop-types";
// import { useStore } from "zustand";


const Score = ({ correctCount, totalCount }) => {
    return (
        <React.Fragment>
        <div>
            <p>
                Your Score: {correctCount} out of {totalCount} correct
            </p>
        </div>
        </React.Fragment>
    );
};

Score.propTypes = {
    correctCount: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,
};

export default Score;

