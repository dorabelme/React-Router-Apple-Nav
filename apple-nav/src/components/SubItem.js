import React from "react";
import { Link } from "react-router-dom";
// import { TweenLite } from "gsap/TweenMax";


// function componentDidMount(ref) {
//     // use the node ref to create the animation
//     TweenLite.to(ref, 1, { marginRight: 325 });
// };

const SubItem = props => {
    return (
        // <div className="sub-item" ref={div => componentDidMount(div)}>
        <div className="sub-item">
            {props.subLinks.map((subItem) => (
                <Link to="/" key={subItem.id}>
                    <img src={subItem.img} alt={subItem.name} />
                    <h3>{subItem.name}</h3>
                </Link>
            ))}
        </div>
    )
}

export default SubItem;