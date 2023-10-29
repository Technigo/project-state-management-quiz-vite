
import { StartBtn } from './StartBtn';

export const WelcomePage = () => {

  return (
    <div className='welcome-wrapper'>
      <h1>Savvy Savor Quiz</h1>
      <div className='welcome-info'>
        <p>Are you a real foodie?</p>
        <p>Take the quiz to find out!</p>
      </div>
      <StartBtn />
    </div>
  );
};