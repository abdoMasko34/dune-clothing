import React from "react";
// import MenuItem from "./menu-item";
import Dirctory from "./dirctory/dirctory.component";
import "./homePage.style.scss";

const HomePage = () => (
  <div className="home-page">
    <div className="home-menu">
      <Dirctory />
    </div>
  </div>
);

export default HomePage;
