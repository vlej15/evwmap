import React, { useEffect, useState } from "react";
import "./css/Pointmodal.scss";
import jQuery from "jquery";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heam from "./Heam.js";


function request_pay() {

    const IMP = window.IMP;
    IMP.init("imp49372335"); //가맹점 식별 코드
    //결제창 호출 코드
    IMP.request_pay({ //param
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: 'merchant_' + new Date().getTime(),
        name: "EV WMAP 포인트 충전",
        amount: 10,
        buyer_name: "user_id",
        buyer_email: "user_email"
    }, function (rsp) {
        if (rsp.success) { //결제 성공 시
            var msg = "결제가 완료되었습니다.";
            msg += '고유 ID : ' + rsp.imp_uid;
            msg += '상점 거래 ID : ' + rsp.merchant_uid;
            msg += '결제 금액 : ' + rsp.paid_amount;
            msg += '카드 승인 번호 : ' + rsp.apply_num;
            // jQuery.ajax({
            //     method: "post",
            //     url: "http://3.36.197.174:8081", //본인 웹 서버
            //     headers: {"Content-Type":"application/json"},
            //     data: {
            //         'imp_uid': rsp.imp_uid,
            //         'merchant_uid': rsp.merchant_uid
            //     }
            // }).done(function (rsp) {

            // })
        } else { //결제 실패 시
            var msg = "결제에 실패하였습니다."
            msg += '에러 내용 : ' + rsp.error_msg;
        }

        alert(msg);
    })
}

function Pointmodal({ point, setpoint }) {
    const [pass, setPass] = useState(0);
    const [check, setCheck] = useState(false);
    const userPoint = localStorage.getItem("userPoint");


    function sum() {
        const inputfee = document.getElementById("input").value;
    }





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
                                <input type="text" className="pay-input" placeholder="금액(원)" name="input" id="input" />
                                <button type="submit" className="submit-btn" name="point-ok" onClick={request_pay}>충전하기</button>
                            </div>

                            <div className="fee-box">
                                <div>
                                    <p className="fee-title">현재 포인트</p>
                                    {localStorage.getItem("id") == null ? null : (
                                        <p className="fee">{localStorage.getItem("user_point")}P</p>
                                    )}
                                    <div className="arrow-box">
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className="arrow" />
                                    </div>
                                    <p className="fee-title">충전 후 포인트</p>
                                    <p className="fee">99200<span>P</span></p>
                                </div>
                            </div>
                            <div className="table-wrap">
                                <table className="table-box">
                                    <tbody>
                                        <tr>
                                            <td className="date">2021-05-15 22:42:05</td>
                                            <td>신용카드</td>
                                            <td>11,000</td>
                                        </tr>
                                        <tr>
                                            <td className="date">2021-05-15 22:42:05</td>
                                            <td>신용카드</td>
                                            <td>11,000</td>
                                        </tr>
                                        <tr>
                                            <td className="date">2021-05-15 22:42:05</td>
                                            <td>신용카드</td>
                                            <td>11,000</td>
                                        </tr>
                                        <tr>
                                            <td className="date">2021-05-15 22:42:05</td>
                                            <td>신용카드</td>
                                            <td>11,000</td>
                                        </tr>                                    <tr>
                                            <td className="date">2021-05-15 22:42:05</td>
                                            <td>신용카드</td>
                                            <td>11,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : null;
}

export default Pointmodal;