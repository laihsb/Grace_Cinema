import React from "react";

// The sideNav bar

const SideNav = () => {
  return (
    <div>
			<h1>Welcome to the Side Nav Component!</h1>
      <div>
        <ul id="sidenav">
          <li>
            <a href="#">Orders</a>
          </li>
          <li>
            <a href="#">Personal Info</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
