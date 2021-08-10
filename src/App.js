import { HomepageView } from "./views/Homepage";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./store/configureStore";
import { ChangingImage } from "./components/changingImage";
import { AkitaBreed } from "./components/breed/Akita";
import { ShepherdBreed } from "./components/breed/GermanShepard";
import { ResultsPage } from "./components/results";
function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <HomepageView>
          <Route path="/akita">
            <AkitaBreed />
          </Route>
          <Route path="/germanshepherd">
            <ShepherdBreed />
          </Route>
          <Route path="/images">
            <ResultsPage />
          </Route>
          <Route exact path="/">
            <ChangingImage />
          </Route>
        </HomepageView>
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
