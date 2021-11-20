import React, { useState, useEffect } from "react";
import CustomizedTables from "./table";
import Retailer from "./Retailer";
import "./style.css";
import axios from "axios";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Dashboard() {
  const [showRetailer, setShowRetailer] = useState(true);
  const [data, setData] = useState("");

  const getData = async () => {
    try {
      let res = await axios.get(`${process.env.REACT_APP_BASE_URL}/factory/api/factories`);
      console.log(res);
      // setData(res.data)
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, [])

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
        <ArrowBackIosIcon onClick={() => setShowRetailer(false)} className="arrow"/>

        {showRetailer ? <Retailer /> : <Retailer />}

        <ArrowForwardIosIcon onClick={() => setShowRetailer(true)} className="arrow" />
      </div>
    </div>
  );
}
