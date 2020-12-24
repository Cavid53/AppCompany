import React from "react";
import "../../assets/styles/dashboard.scss";
import AppCard from "./Card";
import DashboardHeader from "./DashboardHeader";
import AppSearch from "./Search";
import Structure from "./Structure";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <div className="line-dashboard"></div>
      <AppSearch />
      <Structure />
      <AppCard />
    </div>
  );
};

export default Dashboard;
