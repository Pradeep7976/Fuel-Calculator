import React from "react";
import fuelimg from "../images/fuel.png";
function Header() {
  return (
    <nav class="navbar navbar-expand-md navbar-light navbar-brand title navi">
      <img class="fimg" src={fuelimg} alt="sry"></img>
      <div class="fon">Fuel Calculator</div>
    </nav>
  );
}

export default Header;
