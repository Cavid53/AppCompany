import React from "react";
import "../../assets/styles/dashboard.scss";
import DashboardHeader from "./DashboardHeader";
import AppSearch from "./Search";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <div className="line-dashboard"></div>
      <AppSearch/>
    </div>
  );
};

export default Dashboard;
