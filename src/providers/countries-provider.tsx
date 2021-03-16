import React, {FC, useCallback, useEffect, useState} from "react";
import {fetchData, GET, POST} from "../helpers/fetch-data";

const defaultValue = {countries: [], totalUsers: 0, addNewCountry: () => {}};

type ContextType = {
    countries: ICountry[],
    totalUsers: number,
    addNewCountry: Function
}

export const CountriesContext = React.createContext<ContextType>(defaultValue);

export interface ICountry {
    country: string,
    users: number

}

export const CountriesProvider: FC = ({children}): JSX.Element => {
    const [countries, setCountries] = useState<ICountry[] | []>([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getAllCountries = useCallback(async () => {
        await fetchData(
            GET, "",
            handleFetchSuccess
        );
    }, []);
    
    useEffect(() => {
        getAllCountries();
    }, [getAllCountries]);
    
    const handleFetchSuccess = (countries: ICountry[] ) => {

        setCountries(countries);
        setIsLoading(false);
    };
    
    const addNewCountry = async (country:ICountry) => {
        await fetchData(
            POST,
            country,
            (response) => handleFetchSuccess([...countries, {...country}])
        );
    };

    const totalUsers = countries.map((country: ICountry) => country.users || 0).reduce((a, b) => parseInt("" + a) + parseInt("" + b), 0);

    const provider = {countries, totalUsers, addNewCountry};

    if (isLoading) {
        return <div>...</div>
    }
    return (
        <CountriesContext.Provider value={provider}>
            {children}
        </CountriesContext.Provider>
    )
};