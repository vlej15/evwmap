import React, { useEffect } from "react";
import "./css/Policy.scss"
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import $ from 'jquery';


function Policy(props) {
    const { register, handleSubmit, errors, watch, getValues } = useForm();
    //header
    useEffect(() => {
        props.setCount(1);
    }, []);

    //새로고침 시 스크롤 최상단 이동
    $(window).on("beforeunload", function () {
        $(window).scrollTop(0);
    });

    return (
        <>
            <div className="end"></div>
            <div className="contentsPolicy">
                <div className="banner">
                    <p className="banner-title">개인정보처리방침</p>
                </div>
                <div className="wrap-area">
                    <div className="first-wrap">
                        &nbsp;EV WMAP이 취급하는 모든 개인정보는 관련법령에 근거하거나 정보주체의 동의에 의하여 수집·보유 및 처리되고 있습니다. 「개인정보보호법」은 이러한 개인정보의 취급에 대한 일반적 규범을 제시하고 있으며, EV WMAP은 이러한 법령의 규정에 따라 수집ㆍ보유 및 처리하는 개인정보를 공공업무의 적절한 수행과 정보주체의 권익을 보호하기 위해 적법하고 적정하게 취급할 것입니다.<br />
                        &nbsp;또한, EV WMAP은 관련 법령에서 규정한 바에 따라 보유하고 있는 개인정보에 대한 열람, 정정ㆍ삭제, 처리정지 요구 등 정보주체의 권익을 존중하며, 정보주체는 이러한 법령상 권익의 침해 등에 대하여 행정심판법에서 정하는 바에 따라 행정심판을 청구할 수 있습니다. EV WMAP은 정보주체의 개인정보보호와 권익을 보호하고 개인정보와 관련한 고충을 원활하게 처리할 수 있도록 「개인정보보호법」에 따라 다음과 같은 처리방침을 두고 있습니다. EV WMAP은 개인정보처리방침을 개정하는 경우 웹사이트 공지사항을 통하여 공지할 것입니다.
            </div>
                    <div className="second-wrap">
                        <p className="policy-title"> <FontAwesomeIcon
                            icon={faArrowAltCircleRight}
                            className="policy-icon"
                        ></FontAwesomeIcon>
                        제 1조(개인정보의 처리 목적) </p>
                        <p>&nbsp;EV WMAP은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
                        <p className="p-b1">&nbsp;&nbsp;1. 서비스제공<br />
                            <span>&nbsp;&nbsp;EV WMAP 사업관련 컨텐츠 제공, 본인 인증, 견학 신청, 체육시설 신청, 홈페이지 게시판 이용 등 서비스 제공과 관련한 목적으로 개인정보를 처리합니다.</span></p>
                        <p className="p-b">&nbsp;&nbsp;2. 민원처리<br />
                            <span>&nbsp;&nbsp;개인정보 열람, 개인정보 정정·삭제, 개인정보 처리정지 요구, 개인정보 유출사고 신고, 개인정보 침해 사실 신고 접수·처리 등 민원처리를 목적으로 개인정보를 처리합니다.</span></p>
                    </div>

                    <div className="thrid-wrap">
                        <FontAwesomeIcon
                            icon={faArrowAltCircleRight}
                            className="policy-icon"
                        ></FontAwesomeIcon>
                        제 2조(홈페이지에서 운영하는 보안조치)<br />
                        <p>
                            <span>&nbsp;홈페이지의 보안 또는 지속적인 서비스를 위해 EV WMAP은 네트워크 트래픽의 통제(Monitor)는 물론 불법적으로 정보를 변경하는 등의 시도를 탐지하기 위해 여러 가지 보안 프로그램을 운영하고 있습니다. 이를 통해 인터넷 서비스 이용과정에서 개인정보 항목(IP주소, 쿠키, MAC주소, 서비스 이용기록, 방문기록, 불량 이용기록 등)이 자동으로 생성되어 수집될 수 있습니다.</span>
                        </p>
                    </div>
                    <div className="thrid-wrap">
                        <FontAwesomeIcon
                            i icon={faArrowAltCircleRight}
                            className="policy-icon"
                        ></FontAwesomeIcon>
                        제 3조(개인정보의 처리 및 보유기간)<br />
                        <p>
                            <span>&nbsp;EV WMAP은 법령의 규정의 동이에 의해서만 개인정보를 수집·보유합니다. EV WMAP이 법령의 규정에 근거하여 수집·보유하고 있는 주요 개인정보파일은 다음과 같습니다.</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Policy;