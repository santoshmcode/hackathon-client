import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Login } from "../Components/Login";
import { login, logout, selectUser } from "../features/userSlice";
import { useHistory } from "react-router";

export const Router = () => {
    const [curData, setCurData] = useState();
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(selectUser)

    const curRetailer = JSON.parse(localStorage.getItem("curRetailer"));
    const token = JSON.parse(localStorage.getItem("token"));
    useEffect(() => {
        console.log('token:', token)
        setCurData(curRetailer);
        token && dispatch(login({ curRetailer, token }));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('curRetailer');
        localStorage.removeItem('userId');
        dispatch(logout());
    }



    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    {!user ? (
                        <Login />
                    ) : (
                        <>
                            <h1>Dashboard</h1>{" "}
                            <button onClick={handleLogout}>Logout</button>
                        </>
                    )}
                </Route>
            </Switch>
        </div>
    );
};
