import React from 'react';
import logoMain from "../../assets/logo-main.png";
import Navigation from "../Navigation/Navigation";
import ScrollArrow from "../MainSection/ScrollArrow/ScrollArrow";
import "./MainSection.css";

export default function MainSection() {
  return (
    <main className="mainSection">
      <Navigation />
      <div className="logo-main-container">
        <img src={logoMain} alt="hlavné logo" className="logo-main" />
      </div>
      <div className="title-main-container">
        <h1 className="title-main">Buď dôstojný. Buď gentleman. Dobre vyzeraj</h1>
      </div>
      <ScrollArrow />
    </main>
  )
}
