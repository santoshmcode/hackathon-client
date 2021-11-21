import React, { useState, useEffect } from "react";
import CustomizedTables from "./table";
import Retailer from "./Retailer";
import "./style.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { logout, selectUser } from "../features/userSlice";
import WareHouse from "./wareHouse";
import Manufacturer from "./table";

export default function Dashboard() {
    const [showRetailer, setShowRetailer] = useState(true);
    const [data, setData] = useState("");
    const user = useSelector(selectUser);
    const [manufacturerData, setManufacturerData] = useState({});
    const [warehouseData, setWarehouseData] = useState({});
    const [retailerData, setRetailerData] = useState([]);
    const token = user.token;

    console.log("retailerData:", retailerData);
    console.log("warehouseData:", warehouseData);
    console.log("manufacturerData:", manufacturerData);

    // For get Manufacturer Data
    const getManufacturerData = async () => {
        try {
            let resManufacturer = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/factory/api/factories`,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );
            setManufacturerData(resManufacturer.data[0]);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        let intervalId = setInterval(() => {
            getManufacturerData();
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    //  For get Warehouse Data
    const getWarehouseData = async () => {
        try {
            let resWarehouse = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/warehouse/api/warehouses`,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );
            setWarehouseData(resWarehouse.data[0]);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        let intervalId = setInterval(() => {
            getWarehouseData();
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    //  For get Retailer Data
    const getRetailerData = async () => {
        try {
            let resRetailer = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/retailer/api/retailers`,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );
            setRetailerData(resRetailer.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        let intervalId = setInterval(() => {
            getRetailerData();
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        getRetailerData();
        getWarehouseData();
        getManufacturerData();
    }, []);

    return (
        <div className="container">
            <div className="heading">
                <span>Manufacturer</span>
                <span>Warehouse</span>
            </div>

            <div className="main">
              <Manufacturer manufacturerData={ manufacturerData}/>
              <WareHouse warehouseData={warehouseData}/>
            </div>

            <div className="retName">Retailer Name</div>

            <div className="retailerContainer">
                <ArrowBackIosIcon
                    onClick={() => setShowRetailer(false)}
                    className="arrow"
                />

          {showRetailer ? <Retailer retailerData={ retailerData[0]}/> : <Retailer retailerData={ retailerData[1]}/>}

                <ArrowForwardIosIcon
                    onClick={() => setShowRetailer(true)}
                    className="arrow"
                />
            </div>
        </div>
    );
}
