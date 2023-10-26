import { BrowserRouter, Routes } from "react-router-dom";
import { routing } from "./routes/routing";
// import { CurrentQuestionZustand } from "./components/CurrentQuestionZustand";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>{routing}</Routes>
    </BrowserRouter>
  );
};
