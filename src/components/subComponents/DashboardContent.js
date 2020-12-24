import React from "react";
import "../../assets/styles/dashboard.scss";
import AppCard from "./Card";
import DashboardHeader from "./DashboardHeader";
import AppSearch from "./Search";
import Structure from "./Structure";

import LineImage from "../../assets/images/line1.png";
const DashboardContent = () => {
  return (
    <div className="content-dashboard">
      <DashboardHeader />
      <AppSearch />
      <Structure />
      <AppCard isOpen={false} />
      <div className="line-up">
        <img src={LineImage} alt="line" />
      </div>
    
    </div>
  );
};

export default DashboardContent;
