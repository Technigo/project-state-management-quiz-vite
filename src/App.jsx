import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routing } from "./routes/routing";
import { Home } from "./pages/Home";
import { Summary } from "./pages/SummaryPage";
import { PageNotFound } from "./pages/pagenotfound/PageNotFound";
import { QuestionPage } from "./pages/QuestionPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routing}
        {/* <Route path="/" element={<Home />} />
        <Route path="/quest/:id" element={<QuestionPage />} />
        <Route path="/summary" element={Summary} />
        <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
