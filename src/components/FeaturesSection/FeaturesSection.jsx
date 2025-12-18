import React from "react";
import "./FeaturesSection.css";

import Icon1 from "@/assets/icons/icon1.svg?react";
import Icon2 from "@/assets/icons/icon2.svg?react";
import Icon3 from "@/assets/icons/icon3.svg?react";
import Icon4 from "@/assets/icons/icon4.svg?react";
import Icon5 from "@/assets/icons/icon5.svg?react";
import Icon6 from "@/assets/icons/icon6.svg?react";
import Icon7 from "@/assets/icons/icon7.svg?react";
import Icon8 from "@/assets/icons/icon8.svg?react";
import Icon9 from "@/assets/icons/icon9.svg?react";



 export const FeaturesSection = ()=> {

    

return (
  <section className="features">
    <div className="categories-container">

    {/* ================= CENTER CONTENT ================= */}

        <div className="features-content">
        <span className="features-badge">CATEGORIES</span>
          <h2 className ="features-title">Browse By Categories</h2>

          <div className="features-boxes">
            <div className="box1"> <Icon1 className="box-icon" />Business Management</div>
            <div className="box2"> <Icon2 className="box-icon" />Arts & Design</div>
            <div className="box3"> <Icon3 className="box-icon" />Personal Development</div>
            <div className="box4"> <Icon4 className="box-icon" />UI/UX Design</div>
            <div className="box5"> <Icon5 className="box-icon" />Graphic Design</div>
            <div className="box6"> <Icon6 className="box-icon" />Digital Marketing</div>
            <div className="box7"> <Icon7 className="box-icon" />Exclusive man</div>
            <div className="box8"> <Icon8 className="box-icon" />Product Design</div>
            <div className="box9"> <Icon9 className="box-icon" />Video & Photography</div>

          </div>
        </div>
    </div>
  </section>
)
}