import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import React, { useEffect } from "react";

import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Logs from "./components/logs/Logs.js";
import Addbtn from "./components/layout/Addbtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";

const App = () => {
  useEffect(() => {
    //initialises materialize
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <>
        <Navbar />
        <div className="container">
          <Addbtn />
          <AddLogModal />
          <EditLogModal />
          <TechListModal />
          <AddTechModal />
          <Logs />
        </div>
      </>
    </Provider>
  );
};

export default App;
