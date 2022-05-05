import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import UserMetrics from "./Components/UserMetrics";
import Pmf from "./Components/Pmf";

function App() {
  return (
    <>
      <Header />
      <UserMetrics />
      <Pmf />
    </>
  );
}

export default App;
