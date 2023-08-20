import React from "react";
import './css/Nav.css'
import SearchBar from "./SearchBar";

const Nav = ({logo})=>{
    return(
        <div className="nav_div">
            <nav className="nav" id="nav">
                <img src={logo} alt="logo" className="logo" id="logo"/>
                <SearchBar/>
            </nav>
        </div>
    )
};

export default Nav;
