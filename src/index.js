import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReduccer from "./modules";

const store = createStore(rootReduccer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
