import React from "react";
import {Route, Switch} from "react-router-dom";
import {Map} from "./map";
import {Form} from "./form";

export const AppRoutes = () => {
    return (
        <div className="app-routes">
            <Switch>
                <Route path="/map">
                    <Map/>
                </Route>
                <Route path="/form">
                    <Form/>
                </Route>
            </Switch>
        </div>
    )
}