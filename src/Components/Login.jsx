import { useEffect, useState } from "react";

import React from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { BsGithub, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
// import logo_name from "../images/logo_name.jpg";
// import { useHistory, useParams } from "react-router";
// import { Link } from "react-router-dom";
// import { NewLogo } from "../images/NewLogo";
import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    // const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await axios.post(`${baseUrl}/login`, {
                email,
                password,
                role
            });
            console.log("userData:", userData);
            // if (!localStorage.getItem("user") && userData)
            //     localStorage.setItem(
            //         "email",
            //         JSON.stringify(userData.data.user.email)
            //     );
            //     localStorage.setItem(
            //         "user",
            //         JSON.stringify(userData.data.token)
            //     );
            //     history.push("/");
            // }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <LoginMainDiv>
            <MainDiv>
                <div style={{ borderRadius: "8px" }}>
                    <LoginContentDiv>
                        <SignInH1>Sign in</SignInH1>
                        <InputSubmitDiv>
                            <form onSubmit={handleSubmit}>
                                <Input
                                    autoFocus
                                    type="email"
                                    placeholder="Enter your email address"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <Input
                                    type="password"
                                    placeholder="Enter your password"
                                    minLength="6"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                                <SelectOption
                                    onChange={(e) => setRole(e.target.value)}
                                >
                                    <option selected disabled>
                                        Select Role
                                    </option>
                                    <option value="retailer">Retailer</option>
                                    <option value="warehouseManager">
                                        Warehouse Manager
                                    </option>
                                    <option value="manufacturer">
                                        Manufacturer
                                    </option>
                                </SelectOption>
                                <SubmitButton type="submit">
                                    Submit
                                </SubmitButton>
                            </form>
                        </InputSubmitDiv>
                    </LoginContentDiv>
                </div>
            </MainDiv>
        </LoginMainDiv>
    );
};

const AllA = styled.a`
    display: flex;
    width: 11rem;
    margin: 0.5rem;
    cursor: pointer;
    padding: 1rem;
    border-radius: 0.5rem;
    border-width: 1px;
    border: 1px solid rgb(229, 231, 235);
    color: rgb(255, 255, 255);
    cursor: pointer;
    font-size: 1rem;

    & > :nth-child(2) {
        padding-left: 0.5rem;
        padding-top: 0.1rem;
    }
`;

const InputSubmitDiv = styled.div`
    margin-bottom: 4rem;
`;
const SignInH1 = styled.h1`
    margin: auto;
    color: #00000099;
`;
const SelectOption = styled.select`
    width: 107.4%;
    height: 3.5rem;
    outline: none;
    padding: 1rem;
    border: 1px solid #aca9a94e;
    border-radius: 0.5rem;
    background-color: transparent;
    font-size: 1.1rem;

    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 97%;
    background-position-y: 14px;
    border: 1px solid #dfdfdf;
    margin-right: 2rem;
    padding: 1rem;
    padding-right: 2rem;
    color: #4c4646;
`;

const SubmitButton = styled.button`
    margin-top: 1.5rem;
    padding: 0.75rem 1.25rem;
    border-radius: 0.5rem;
    border-width: 1px;
    border-color: rgb(41, 98, 255);
    background-color: rgb(41, 98, 255);
    font-weight: 700;
    line-height: 1.375;
    letter-spacing: -0.025em;
    color: rgb(255, 255, 255);
    cursor: pointer;
    font-size: 1.1rem;
`;
const Input = styled.input`
    width: 100%;
    margin-right: 15px;
    border-radius: 0.5rem;
    border: 1px solid #aca9a94e;
    border-width: 1px;
    background-color: transparent;
    padding: 1rem;
    /* outline: 1px solid transparent; */
    /* outline-offset: 2px; */
    margin-bottom: 1rem;
    font-size: 100%;

    &::placeholder {
        opacity: 0.8;
    }
`;

const LoginContentDiv = styled.div`
    padding: 3rem;
    width: 75%;
    margin: auto;
    line-height: 1.375;
    text-align: left;

    & > :nth-child(1) {
        margin-bottom: 2.5rem;
    }
    & > :nth-child(2) {
        margin-bottom: 2.5rem;
        font-weight: 600;
        letter-spacing: -0.025em;
        line-height: 1.375;
        font-size: 1.125rem;
        color: rgba(33, 33, 33, 0.9);
    }
`;

const LoginMainDiv = styled.div`
    background-color: #f5f7fa;
    font-family: Arial, Helvetica, sans-serif;
`;

const MainDiv = styled.div`
    background-color: #f5f7fa;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    & > div {
        border-radius: 2px;
        background-color: #ffffff;
        width: 40%;
        margin-left: 5rem;
        margin-right: 5rem;
        --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        border-width: 1px;
    }

    & > a {
        position: absolute;
        background-color: #f5f7fa;
        left: 3.5rem;
        top: 3.5rem;
        width: 2rem;
        height: 2rem;
        font-size: 1.5rem;
        color: rgb(55, 65, 81);
        border: none;
        cursor: pointer;

        & > :hover {
            background-color: #d2d5da;
        }
    }
`;
