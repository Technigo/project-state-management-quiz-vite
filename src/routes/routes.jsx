// Routing component with paths

import { Route } from "react-router-dom"

import { Start } from "../pages/Start"
import { Questions } from "../pages/Questions";
import { Summary } from "../pages/Summary";


export const routes = (
    <>
     <Route path="/" element={<Start />}></Route>
     <Route path="/questions" element={<Questions />}> </Route>
     <Route path="/summary" element={<Summary />}></Route>
    </>
)

