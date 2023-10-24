import useQuizStore from "../stores/useQuizStore";

const useCurrentQuestion = () => {
    const questions = useQuizStore((state) => state.questions);
    const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);
    const answerCurrentQuestion = useQuizStore((state) => state.answerCurrentQuestion);

    const currentQuestion = questions[currentQuestionIndex];

    return {
        currentQuestion,
        answerCurrentQuestion,
    };
};

export default useCurrentQuestion;
