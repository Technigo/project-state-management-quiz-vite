import useQuizStore from '../stores/useQuizStore';
import { NextQuestion } from './NextQuestion';

export const FeedbackPage = () => {
  const answers = useQuizStore((state) => state.answers);
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);
  const answer = answers[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === questions.length - 1


  const feedbackText = answer.isCorrect
    ? "That's correct!"
    : (
      <>
        <p>Ooops!</p>
        <p>You almost got it right!</p>
        <p>The correct answer is: {answer.question.options[answer.question.correctAnswerIndex]}</p>
      </>
    );



  return (
    <div className='feedback-wrapper'>
      <div className='answer-img'>
        <img className="circle-img" src={answer.question.imgURL} alt="Question Image" />
      </div>
      <div className='feedback-info'>
        <div>{feedbackText}</div>
        <NextQuestion showSammary={isLastQuestion} />
      </div>
    </div>
  );
};