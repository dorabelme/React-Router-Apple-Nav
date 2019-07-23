import React from "react";
import { Route } from "react-router-dom";

import Data from "../data";

import Nav from "./Nav";
import SubNav from "./SubNav";


const NavWrapper = props => {
    const data = Data;
    return (
        <div className="nav-wrapper">
            <Route path="/" render={(props) => <Nav {...props} links={data} />} />
            <Route exact path="/sub-links/:name" render={(props) => <SubNav {...props} data={data} /> } />
        </div>
    )
}

export default NavWrapper;