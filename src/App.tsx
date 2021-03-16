import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {CountriesProvider} from "./providers/countries-provider";
import {AppSidebar} from "./components/app-sidebar";
import {AppRoutes} from "./components/app-routes";
import './scss/app.scss';

const App = () => {
    return (
        <CountriesProvider>
            <div className={"app-body"}>
                <Router>
                    <AppSidebar/>
                    <AppRoutes/>
                </Router>
            </div>
        </CountriesProvider>
    );
}

export default App;
