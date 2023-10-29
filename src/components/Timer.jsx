import { useTimer } from "use-timer";
import { useEffect } from "react";
import useQuizStore from "../stores/useQuizStore";

// This code defines a React component called 
// Timer that uses the "use-timer" library to 
// create a countdown timer. It counts down from 
// 5 seconds to 0 and, when it reaches 0, triggers 
// a callback to handle a time-over event. The timer 
// starts when the component mounts and can be reset and 
// started again as needed.

// NOT FINISHED!
// A few of the functions are put into the zustand file, to be able to use them
// as global states. Adjustments are made to the onTimeOver function, 
// and we are calling the reset and start in the resetTime function. 



export const Timer = () => {

    // UseTimer props
    const { time, start, reset, } = useTimer({
        timerType: "DECREMENTAL", // Timer counts down
        initialTime: 5, // Initial time of 5 seconds
        endTime: 0, // Countdown ends at 0
        onTimeOver: () => {
            useQuizStore.getState().timeOver(); // Handle time-over event
            console.log("BOOM"); // Log a message
        },
    });

    useEffect(() => {
        useQuizStore.getState().resetTime(() => {
            reset(); // Reset the timer
            start(); // Start the timer
        });
    }, [reset, start]);

    useEffect(() => {
        start(); // Start the timer immediately when the component mounts
    }, []);

    return <div>Time left: {time}</div>; // Render the time left
};

