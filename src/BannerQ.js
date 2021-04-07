import React from "react";
import './css/Banner.scss'
import img2 from './css/img2.jpeg'


function BannerQ() {
    return (
        <>
            <div className="img-area">
                <img src={img2} />
            </div>
            <div className="text-area">
                <h3>CONTACT</h3>
            </div>
            <div className="end"></div>
        </>
    );
}

export default BannerQ;