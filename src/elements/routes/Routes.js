import ErrorPage from "elements/layout/Error/ErrorPage";
import ItemPage from "elements/layout/Main/Item/ItemPage";
import Catalog from "elements/layout/Main/Catalog/Catalog";
import Home from "elements/layout/Main/Home/Home";
import RootLayout from "elements/layout/RootLayout";
import { createBrowserRouter } from "react-router-dom";
import loader from "./CatalogLoader";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <RootLayout><ErrorPage/></RootLayout>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/catalog",
                element: <Catalog />
            },
            {
                path: "/catalog/:id",
                loader: loader,
                element: <ItemPage/>
            }
        ]
    },


]);


function routesMap() {
    return routes;
}

export default routesMap;