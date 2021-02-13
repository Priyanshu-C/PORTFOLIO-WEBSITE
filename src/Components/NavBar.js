import React from "react";
import "./NavBar.scss";
const NavBar = () => {
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-titles"> <span className="cyan">A</span> bout </div>
                <div className="navbar-titles"> Projects </div>
                <div className="navbar-titles"> Contact </div>
            </div>
        </>
    );
};

export default NavBar;
