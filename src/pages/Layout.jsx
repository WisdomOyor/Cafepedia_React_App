import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/Header/NavBar";

const Layout = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </>
    )
}

export default Layout;