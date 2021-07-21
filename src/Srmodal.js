import React, { useEffect, useState } from "react";
import "./css/Pointmodal.scss";
import jQuery from "jquery";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heam from "./Heam.js";
import { render } from "react-dom";

function Srmodal(point, setpoint) {
  return point == 1 ? (
    <>
      <div className="modal-background">
        <div className="contentsModal2">
          <div className="modal-area">
            <div className="close-area">
              <FontAwesomeIcon
                icon={faTimes}
                className="closeBtn"
                onClick={() => {
                  setpoint(0);
                }}
              />
            </div>
            <div className="banner">
              <p className="banner-title">포인트 충전</p>
              <p className="banner-subtitle">
                EV WMAP의 포인트를 충전하실 수 있습니다.
              </p>
            </div>
            <div className="contents-wrap">
              <div className="input-box">
                <div className="pay-title">충전 포인트 :</div>
                <input
                  type="number"
                  className="pay-input"
                  placeholder="금액(원)"
                  name="input"
                  id="input"
                />
                <button type="submit" className="submit-btn" name="point-ok">
                  충전하기
                </button>
              </div>

              <div className="fee-box">
                <div className="wrapwrap">
                  <p className="fee-title">현재 포인트</p>
                  {localStorage.getItem("id") == null ? null : (
                    <p className="fee">P</p>
                  )}
                  <div className="arrow-box">
                    <FontAwesomeIcon
                      icon={faAngleDoubleRight}
                      className="arrow"
                    />
                  </div>
                  <p className="fee-title">충전 후 포인트</p>
                  <p className="fee">
                    <span>P</span>
                  </p>
                  {console.log("afterPoint")}
                  {console.log("userPoint")}
                </div>
              </div>
              <div className="table-wrap">
                <table className="table-box">
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {console.log("paylist : ")}
    </>
  ) : null;
}

export default Srmodal;
