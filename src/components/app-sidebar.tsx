import React from "react";
import {Link} from "react-router-dom";

export const AppSidebar = () => {
    return (
        <div className={"sidebar"}>
            <ul>
                <li><Link to={"/map"}>MAP</Link></li>
                <li><Link to={"/form"}>FORM</Link></li>
            </ul>
        </div>
    )
}