import React from "react";
import "./css/Pointmodal.scss";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Pointmodal({ point, setpoint }) {
    
    return point == 1 ? (
        <>
            <div className="modal-background">
                <div className="point-modal-box">
                    <h2 className="point-title">포인트 충전</h2>
                    <p className="etc">EV WMAP의 포인트를 충전하실 수 있습니다.</p>
                    <div className="pay-input-box">
                        <div className="pay-title">충전할 포인트 : </div>
                        <input type="text" className="pay-input" /*ref={register({ required: true })}*/ placeholder="입력 : 금액(원)" name="pay-input"/>
                    </div>
                    <div className="pay-fee-box">
                        <div className="pay-box">
                            <h2 className="pay-info-text">현재 포인트</h2>
                            <p className="pay-charge">200<span className="P-text">P</span></p>
                        </div>
                        <div className="arrow-box">
                            <FontAwesomeIcon icon={faAngleDoubleRight} />
                        </div>
                        <div className="pay-box">
                            <h2 className="pay-info-text">충전 후 포인트</h2>
                            <p className="pay-charge">1200<span className="P-text">P</span></p>
                        </div>
                    </div>
                    <div className="submit-btn-box">
                        <button type="submit" className="submit-btn point-btn" name="point-ok">충전하기</button>
                        <button className="import-btn point-btn" onClick={() => {
                            setpoint(0);
                        }}>취소</button>
                    </div>
                </div>
            </div>
        </>
    ) : null;
}

export default Pointmodal;