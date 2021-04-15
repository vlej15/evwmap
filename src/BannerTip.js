import React from "react";
import './css/Banner.scss'
import img1 from './css/tips.jpeg'

function BannerTip() {
    return (
        <div className="banner">
            <div className="img-area">
                <img src={img1} />
            </div>
            <div className="text-area">
                <h3>T I P B O A R D</h3>
            </div>
            {/* <div className="end"></div> */}
        </div>
    );
}

export default BannerTip;