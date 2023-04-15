import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import Header from "./components/Header";
import EnhancedTable from "./components/EnhancedTable";
import App from "./App";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route exact path="/users" Component={Users} />
        <Route exact path="/header" Component={Header} />
        <Route exact path="/" Component={App} />
        <Route exact path="/table" Component={EnhancedTable} />
      </Routes>
    </Router>
  );
}

export default Routing;
