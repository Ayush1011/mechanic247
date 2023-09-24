import { React } from "react";
import { Button, Container } from "@mui/material";
import "./bikeinfo.scss";
import bikeImg from "../../Assets/Images/bike.png";


const BikeInfo = () => {
  return (
    <div className="bikeinfo-parent-container">
         <div className="white-strip-1"></div>
      <div className="white-strip-2"></div>
      <div className="child-container-left">
      <img className="carImg" src={bikeImg} alt="Logo" />
       
      </div>
      <div className="child-container-right">
      <p className="header-style">
          Never Get Stranded Again – Our Mechanics Work 24/7
        </p>
        <p className="sub-header-style">
          “We Don't Sleep, So You Don't Have To Worry”
        </p>
        <Button className="button" >Contact Us</Button>
      </div>
     
    </div>
  );
};

export default BikeInfo;
