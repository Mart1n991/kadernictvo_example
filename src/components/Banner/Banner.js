import React from 'react';
import thinkActBanner from "../../assets/think-act-speak.png";
import "./Banner.css";

export default function Banner() {
    return (
        <section className="banner mb-5">
            <div className="banner-container">
                <img src={thinkActBanner}/>
            </div>
        </section>
    )
}
