import React from "react";
import "./AppDownloads.css";
import { assets } from "../../assets/frontend_assets/assets";

function AppDownloads() {
  return (
    <div className="app-downloads" id="app-downloads">
      <h1>
        For Better Experience Download <span>Bite2Eat</span> App
      </h1>
      <div className="app-download-platform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
}

export default AppDownloads;
