import React from "react";
import './css/Banner.scss'
import img1 from './css/news.jpeg'

function BannerTip() {
    return (
        <>
            <div className="img-area">
                <img src={img1} />
            </div>
            <div className="text-area">
                <h3>N E W S</h3>
            </div>
            {/* <div className="end"></div> */}
        </>
    );
}

export default BannerTip;