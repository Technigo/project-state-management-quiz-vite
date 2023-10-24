import { Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { QuestionPage } from "../Pages/QuestionPage";
import { SummaryPage } from "../Pages/SummaryPage";

export const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/quest" element={<QuestionPage />} />
    <Route path="/summary" element={<SummaryPage />} />
  </>
);
