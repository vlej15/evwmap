import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from "./playstore.png";
import { useEffect } from "react";
import "./css/BrandStory.scss";
import img3 from "./phone333.png";
import qr from './css/qr.png'

const StyledSlider = styled(Slider)`
    .slick-slide div {
        outline: none;
    }
`; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성

export default class SimpleSlider extends Component {
    render() {
        var settings = {
            dots: true, // 캐러셀의 점을 보여줄 것인지
            infinite: true, // 마지막 장 다음에 첫번째가 나오게 할 것인지
            speed: 1300, // 넘어가는 속도는 몇으로 할 것인지
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
        };
        return (
            <>
                {/* <div className="end"></div> */}
                <div className="contentsTest">
                    {/* <h2> Single Item</h2> */}
                    <Slider {...settings}>
                        <div className="section1">
                            {/* <div class="bouncer" class="x">
                                <div class="y"></div>
                            </div> */}
                            <p className="section1-title">
                                WELCOME <span>EVERY</span>
                                <span>BODY!</span>
                            </p>
                            <p className="section1-subtitle">
                                EV WMAP은 Electric Vehicle World Map의 약자로
                                <br />
                                <span>전국 어디서나</span> 전기차를
                                <br />
                                보다 편리하게 이용할 수 있는 전기차 어플입니다.
                            </p>
                        </div>
                        {/* section1 end */}
                        {/* <div className="section2">
                            <dl
                                data-aos="fade-up"
                                data-aos-delay="400"
                                class="aos-init aos-animate"
                            >
                                <dt>
                                    이미지 인식을 이용한{" "}
                                    <span className="dt-b">충전소 관리</span>
                                </dt>
                                <dd>
                                    EV WMAP은 라즈베리 파이, OpenCV 라이브러리를
                                    이용한 이미지 인식 기술을 통해 충전소 진입
                                    시 전기차 여부를 판별합니다. 충전소에
                                    진입하는 무분별한 주차를 방지하여 쾌적한
                                    충전환경을 제공합니다.
                                </dd>
                            </dl>
                            <dl
                                data-aos="fade-left"
                                data-aos-delay="500"
                                class="aos-init aos-animate"
                            >
                                <dt>
                                    전기차 충전소{" "}
                                    <span className="dt-b">예약 기능</span>
                                </dt>
                                <dd>
                                    매번 사용 가능한 충전기를 찾지 않고도
                                    간편하게 예약 전용 충전기에서 원하는 시간에
                                    충전할 수 있습니다.
                                </dd>
                            </dl>
                            <dl
                                data-aos="fade-right"
                                data-aos-delay="600"
                                class="aos-init aos-animate"
                            >
                                <dt>
                                    전기차 충전소{" "}
                                    <span className="dt-b">회원카드 등록</span>
                                </dt>
                                <dd>
                                    NFC 기능으로 여러 개의 전기차 충전소 회원
                                    카드를 간편하게 핸드폰에 저장함으로써 매번
                                    여러 개의 회원 카드를 소지해야 하는 불편함을
                                    해소합니다.
                                </dd>
                            </dl>
                        </div> */}
                        {/* section2 end */}
                        <div className="section3">
                            <div className="section3-text">
                                <p className="section3-title">EV WMAP</p>
                                <p className="section3-subtitle">
                                    Electric Vehicle World Map APP
                                </p>
                                <p className="section3-download">Play Store 다운로드</p>
                                {/* <img className="qr" src={qr}></img> */}
                                {/* <img src={img2} class="img2"></img>
                                <p className="playstore">Play Store</p> */}
                            </div>
                            <div className="bgc-box"></div>
                            <div className="image-con">
                                <img className="img1" src={img3}></img>
                            </div>
                            <div className="mobile-app">
                                <div className="mobile">
                                    M<br />O<br />B<br />I<br />L<br />E
                                </div>
                                <div class="app">
                                    A<br />P<br />P
                                </div>
                            </div>
                        </div>{" "}
                        {/* section3 end */}
                    </Slider>
                </div>
            </>
        );
    }
}
