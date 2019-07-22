import { Route, Switch, Redirect } from "react-router-dom"
import React from "react"
import Siginin from "./Routes/Signin/Signin"
import Home from "./Routes/Home/HomeContainer"

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Siginin" component={Siginin} />
            <Redirect from="*" to="/" />
        </Switch>
        );
}
export default Routes;