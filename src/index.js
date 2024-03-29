import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";
import "./index.css";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DataProvider } from "./context/DataContext";
import { store } from "./state/store";

ReactDOM.render(
  <Provider store={store}>
    <DataProvider>
      <App />
    </DataProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
