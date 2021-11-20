import React, { useState } from "react";
import CustomizedTables from "./table";
import Retailer from "./Retailer";
import "./style.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Dashboard() {
  const [showRetailer, setShowRetailer] = useState(true);

  return (
    <div className="container">
      <div className="heading">
        <span>Manufacturer</span>
        <span>Warehouse</span>
      </div>

      <div className="main">
        <CustomizedTables />
        <CustomizedTables />
      </div>

      <div className="retName">Retailer Name</div>

      <div className="retailerContainer">
        <ArrowBackIosIcon onclick={() => setShowRetailer(false)} />

        {showRetailer ? <Retailer /> : <Retailer />}

        <ArrowForwardIosIcon onclick={() => setShowRetailer(true)} />
      </div>
    </div>
  );
}
