import React from "react";
import Nav from "./Nav";
import Card from "./Card";

const Main = ({logo})=>{
    return(
        <>
            <Nav logo={logo}/>
            <Card/>
        </>
    )
};

export default Main;