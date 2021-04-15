import React from "react";
import './css/Banner.scss'
import img1 from './css/img4.jpg'

function BannerReq2() {
    return (
        <div className="banner">
            <div className="img-area">
                <img src={img1} />
            </div>
            <div className="text-area">
                <h3>L I S T</h3>
            </div>
            {/* <div className="end"></div> */}
        </div>
    );
}

export default BannerReq2;