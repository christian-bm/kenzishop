import { Switch, Route } from "react-router-dom";

import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";

const Router = () => {
    return (
        <Switch>
            <Route exact path={"/"}>
                <Home />
            </Route>
            <Route path={"/cart"}>
                <Cart />
            </Route>
            <Route path={"/login"}>
                <Login />
            </Route>
        </Switch>
    );
};
export default Router;
