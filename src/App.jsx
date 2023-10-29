import { BrowserRouter, Routes } from "react-router-dom";
import { routeCollection } from "./routes/routeCollection";

export const App = () => {
  return (
    <BrowserRouter>
      {/* Routes are taken from a list inside routeCollection */}
      <Routes>{routeCollection}</Routes>
    </BrowserRouter>
  );
};
