import { Route, Switch } from "react-router-dom";
import Register from "../pages/Register";
import Success from "../pages/Success";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Register />
      </Route>
      <Route path="/success/:id">
        <Success />
      </Route>
    </Switch>
  );
};

export default Routes;
