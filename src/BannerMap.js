import React from "react";
import './css/Banner.scss'
import img1 from './css/map.jpeg'

function BannerNews() {
    return (
        <div className="banner">
            <div className="img-area">
                <img src={img1} />
            </div>
            <div className="text-area">
                <h3>L O A D M A P</h3>
            </div>
            {/* <div className="end"></div> */}
        </div>
    );
}

export default BannerNews;