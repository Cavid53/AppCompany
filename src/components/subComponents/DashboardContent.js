import React from "react";
import "../../assets/styles/dashboard.scss";
import AppCard from "./Card";
import DashboardHeader from "./DashboardHeader";
import AppSearch from "./Search";
import Structure from "./Structure";
const DashboardContent = () => {
  return (
    <div className="content-dashboard">
      <DashboardHeader />
      <AppSearch />
      <Structure />
      <AppCard isOpen={false} />
    </div>
  );
};

export default DashboardContent;
