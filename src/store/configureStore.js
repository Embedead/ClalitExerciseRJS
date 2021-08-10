import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { createRootReducer } from "./reducer";

export const history = createBrowserHistory();

export const configureStore = () => {
  const store = createStore(
    createRootReducer(history),
    compose(applyMiddleware(routerMiddleware(history), thunk))
  );
  return store;
};
