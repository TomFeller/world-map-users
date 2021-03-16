import React, {FC, useContext} from "react";
import {CountriesContext} from "../providers/countries-provider";

export const AppHeader: FC = (): JSX.Element  => {
    const {totalUsers} = useContext(CountriesContext)

     return (
        <div>
            Total Users: <span>{totalUsers}</span>
        </div>
    )
}