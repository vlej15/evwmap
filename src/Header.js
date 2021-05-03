import React, { useState } from "react";
import "./css/Header.scss";
import { Link, Route, Switch } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heam from "./Heam.js";
import $ from "jquery";

function Header(props) {
    let headerOn = function () {
        $(".dHead").addClass("dHead-login");
        $(".menu-back").addClass("menu-back-login");
    };
    let headerOff = function () {
        $(".dHead").removeClass("dHead-login");
        $(".menu-back").removeClass("menu-back-login");
    };
    {
        props.getCount > 0 ? headerOn() : headerOff();
        // props.setCount(0);
    }

    $(function () {
        //Header top 위치 좌표
        var headerScroll = $(".dHead").offset();
        //새로고침 시 스크롤 최상단 이동
        $(window).on("beforeunload", function () {
            $(window).scrollTop(0);
        });
        $(".header-wrap").mouseover(function () {
            $(".menu-back").addClass("menu-back-on-plus");
        });
        $(".menu-back").mouseleave(function () {
            $(".menu-back").removeClass("menu-back-on-plus");
            $(".menu-back").removeClass("menu-back-on");
        });
        $(window).scroll(function () {
            //스크롤을 내렸을 때
            if ($(document).scrollTop() > headerScroll.top) {
                $(".menu-back").addClass("menu-back-on");
                //Header에 마우스 올라갈 시 서브메뉴 드롭
                $(".header-wrap").mouseover(function () {
                    $(".menu-back").addClass("menu-back-on-plus");
                });
                //서브메뉴에 마우스 떨어질 때
                $(".menu-back").mouseleave(function () {
                    $(".menu-back").addClass("menu-back-on");
                    $(".menu-back").removeClass("menu-back-on-plus");
                });
            } else if ($(document).scrollTop() == 0) {
                if (
                    $(".menu-back").mouseleave(function () {
                        $(".menu-back").removeClass("menu-back-on");
                    })
                ) {
                    $(".menu-back").removeClass("menu-back-on");
                }
                $(".menu-back").removeClass("menu-back-on");
                $(".menu-back").removeClass("menu-back-on-plus");
            } else {
                //스크롤이 최상위일 때
                $(".menu-back").removeClass("menu-back-on-plus");
                $(".menu-back").removeClass("menu-back-on");
                if (
                    $(".menu-back").mouseleave(function () {
                        $(".menu-back").removeClass("menu-back-on");
                    })
                ) {
                    $(".menu-back").removeClass("menu-back-on");
                }
                //Header에 마우스 올라갈 시 서브메뉴 드롭
                $(".menu-back").mouseover(function () {
                    $(".menu-back").addClass("menu-back-on-plus");
                });
                //서브메뉴에 마우스 떨어질 때
                $(".menu-back").mouseleave(function () {
                    $(".menu-back").removeClass("menu-back-on-plus");
                });
            }
        });
    });
    return (
        <>
            <div className="btn-box">
                <h2 className="headerh2">
                    <a href="#" className="arrow">
                        <FontAwesomeIcon
                            icon={faBars}
                            className="arrow-btn"
                            // onClick={() => {
                            //     props.setMenu(!props.menu);
                            // }}
                        />
                    </a>
                </h2>
            </div>
            <div className="dHead">
                <div className="header-wrap">
                    <div className="menu-back">
                        <div className="inner">
                            <h1 className="mainlogo">
                                <Link to="/main">
                                    <a href="#" className="Logo">
                                        EV WMAP
                                    </a>
                                </Link>
                            </h1>
                            <Heam />
                        </div>

                        <div className="sub sub_left">
                            <div className="sub-list">
                                <ul className="sub-list_ul sub-ul-02">
                                    <li className="sub-list_li">
                                        <Link to="/notice">
                                            <a href="">공지사항</a>
                                        </Link>
                                    </li>

                                    <li className="sub-list_li">
                                        <Link to="/freeboard">
                                            <a href="">자유게시판</a>
                                        </Link>
                                    </li>
                                    <li className="sub-list_li">
                                        <Link to="/tipboard">
                                            <a href="">TIP게시판</a>
                                        </Link>
                                    </li>
                                    <li className="sub-list_li">
                                        <Link to="/news">
                                            <a href="">뉴스게시판</a>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="sub-list_ul sub-ul-03">
                                    <li className="sub-list_li">
                                        <Link to="/faq">
                                            <a href="">FAQ</a>
                                        </Link>
                                    </li>
                                    <li className="sub-list_li">
                                        <Link to="/questions">
                                            <a href="">문의하기</a>
                                        </Link>
                                    </li>
                                    <li className="sub-list_li">
                                        <Link to="/qlist">
                                            <a href="">문의내역</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="null">
                {/* {props.menu === true ? <Heam2 /> : null} */}
                <Heam2 />
            </div>
        </>
    );
}

function Heam2() {
    function logout() {
        localStorage.removeItem("id");
        window.location.replace("/");
    }

    const [getCommunity, setCommunity] = useState(false);
    const [getContact, setContact] = useState(false);

    let communityAdd = function () {
        $(".gub_02").addClass("main_li_on");
    };
    let communityDelete = function () {
        $(".gub_02").removeClass("main_li_on");
    };

    let contactAdd = function () {
        $(".gub_03").addClass("main_li_on2");
    };
    let contactDelete = function () {
        $(".gub_03").removeClass("main_li_on2");
    };

    return (
        <>
            {/* <div className="end"></div> */}
            <div className="MH">
                <div className="heammenu">
                    <div className="global_box">
                        <ul className="global_join_box">
                            <li className="global_list">
                                <a className="point_box" href="#">
                                    POINT
                                </a>
                            </li>
                            <li className="global_list login">
                                {localStorage.getItem("id") == null ? (
                                    <Link to="/login">
                                        <a className="login_box" href="#">
                                            LOGIN
                                        </a>
                                    </Link>
                                ) : (
                                    <Link to="/">
                                        <a
                                            className="login_box"
                                            href="#"
                                            onClick={logout}
                                        >
                                            LOGOUT
                                        </a>
                                    </Link>
                                )}
                            </li>
                            <li className="global_list">
                                {localStorage.getItem("id") == null ? (
                                    <Link to="/signup">
                                        <a className="join_box" href="#">
                                            JOIN
                                        </a>
                                    </Link>
                                ) : (
                                    <Link to="/activity">
                                        <a className="join_box" href="#">
                                            MY PAGE
                                        </a>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className="global_menu">
                        <nav className="gub-wrap">
                            <ul className="mainmenu_ul">
                                <li className="gub_01 main_li">
                                    <Link to="/map">
                                        <a
                                            className="map_a main_menu_list"
                                            href=""
                                        >
                                            <h3 className="main_bar">
                                                LOAD MAP
                                            </h3>
                                        </a>
                                    </Link>
                                </li>

                                <li className="gub_02 main_li">
                                    <a className="com_a main_menu_list">
                                        <h3
                                            className="main_bar"
                                            onClick={() => {
                                                setCommunity(!getCommunity);
                                            }}
                                        >
                                            COMMUNITY
                                        </h3>
                                        {getCommunity === true
                                            ? communityAdd()
                                            : communityDelete()}
                                    </a>
                                    {/* </Link> */}
                                    <ul className="sub-list_ul sub-ul-02">
                                        <li className="sub-list_li">
                                            <Link to="/notice">
                                                <a href="">공지사항</a>
                                            </Link>
                                        </li>

                                        <li className="sub-list_li">
                                            <Link to="/freeboard">
                                                <a href="">자유게시판</a>
                                            </Link>
                                        </li>
                                        <li className="sub-list_li">
                                            <Link to="/tipboard">
                                                <a href="">TIP게시판</a>
                                            </Link>
                                        </li>
                                        <li className="sub-list_li">
                                            <Link to="/news">
                                                <a href="">뉴스게시판</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="gub_03 main_li">
                                    {/* <Link to="/faq"> */}
                                    <a className="con_a main_menu_list">
                                        <h3
                                            className="main_bar"
                                            onClick={() => {
                                                setContact(!getContact);
                                            }}
                                        >
                                            CONTACT
                                        </h3>
                                        {getContact === true
                                            ? contactAdd()
                                            : contactDelete()}
                                    </a>
                                    {/* </Link> */}
                                    <ul className="sub-list_ul sub-ul-03">
                                        <li className="sub-list_li">
                                            <Link to="/faq">
                                                <a href="">FAQ</a>
                                            </Link>
                                        </li>
                                        <li className="sub-list_li">
                                            <Link to="/questions">
                                                <a href="">문의하기</a>
                                            </Link>
                                        </li>
                                        <li className="sub-list_li">
                                            <Link to="/qlist">
                                                <a href="">문의내역</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
