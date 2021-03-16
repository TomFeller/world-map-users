import React from "react";
import {Link} from "react-router-dom";

export const AppSidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/">MAP</Link></li>
                <li><Link to="/add-new">FORM</Link></li>
            </ul>
        </div>
    )
}