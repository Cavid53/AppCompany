import React from "react";
import AvatarIcon from "../../assets/icons/avatar2.svg";
import CircleIcon from "../../assets/icons/circle.svg";
import AlertIcon from "../../assets/icons/alert.svg";
import "../../assets/styles/dashboardHeader.scss";

const DashboardHeader = () => {
  return (
    <div>
      <div className="dashboard-header">
        <img className="alert-icon" src={AlertIcon} alt="alert" />
        <img className="circle-icon" src={CircleIcon} alt="circle" />
        <div className="background-img-avatar"></div>
      </div>
    </div>
  );
};

export default DashboardHeader;
