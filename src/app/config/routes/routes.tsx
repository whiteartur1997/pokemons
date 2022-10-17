import MainPage from "pages/MainPage/MainPage";
import DetailsPage from "pages/DetailsPage/DetailsPage";
import {
    createBrowserRouter,
} from "react-router-dom";

export enum RoutesPaths {
    MAIN = "/",
    POKEMON_DETAIL = "/pokemon"
}


export const routes = createBrowserRouter([
        {
            path: RoutesPaths.MAIN,
            element: <MainPage/>
        },
        {
            path: RoutesPaths.POKEMON_DETAIL,
            element: <DetailsPage/>
        },
    ]
)