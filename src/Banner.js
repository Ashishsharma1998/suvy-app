import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <h1>SUVY: LEARN SCIENCE LIKE NEVER BEFORE</h1>
      <h2>
        Go on exciting adventures and master the science concepts along the way!
      </h2>
      <img
        className="banner_img"
        src="images/Banner_img.png"
        alt="Banner_img"
      />
      <img className="star1" src="images/stars1.png" alt="star1" />
      <img className="star2" src="images/stars2.png" alt="star2" />
      <img className="star3" src="images/stars3.png" alt="star3" />
      <img className="star4" src="images/stars4.png" alt="star4" />
      <img className="star5" src="images/stars4.png" alt="star4" />
      <img className="star6" src="images/pattern.png" alt="star6" />
      <img className="star7" src="images/pattern.png" alt="star6" />
      <div class="custom-shape-divider-bottom-1666082150">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="container">
        <form className="wrapper">
          <input type="text" placeholder="Enter Email Address" />
          <button type="submit">Get Early Access</button>
        </form>
      </div>
    </div>
  );
}

export default Banner;
