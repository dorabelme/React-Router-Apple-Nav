import React from "react";
import SubItem from "./SubItem";

const SubNav = props => {
    const menu = props.data.find((item) => item.name === props.match.params.name);
    
    return (
        <div className={`sub-nav ${menu.name}`}>
            <SubItem subLinks={menu.subLinks} />
        </div>
    );
};

export default SubNav;