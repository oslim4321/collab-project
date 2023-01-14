import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import Apping from "./Apping";
import { Provider } from "react-redux";
import { Store, persistor } from "./Client/REDUX/StoreRedux/Store";
import { PersistGate } from "redux-persist/integration/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* wrap redux around our app */}
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <Apping />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
