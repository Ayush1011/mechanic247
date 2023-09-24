import React from "react";
import { Button } from "@mui/material";
import "./dashboard.scss";
import carImg from "../../Assets/Images/car.png";
import CarInfo from "../CarInfo";
import BikeInfo from "../BikeInfo";

const Dashboard = () => {
  return (
    <div className="dashboard-parent-container">
    <CarInfo/>
    <BikeInfo/>
   </div>
  );
};

export default Dashboard;
