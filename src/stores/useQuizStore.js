
// import { useEffect } from "react";
import { create } from "zustand";


// Define an array of quiz questions
const questions = [
  {
    id: 1,
    questionHeading: `Geography`,
    imageURL: `/sunrise.jpg`,
    questionText: `Which country is known as the Land of the Rising Sun?`,
    options: [`China`, `South Korea`, `Japan`, `Thailand`],
    correctAnswerIndex: 2,
  },
  {
    id: 2,
    questionHeading: `Heroes`,
    imageURL: `/superhero.jpg`,
    questionText: `What is the alter ego of the superhero who dresses like a bat and has a butler named Alfred?`,
    options: [`Superfly`, `Iron Man`, `Captain America`, `Batman`],
    correctAnswerIndex: 3,
  },
  {
    id: 3,
    questionHeading: `Music`,
    imageURL: `/music.jpg`,
    questionText: `Which rock band is famous for their hit song "Bohemian Rhapsody"?`,
    options: [`The Rolling Stones`, `The Beatles`, `Led Zeppelin`, `Queen`],
    correctAnswerIndex: 3,
  },
  {
    id: 4,
    questionHeading: `Biology`,
    imageURL: `/minne.png`,
    questionText: `Which of these creatures are known for its incredible memory?`,
    options: [`Goldfish`, `Elephant`, `Squirrel`, `Jellyfish`],
    correctAnswerIndex: 1,
  },
  {
    id: 5,
    questionHeading: `Science`,
    imageURL: `/science.jpg`,
    questionText: `What is the smallest unit of matter?`,
    options: [`Atom`, `Molecule`, `Cell`, `Quark`],
    correctAnswerIndex: 0,
  },
];

// Create a Zustand store named useQuizStore
// This is the main state store for the quiz. It contains the variable "questions", an array empty for the answers, a default index of 0 for the "currentQuestionIndex" and a default state of false for the variable "quizOver"
const useQuizStore = create((set, get) => ({
  // Initial state of the store
  questions,                  // Array of quiz questions
  answers: [],                // Array to store user's answers
  currentQuestionIndex: 0,    // Index of the current question being displayed
  quizOver: false,            // Flag to indicate if the quiz is over

  // Action: submitAnswer
  // This function takes a question id and an answer index, validates them, and then updates the answers array with the user's answer.
  submitAnswer: (questionId, answerIndex) => {
    const question = questions.find((q) => q.id === questionId);

    //WE HAVE SENT THE CORRECT QUESTION ID AND ANSWER INDEX HERE!!!!
    console.log("questionid", questionId)
    console.log("answerIndex", answerIndex)

    // Error handling
    // Throws an error if there is no question found
    if (!question) {
      throw new Error("Could not find the question! Check to make sure you are passing the question id correctly.");
    }

    // Throws an error if the answerIndex isn't in the array of possible answers
    if (question.options[answerIndex] === undefined) {
      throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`);
    }

    // State is updated for the answers array. The set-function takes a callback-function as an argument, which receives the current state as a parameter.
    // Update state with the user's answer
    set((state) => ({
       // Answers array is updated. Creates a new array that includes all the current answers, and adds a new answer to the end of it.
      answers: [
        ...state.answers,
         // Here comes the new answers object
        {
          questionId,
          answerIndex,
          question,
          answer: question.options[answerIndex], // the text of the selected answer, comes from the options using the answerIndex
          isCorrect: question.correctAnswerIndex === answerIndex, // A boolean indicating whether the selected answer is correct. Determined by comparing the answerIndex with the correctAnswerIndex in the question object.
        },
      ],
    }));
  },

  // Action: goToNextQuestion
  // This function increments the currentQuestionIndex to move to the next question. If there are no more questions, it sets quizOver to true.
  goToNextQuestion: () => {
    set((state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        // If the current question is the last one, mark the quiz as over

        //CHANGE: this is put in to make the 5 second timer to work. 
        // return { quizOver: true };
      } else {

        // CHANGE: this is put in to make the 5 second timer to work, 
        // state.reset();
        // Otherwise, move to the next question
        return { 
          currentQuestionIndex: state.currentQuestionIndex + 1,
        } 
      }
    });
  },

  // Action: restart
  // This function resets the answers array, currentQuestionIndex, and quizOver to their initial states.
  restart: () => {
    // Reset the quiz state
    set({
      answers: [],
      currentQuestionIndex: 0,
      quizOver: false,
    });
  },

  // STRECH TRY-------------------------------
  // This is variables and functions for the game time counter.
  // Seconds is a variable that holds the time, finished helps us know if the finish button has been pressed.
  // Counter holds the function declared inside the startCounter function. 
  seconds: 0,
  finished: false,
  counter: null,

  startCounter: () => {
    set({finished: false});
    //using setInterval to create timer; setting the seconds state to + 1 every second. 
    const counter = setInterval(() => {
      set((state) => ({ seconds: state.seconds +1}));
    }, 1000);
    set({counter});
    return counter; 
  },

  stopCounter: () => {
    // getting the counter function, clears the interval again.
    const { counter } = get();
    clearInterval(counter);
    set({ finished: true});
    console.log("hejcounter!");
  },

  // ANOTHER COUNTER TIMER going down from 5 seconds. 
  // THIS IS NOT FINISHED!!
  // isTimeOver is boolean that tells us if time is up, declared in Timer.jsx.
  // Reset is also a function from Timer.jsx, that we get here to be able to use it anywhere. 
  isTimeOver: false,
  reset: null,

  resetTime: (resetFunc) => {
    set({reset: resetFunc })
  },

  timeOver: () => {
    set({isTimeOver: true });
  },

}));

// Export the useQuizStore as the default export
export default useQuizStore;
