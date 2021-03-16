import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {Map} from "./map";
import {Form} from "./form";

export const AppRoutes = () => {
    return (
        <div className="app-routes">
            <Switch>
                <Route exact path="/">
                    <Map/>
                </Route>
                <Route exact path="/add-new">
                    <Form/>
                </Route>
            </Switch>
            <Redirect to="/">
                <Map/>
            </Redirect>
        </div>
    )
}