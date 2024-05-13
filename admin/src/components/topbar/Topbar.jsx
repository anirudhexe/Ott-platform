import React from "react";
import "./topbar.css";
import dp from '../../assets/dp.jpg'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <img src={dp} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
