import React from "react";
import Aside from "./subComponents/Aside";
import Dashboard from "./subComponents/Dashboard";

const Main = () => {
  return (
    <div className="main">
      <Aside />
      <Dashboard/>
    </div>
  );
};

export default Main;
