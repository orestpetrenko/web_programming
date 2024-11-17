
import Catalog from "elements/layout/Main/Catalog/Catalog";
import Footer from "./elements/layout/Footer/Footer";
import Main from "./elements/layout/Main/Home/Home";
import Navigation from "./elements/layout/Navigation/Navigation";

import { BrowserRouter as Router, Route, RouterProvider, Routes, } from 'react-router-dom';

import './App.scss';
import DataContext from "data/Context";

import { value, loadMore } from "./data/dataReceive";
import routesMap from "elements/routes/Routes";


function App() {
    return (<div>

        <DataContext.Provider value={{ value: value, loadMore }}>
            <RouterProvider router={routesMap()} />
        </DataContext.Provider>
    </div>
    );
}

export default App;