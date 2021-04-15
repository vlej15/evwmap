import React from "react";
import BannerMain from "./BannerMain";
import './css/Main.scss'
import { useState, useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css";
import section1 from './css/section1.jpg'

const Main = () => {

    React.useEffect(() => {
        Aos.init({});
    }, [])


    return (
        <>
            <BannerMain />
            <div className="contentsMain">
                <div className="section1">
                    <div data-aos="fade-right" data-aos-duration="1500">
                        <p className="title">충전소 조회</p>
                    </div>
                    <img src={section1} />
                    <span className="line"></span>

                </div>
                {/* section end */}

                <div className="section2">

                </div>
                {/* section end */}

                <div className="section3">

                </div>
                {/* section end */}

                <div className="section4">
                    <div data-aos="fade-right" data-aos-duration="1500">
                        <p className="title">NOTICE</p>
                    </div>
                    <div className="body-area">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="tr-title">제목란제목란제목란제목란제목란제목란신미란</td>
                                    <td className="tr-date">1999.04.24</td>
                                </tr>
                                <tr>
                                    <td className="tr-title">제목란제목란제목란제목란제목란제목란신미란</td>
                                    <td className="tr-date">1999.04.24</td>
                                </tr>
                                <tr>
                                    <td className="tr-title">제목란제목란제목란제목란제목란제목란신미란</td>
                                    <td className="tr-date">1999.04.24</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button className="more">VIEW MORE</button>
                </div>
            </div> {/* contents end */}
        </>
    )
}
export default Main;