import React, { useState, useEffect } from "react";
import CustomizedTables from "./table";
import Retailer from "./Retailer";
import "./style.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { logout, selectUser } from "../features/userSlice";

export default function Dashboard() {
  const [showRetailer, setShowRetailer] = useState(true);
  const [data, setData] = useState("");
  const user = useSelector(selectUser);

  console.log(user.token);
  const token = user.token;

  const getData = async () => {
    try {
      let resManufacturer = await axios.get(`${process.env.REACT_APP_BASE_URL}/factory/api/factories`);
      // let resWarehouse = await axios.get(`${process.env.REACT_APP_BASE_URL}/factory/api/factories`);
      // let resRetailer = await axios.get(`${process.env.REACT_APP_BASE_URL}/factory/api/factories`);
      // let 
      console.log(resManufacturer);
      // setData(res.data);
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
