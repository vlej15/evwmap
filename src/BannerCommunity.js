import React from "react";
import './css/Banner.scss'
import img1 from './css/img1.jpeg'

function BannerCommunity() {
    return (
        <>
            <div className="img-area">
                <img src={img1} />
            </div>
            <div className="text-area">
                <h3>COMMUNITY</h3>
            </div>
            {/* <div className="end"></div> */}
        </>
    );
}

export default BannerCommunity;