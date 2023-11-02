import { Route } from "react-router-dom";
import { StartPage } from "../pages/StartPage/StartPage";
import { SummaryPage } from "../pages/SummaryPage/SummaryPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { QuestionPage } from "../pages/QuestionPage/QuestionPage";

export const routes = (
  <>
    {/* Page Routes */}
    <Route path="/" element={<StartPage />} />
    <Route path="/question-page" element={<QuestionPage />} />
    <Route path="/summary-page" element={<SummaryPage />} />
    <Route path="*" element={<ErrorPage />} />
  </>
);