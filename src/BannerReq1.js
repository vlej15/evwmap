import React from "react";
import './css/Banner.scss'
import img1 from './css/img5.jpg'

function BannerReq1() {
    return (
        <div className="banner">
            <div className="img-area">
                <img src={img1} />
            </div>
            <div className="text-area">
                <h3>C O N T A C T</h3>
            </div>
            {/* <div className="end"></div> */}
        </div>
    );
}

export default BannerReq1;