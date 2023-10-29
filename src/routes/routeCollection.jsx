import { HomePage } from "../pages/homepage/HomePage";
import { PageNotFound } from "../pages/pagenotfound/PageNotFound";
import { QuestionPage } from "../pages/questionpage/QuestionPage";
import { SummaryPage } from "../pages/summarypage/SummaryPage";
import { Route } from "react-router-dom";

export const routeCollection = (
  <>
    {/* Route to the Home page */}
    <Route path="/" element={<HomePage />} />

    {/* This route leads to the element that displays when a user has entered an incorrect link/address */}
    <Route path="*" element={<PageNotFound />} />

    {/* Dynamic route */}
    <Route path="/quest/:id" element={<QuestionPage />} />

    {/* Route to the summary page */}
    <Route path="/summary" element={<SummaryPage />} />
  </>
);
