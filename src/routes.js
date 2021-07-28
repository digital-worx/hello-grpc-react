
import { BrowserRouter, Switch, Route } from "react-router-dom";
import home from "./pages/home";
import response from "./pages/response";
export default function Routes(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={home} />
        <Route path="/response" exact={true} component={response} />
      </Switch>
    </BrowserRouter>
  );
}
