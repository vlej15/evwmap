import React from "react";
import './css/Banner.scss'
import img1 from './css/img5.jpg'

function BannerTip() {
    return (
        <>
            <div className="img-area">
                <img src={img1} />
            </div>
            <div className="text-area">
                <h3>C O N T A C T</h3>
            </div>
            {/* <div className="end"></div> */}
        </>
    );
}

export default BannerTip;