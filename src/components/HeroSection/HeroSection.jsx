import React from "react";
import "./HeroSection.css";
import HeroImage from "/public/Images/HeroImage.svg?react";
import DottedArrow from "@/assets/icons/DottedArrow.svg?react";
import UserAvatar from "/public/Images/UserAvatar.svg?react";
import Button from "@/components/Header/HeaderButton";
import Arrow from "@/assets/icons/Arrow.svg?react"; 


export const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* ================= LEFT CONTENT ================= */}
        <div className="hero-content">

          <span className="hero-badge">
            Welcome Edunity online courses
          </span>

          <h1 className="hero-title">
            Achieving Your Dreams <br />
            Through Education
          </h1>

          <p className="hero-text">
            We are experienced in educational platform and skilled strategies
            for the success of our online learning.
          </p>
     
          <Button className= "secondary-btn">
            Find Courses <Arrow className="arrow-icon" />
          </Button>

          {/* Decorative dotted arrow */}
          <div className="hero-decor">
            <DottedArrow />
          </div>

        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="hero-image">

          {/* ===== USER RATING CARD ===== */}
          <div className="hero-rating">

            <div className="rating-text">
              <span className="rating-count">200+ </span><p>Instructor </p>

            </div>

            <div className="rating-avatars">
              <UserAvatar />
            </div>
          </div>

          {/* Hero Image */}
          <HeroImage className="hero-svg" />
          
        </div>
      </div>
    </section>
  );
};
