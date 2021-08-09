import logo from "./logo.svg";
import "./App.css";
import { HomepageView } from "./views/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomepageView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
