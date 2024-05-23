import {createBrowserRouter} from "react-router-dom"
import LandingPage from "../pages/LandingPage"


export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element:<LandingPage/>
    }
])