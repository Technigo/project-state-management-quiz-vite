import useStore from "../../stores/useQuizStore"; //

//this component just displays the current question count

export const CounterComponent = () => {
  const { count, increment, currentQuestionIndex } = useStore();

  return (
    <div>
      <p>
        CounterComponent: display the question count: {currentQuestionIndex} of
        5
      </p>
    </div>
  );
};
