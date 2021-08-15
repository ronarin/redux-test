import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import rootReducer from "./reducers";

const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
