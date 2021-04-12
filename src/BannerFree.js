import React from "react";
import './css/Banner.scss'
import img1 from './css/img1.jpeg'

function BannerFree() {
    return (
        <>
            <div className="img-area">
                <img src={img1} />
            </div>
            <div className="text-area">
                <h3>F R E E B O A R D</h3>
            </div>
            {/* <div className="end"></div> */}
        </>
    );
}

export default BannerFree;