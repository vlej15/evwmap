import React from "react";
import './css/Banner.scss'
import img1 from './css/img4.jpg'

function BannerTip() {
    return (
        <>
            <div className="img-area">
                <img src={img1} />
            </div>
            <div className="text-area">
                <h3>L I S T</h3>
            </div>
            {/* <div className="end"></div> */}
        </>
    );
}

export default BannerTip;