import React, {useState} from "react";

export const Form = () => {
    const [country, setCountry] = useState("");
    const [users, setUsers] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = () => {
        const isValid = country && users;
        setIsSuccess(!!isValid);
        setIsError(!isValid);
    };

    const fieldClassname = (error:boolean) => {
        return `field ${(isError && error) ? "error" : ""}`
    };

    return (
        <div>
            <form>
                <div className={fieldClassname(!country)}>
                    <label>Country</label>
                    <input onChange={(e) => setCountry(e.currentTarget.value)}/>
                </div>
                <div className={fieldClassname(!users)}>
                    <label>Users</label>
                    <input onChange={(e) => setUsers(e.currentTarget.value)}/>
                </div>
                <div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}