import React from "react";
import './css/Banner.scss'
import img2 from './css/img2.jpeg'


function BannerQ() {
    return (
        <div className="banner">
            <div className="img-area">
                <img src={img2} />
            </div>
            <div className="text-area">
                <h3>F A Q</h3>
            </div>
        </div>
    );
}

export default BannerQ;