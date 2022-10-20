import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import "./localize/i18n";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
