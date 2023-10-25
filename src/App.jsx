import { QuestionPage } from "./pages/QuestionPage/QuestionPage";
import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/routes";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <QuestionPage />

        {/* The Routes component renders the defined routes in the application. 
           The 'routes' variable contains the route configuration. */}
        <Routes>{routes}</Routes>
      </div>
    </BrowserRouter>
  );
};
