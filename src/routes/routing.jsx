import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { QuestionPage } from "../pages/QuestionPage";
import { SummaryPage } from "../pages/SummaryPage";
import { PageNotFound } from "../pages/pagenotfound/PageNotFound";

export const routing = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/quest/:id" element={<QuestionPage />} />
    <Route path="/summary" element={<SummaryPage />} />
    {/* This route leads to the  element that displays when a user has entered an incorrect link/address */}
    <Route path="*" element={<PageNotFound />} />
  </>
);
