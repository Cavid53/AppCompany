import React from "react";
import "../../assets/styles/dashboard.scss";
import DashboardHeader from "./DashboardHeader";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <div className="line-dashboard"></div>
    </div>
  );
};

export default Dashboard;
