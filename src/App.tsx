import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import {CountriesProvider} from "./providers/countries-provider";
import {AppHeader} from "./components/app-header";
import {AppSidebar} from "./components/app-sidebar";
import './App.scss';
import {AppRoutes} from "./components/app-routes";

const App = () => {
    return (
        <CountriesProvider>
            <div className={"app-wrapper"}>
                <AppHeader/>
                <div className={"app-body"}>
                    <Router>
                        <AppSidebar/>
                        <AppRoutes/>
                    </Router>
                </div>
            </div>
        </CountriesProvider>
    );
}

export default App;
