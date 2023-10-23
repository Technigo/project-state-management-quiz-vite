import useQuizStore from "../stores/useQuizStore";

export const SummaryPage = () => {
    const answers = useQuizStore((state) => state.answers);
    const questions = useQuizStore((state) => state.questions);
  
    return (
      <div>
        <h1>Quiz Summary</h1>
        {questions.map((question, index) => (
          <div key={question.id}>
            <h3>{question.questionText}</h3>
            <p>Your Answer: {question.options[answers[index]]}</p>
          </div>
        ))}
        {}
      </div>
    );
  };
  