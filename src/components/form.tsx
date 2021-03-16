import React, {FormEvent, useContext, useState} from "react";
import {CountriesContext} from "../providers/countries-provider";

export const Form = () => {
    const {addNewCountry} = useContext(CountriesContext);
    const [country, setCountry] = useState("");
    const [users, setUsers] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const isValid = country && users;
        setIsSuccess(!!isValid);
        setIsError(!isValid);
        if (isValid) {
            addNewCountry({country, users: parseInt(users)});
        }
    };

    const fieldClassname = (error:boolean) => {
        return `field ${(isError && error) ? "error" : ""}`
    };

    return (
        <div>
            <form>
                <div className={fieldClassname(!country)}>
                    <label>Country</label>
                    <input type={"string"} onChange={(e) => setCountry(e.currentTarget.value)}/>
                </div>
                <div className={fieldClassname(!users)}>
                    <label>Users</label>
                    <input type={"number"} onChange={(e) => setUsers(e.currentTarget.value)}/>
                </div>
                <div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}