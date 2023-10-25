import { useState } from "react";
import { Link } from "react-router-dom";
import "./StartPage.css";

export const StartPage = () => {
  // Define a state variable to keep track of whether the button is clicked
  const [startQuizClicked, setStartQuizClicked] = useState(false);

  const handleStartQuizClick = () => {
    if (!startQuizClicked) {
      setStartQuizClicked(true);
    }
  };

  const startButton = (
    <Link to="/question-page">
      <button className="startquiz-btn btn-layout">
        <div className="startquiz-btn-content">
          <span className="btn-text">Start quiz!</span>
        </div>
      </button>
    </Link>
  );

  return (
    <div className="start-game-wrapper">
      Creep and Crawl, Answer them All
      {startQuizClicked ? (
        startButton
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

//   const handleStartQuizClick = () => {
//     // Set the state variable to indicate that the button is clicked
//     setStartQuizClicked(true);
//   };

//   return (
//     <div className="start-game-wrapper">
//       Creep and Crawl, Answer them All
//       <Link
//         to={startQuizClicked ? "/question-page" : ""}
//         onClick={handleStartQuizClick}
//       >
//         <button className="startquiz-btn btn-layout">
//           <div className="startquiz-btn-content">
//             <span className="btn-text">Start quiz!</span>
//           </div>
//         </button>
//       </Link>
//     </div>
//   );
// };

//   return (
//     <div className="start-game-wrapper">
//       Creep and Crawl, Answer them All
//       <Link to={startQuizClicked ? "/question-page" : ""}>
//         <button
//           className="startquiz-btn btn-layout"
//           onClick={() => setStartQuizClicked(true)}
//         >
//           <div className="startquiz-btn-content">
//             <span className="btn-text">Start quiz!</span>
//           </div>
//         </button>
//       </Link>
//     </div>
//   );
// };

//   const handleStartQuizClick = () => {
//     // Set the state variable to indicate that the button is clicked
//     setStartQuizClicked(true);
//   };

//   return (
//     <div className="start-game-wrapper">
//       Creep and Crawl, Answer them All
//       {startQuizClicked ? ( // Render the Link when the button is clicked
//         <Link to="/question-page">
//           <button className="startquiz-btn btn-layout">
//             <div className="startquiz-btn-content">
//               <span className="btn-text">Start quiz!</span>
//             </div>
//           </button>
//         </Link>
//       ) : (
//         <button
//           className="startquiz-btn btn-layout"
//           onClick={handleStartQuizClick}
//         >
//           <div className="startquiz-btn-content">
//             <span className="btn-text">Start quiz!</span>
//           </div>
//         </button>
//       )}
//     </div>
//   );
// };
