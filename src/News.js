import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Board.scss";
import APagination from "@material-ui/lab/Pagination";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import BannerNews from "./BannerNews";

function News() {
    return (
        <>
            {/* <div className="end"></div> */}
            <div data-aos="fade-down" data-aos-duration="1000">
                <BannerNews />
            </div>
            <div className="contentsBoard">
                <div className="start"></div>
                <div className="banner">
                    <p className="banner-title">N E W S</p>
                    <br></br>
                    <p className="subtitle">
                        전기차와 관련된 다양한 뉴스를 확인 하실 수 있습니다.
          </p>
                </div>
                <table className="list">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th className="th-title">제목</th>
                            <th>글쓴이</th>
                            <th className="th-date">작성일</th>
                            <th>조회</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
                <div className="btn-area">
                    {localStorage.getItem("id") != null ? (
                        <button className="write-btn">
                            <FontAwesomeIcon
                                icon={faPencilAlt}
                                className="pencil"
                            ></FontAwesomeIcon>
                        </button>
                    ) : null}
                </div>
            </div>
        </>
    );
}

export default News;
