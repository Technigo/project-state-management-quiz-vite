import { BrowserRouter, Routes } from "react-router-dom";
import { routing } from "./routes/routing";
import { routeCollection } from "./routes/routeCollection";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>{routeCollection}</Routes>
    </BrowserRouter>
  );
};
