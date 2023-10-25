import { BrowserRouter, Routes } from "react-router-dom";
import { routing } from "./routes/routing";
// import { CurrentQuestionZustand } from "./components/CurrentQuestionZustand";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>{routing}</Routes>
    </BrowserRouter>
  );
};
