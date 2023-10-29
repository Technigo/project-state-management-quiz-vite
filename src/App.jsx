import { BrowserRouter, Routes } from "react-router-dom";
import { routing } from "./routes/routing";

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
