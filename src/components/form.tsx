import React, {FormEvent, useContext, useState} from "react";
import {Link} from "react-router-dom";
import {CountriesContext} from "../providers/countries-provider";

// Form Dictionary
const SUCCESS_TITLE = "New country added successfully.";
const COUNTRY = "Country";
const USERS = "Users";
const ADD_COUNTRY = "Add another country";
const GO_TO_MAP = "Go to map";
const SUBMIT = "Submit";

export const Form = () => {
    const {addNewCountry} = useContext(CountriesContext);
    const [country, setCountry] = useState("");
    const [users, setUsers] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const isValid = country && users;
        setIsLoading(true);
        setIsError(!isValid);

        if (isValid) {
            addNewCountry(
                {country, users: parseInt(users)},
                (isSuccess: boolean) => {
                    setIsSuccess(isSuccess);
                    setIsError(!isSuccess);
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false);
        }
    };

    const handleReset = () => {
        setUsers("");
        setCountry("");
        setIsError(false);
        setIsSuccess(false);
    }

    const fieldClassname = (error: boolean) => {
        return `field ${(isError && error) ? "error" : ""}`
    };

    const SUCCESS = (
        <div>
            <h3>{SUCCESS_TITLE}</h3>
            <p>{COUNTRY}: {country}</p>
            <p>{USERS}: {users}</p>
            <div className={"form-success-actions"}>
                <button onClick={handleReset}>{ADD_COUNTRY}</button>
                <button><Link to={"/"}>{GO_TO_MAP}</Link></button>
            </div>
        </div>
    );

    const FORM = (
        <form>
            <h2>Insert new country</h2>
            <div className={fieldClassname(!country)}>
                <label>{COUNTRY}</label>
                <input type={"string"} onChange={(e) => setCountry(e.currentTarget.value)}/>
            </div>
            <div className={fieldClassname(!users)}>
                <label>{USERS}</label>
                <input type={"number"} onChange={(e) => setUsers(e.currentTarget.value)}/>
            </div>
            <button onClick={handleSubmit}>{isLoading ? "..." : SUBMIT}</button>
        </form>
    );

    return (
        <div className={"form"}>
            {isSuccess ? SUCCESS : FORM}
        </div>
    )
};