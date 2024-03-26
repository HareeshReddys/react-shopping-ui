import React from "react";

const Header = () => {
  return (
    <div className="headersection">
      <div className="left">shopping mall</div>
      <div className="center">
        <ul>
          <li>Women</li>
          <li>Men</li>
          <li>Kids</li>
          <li>Beauty</li>
        </ul>
      </div>

      <div className="search">
        <input className="input" placeholder="Search"></input>
      </div>
      <div className="right">
        <div className="signin"> Sign Up / Sign In</div>
        <div className="cart"> Cart</div>
      </div>
    </div>
  );
};

export default Header;
