import React, { useState } from "react";
import "./Navbar.css";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="Navbar">
      <div className="leftside">
        <img
          className="nav_logo"
          src="https://suvyclasses.com/wp-content/uploads/2020/02/suvy-logo-200.png"
          alt="logo"
        />
      </div>

      <div className="rightside">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="#about">About</a>
          <a href="#faqs">FAQs</a>
          <a href="play">Play</a>
        </div>
        <button
          onClick={() => {
            setShowLinks(!showLinks);
          }}
        >
          <MenuSharpIcon className="icon" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
