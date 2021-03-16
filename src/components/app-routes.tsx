import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {Overview} from "./overview";
import {Form} from "./form";

export const AppRoutes = () => {
    return (
        <div className="app-routes">
            <Switch>
                <Route exact path="/">
                    <Overview/>
                </Route>
                <Route exact path="/add-new">
                    <Form/>
                </Route>
            </Switch>
            <Redirect to="/">
                <Overview/>
            </Redirect>
        </div>
    )
}