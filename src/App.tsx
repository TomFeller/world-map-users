import React from 'react';
import {CountriesProvider} from "./providers/countries-provider";
import {AppHeader} from "./components/app-header";
import './App.css';

const App = () => {
     return (
        <CountriesProvider>
           <AppHeader/>
        </CountriesProvider>
    );
}

export default App;
