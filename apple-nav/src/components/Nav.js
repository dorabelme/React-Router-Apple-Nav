import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
    console.log(props)
    return (
        <div className="nav-item">
            <Link to="/"><img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg"/></Link>
            {props.links.map((item) => (
                <Link to={`/sub-links/${item.name}`}>
                <h2>{item.name}</h2>
            </Link>
            ))}
            <Link to="/"><h2>Support</h2></Link>
            <Link to="/"><img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg"></img></Link>
            <Link to="/"><img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg"></img></Link>

        </div>
    );
};

export default Nav;
