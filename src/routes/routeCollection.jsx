import { HomePage } from "../pages/homepage/HomePage";
import { PageNotFound } from "../pages/pagenotfound/PageNotFound";
import { QuestionPage } from "../pages/questionpage/QuestionPage";
import { SummaryPage } from "../pages/summarypage/SummaryPage";
import { Route } from "react-router-dom";

export const routeCollection = () => {
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="*" element={<PageNotFound />} />
    <Route path="/quest/:id" element={<QuestionPage />} />
    <Route path="/summary" element={<SummaryPage />} />
  </>;
};
