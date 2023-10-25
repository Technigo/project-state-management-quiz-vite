import { useState } from "react";
import { Link } from "react-router-dom";
import "./StartPage.css";

export const StartPage = () => {
  // Define a state variable to keep track of whether the button is clicked
  const [startQuizClicked, setStartQuizClicked] = useState(false);

  const handleStartQuizClick = () => {
    // Set the state variable to indicate that the button is clicked
    setStartQuizClicked(true);
  };

  return (
    <div className="start-game-wrapper">
      Welcome to the Halloween Quiz!
      {startQuizClicked ? ( // Render the Link when the button is clicked
        <Link to="/question-page">
          <button className="startquiz-btn btn-layout">
            <div className="startquiz-btn-content">
              <span className="btn-text">Start quiz!</span>
            </div>
          </button>
        </Link>
      ) : (
        <button
          className="startquiz-btn btn-layout"
          onClick={handleStartQuizClick}
        >
          <div className="startquiz-btn-content">
            <span className="btn-text">Start quiz!</span>
          </div>
        </button>
      )}
    </div>
  );
};

// export const StartPage = () => {

//   const handleStartQuizClick = () => {
//     if (startquiz-btn.clicked)<Link to={`/question-page`}></Link>
//     } else {

//     }
//   };
//   return (
//     <div className="start-game-wrapper">
//       Welcome to the Halloween Quiz!
//       <button className="startquiz-btn btn-layout" onClick={handleStartQuizClick}>
//         <div className="startquiz-btn-content">
//           <span className="btn-text">Start quiz!</span>

//         </div>
//       </button>
//     </div>
//   );
// };
