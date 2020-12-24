import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashboardContent from "./DashboardContent";
import CardDetail from "../subComponents/CardDetails";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={DashboardContent} />
          <Route exact path="/CardDetails" component={CardDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Dashboard;
