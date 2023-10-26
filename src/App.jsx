//import { QuestionPage } from "./pages/QuestionPage/QuestionPage";
import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/routes";

export const App = () => {
  return (
    <BrowserRouter>
      {/* The Routes component renders the defined routes in the application. 
           The 'routes' variable contains the route configuration. */}
      <main className="main-wrapper">
        <Routes>{routes}</Routes>
      </main>
    </BrowserRouter>
  );
};
