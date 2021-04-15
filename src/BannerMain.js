import React from "react";
import './css/BannerMain.scss'
import img1 from './css/main.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";

function BannerMain() {

    return (
        <div className="bannerMain">
            <div className="img-area">
                <img src={img1} />
            </div>

            <div className="text-area">
                <h3>WE CREATE NEW CULTURE<br /><span>부제목 부제목 부제목 부제목</span></h3>

            </div>
            <div className="frame">
                <div className="topline"></div>
                <div className="bottomline"></div>
                <p className="topedge"></p>
                <p className="bottomedge"></p>
            </div>
            <div className="arrow-area">
                <FontAwesomeIcon icon={faLongArrowAltDown} className="arrow-icon" />
                <p className="arrow-title">Scroll</p>
            </div>
        </div>
    );
}

export default BannerMain;