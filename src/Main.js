import React from "react";
import BannerMain from "./BannerMain";
import './css/Main.scss'
import { useState, useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css";
import section1 from './css/section1.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
                        <p className="title">Category</p>
                        <div className="img-area">
                            <img src={section1}></img>
                        </div>
                    </div>
                    {/* <img src={section1} /> */}
                    {/* <span className="line"></span> */}

                </div>
                {/* section end */}

                <div className="section2">
                    서비스 한줄 소개란
                </div>
                {/* section end */}

                <div className="section3">
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
                    <div className="btnmore-area">
                        <button className="more">VIEW MORE<FontAwesomeIcon
                            icon={faChevronRight} className="arrow-right"
                        /></button>
                    </div>
                </div>
            </div> {/* contents end */}
        </>
    )
}
export default Main;