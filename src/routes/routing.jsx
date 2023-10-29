import { Route } from "react-router-dom";
import { Summary } from "../pages/SummaryPage";
import { HomePage } from "../pages/HomePage";
import { PageNotFound } from "../pages/pagenotfound/PageNotFound";
import { QuestionPage } from "../pages/QuestionPage";

export const routing = (
  <>
    <Route path="/" element={<HomePage />} />
    {/* Dynamic route */}
    <Route path="/quest/:id" element={<QuestionPage />} />
    <Route path="/summary" element={<Summary />} />
    {/* This route leads to the element that displays when a user has entered an incorrect link/address */}
    <Route path="*" element={<PageNotFound />} />
  </>
);
