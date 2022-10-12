import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <div className="site-title">
        <NavLink to={"/#"} exact="true">
          Memories-App
        </NavLink>
        
      </div>
      <ul>
        <NavLink to={"/allarts"} exact="true">
          Plans
        </NavLink>
        <NavLink to={"/allarts"} exact="true">
          Pricing
        </NavLink>
        <NavLink to={"/newartsform"} exact="true">
          sigin-in
        </NavLink>

      </ul>
    </nav>
  );
}

export default Navbar;
