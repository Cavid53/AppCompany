import React, { useState } from "react";
import "../../assets/styles/cardDetail.scss";
import AppCard from "./Card";
import DashboardHeader from "./DashboardHeader";
import UserData from "./UserData";

const CardDetails = () => {
  return (
    <div className="card-body">
      <DashboardHeader />
      <AppCard isOpen={true} />
      <UserData/>
    </div>
  );
};

export default CardDetails;
