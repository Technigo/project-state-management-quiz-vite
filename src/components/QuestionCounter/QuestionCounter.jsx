import useStore from "../../stores/useQuizStore"; 


//this component just displays the current question count

export const QuestionCounter = () => {

  const { currentQuestionIndex } = useStore();


  return (
    <div>
      <p>
        CounterComponent: display the question count: {currentQuestionIndex + 1}
        of 5
      </p>
    </div>
  );
};
