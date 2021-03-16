import React, { FC, useEffect, useState} from "react";

const API = "http://13.69.54.84:9000/users";

const defaultValue = {countries: [], totalUsers: 0};

type ContextType = {
    countries: ICountry[],
    totalUsers: number
}

export const CountriesContext = React.createContext<ContextType>(defaultValue);

export interface ICountry {
    country: string,
    users: number

}

export const CountriesProvider: FC = ({children}): JSX.Element  => {
    const [countries, setCountries] = useState<ICountry[] | []>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(API).then(
            response => response.ok && response.json()
        ).then(
            success => {
                setCountries(success);
                setIsLoading(false);
            }
        )
    }, []);

    const provider = {
        countries:countries,
        totalUsers: countries.map((country:ICountry) => country.users).reduce((a, b) => a + b, 0)
    }

    if (isLoading) {
        return <div>...</div>
    }
    return (
        <CountriesContext.Provider value={provider}>
            {children}
        </CountriesContext.Provider>
    )
};