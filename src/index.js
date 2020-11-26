import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { Provider } from "react-redux"; // Library -> connect all states to be accessable from all around the app
import { createStore } from "redux"; // Enable connecting state to redux-app, combines all states to all file - can access by like store.getState()
import rootReducer from "./reducers";

const store = createStore(rootReducer); // addition to all reducers to one fiel

ReactDOM.render(
  <Provider store={store}>
    {" "}
    make all states accessable

      <App />
   
  </Provider>,
  document.getElementById("root")
);


