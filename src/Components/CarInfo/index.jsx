import { React } from "react";
import { Button, Container } from "@mui/material";
import "./carinfo.scss";
import carImg from "../../Assets/Images/car.png";

const CarInfo = () => {
  return (
    <div className="carinfo-parent-container">
      <div className="white-strip-1"></div>
      <div className="white-strip-2"></div>
      <div className="child-container-left">
      <p className="header-style">
          Never Get Stranded Again – Our Mechanics Work 24/7
        </p>
        <p className="sub-header-style">
          “We Don't Sleep, So You Don't Have To Worry”
        </p>
        <Button className="button" >Contact Us</Button>
      </div>
      <div className="child-container-right">
        <img className="carImg" src={carImg} alt="Logo" />
      </div>
    </div>
  );
};

export default CarInfo;
