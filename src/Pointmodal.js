import React, { useEffect, useState } from "react";
import "./css/Pointmodal.scss";
import jQuery from "jquery";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heam from "./Heam.js";
import { render } from "react-dom";

function Pointmodal({ point, setpoint, userPoint, reaxios }) {
    const [pass, setPass] = useState(0);
    const [check, setCheck] = useState(false);
    const [afterPoint, setAfterPoint] = useState(userPoint);
    const [paylist, setpaylist] = useState([]);
    const [pay, setpay] = useState();
    const idValue = localStorage.getItem("id_value");
    const token = localStorage.getItem("id");
    // const serverId = localStorage.getTime("id");
    // const emailValue = localStorage.getTime("email_value");

    // alert(token);

    // console.log("email", emailValue);
    let userSumPoint = 0;
    let UIP = 0;
    let UIPP = 0;
    let total = 0;

    function pointChange(e) {
        //입력받은 값의 10%를 합해야함
        UIP = parseInt(e.target.value); //사용자가 입력한 값
        UIPP = 10 / (100 / UIP); //사용자가 입력한 값의 10%
        total = UIP + UIPP; //사용자가 입력한 값 + 10%

        userSumPoint = userPoint + total;
        setpay(parseInt(e.target.value));
        setAfterPoint(userSumPoint || userPoint);
    }

    useEffect(() => {
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'http://3.36.197.174:8081/api/pay/list?u_id=' + idValue,
            headers: {
                'Authorization': token
            }
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setpaylist(response.data);

            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const payClick = () => {
        var axios = require('axios');
        var data = JSON.stringify({
            pay_dtt: "",
            pay_method: "신용카드",
            pay_amount: pay,
            u_id: idValue
        });

        var config = {
            method: 'post',
            url: 'http://3.36.197.174:8081/api/pay',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log("보낸데이터값",JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const request_pay = () => {

        let inserOk = 0;
        const IMP = window.IMP;
        IMP.init("imp49372335"); //가맹점 식별 코드
        //결제창 호출 코드
        IMP.request_pay({ //param
            pg: "html5_inicis",
            pay_method: "card",
            merchant_uid: 'merchant_' + new Date().getTime(),
            name: "EV WMAP 포인트 충전",
            amount: pay,
            buyer_name: idValue,
            buyer_email: "user_email"
        }, function (rsp) {
            if (rsp.success) { //결제 성공 시
                var msg = "결제가 완료되었습니다.";
                msg += '고유 ID : ' + rsp.imp_uid;
                msg += '상점 거래 ID : ' + rsp.merchant_uid;
                msg += '결제 금액 : ' + rsp.paid_amount;
                msg += '카드 승인 번호 : ' + rsp.apply_num;

            } else { //결제 실패 시
                var msg = "결제에 실패하였습니다."
                msg += '에러 내용 : ' + rsp.error_msg;
            }

            alert(msg);
            return reaxios(), payClick();
        })
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
                                <input type="number" className="pay-input" placeholder="금액(원)" name="input" id="input" onChange={pointChange} />
                                <button type="submit" className="submit-btn" name="point-ok" onClick={request_pay}>충전하기</button>
                            </div>

                            <div className="fee-box">
                                <div className="wrapwrap">
                                    <p className="fee-title">현재 포인트</p>
                                    {localStorage.getItem("id") == null ? null : (
                                        <p className="fee">{userPoint}P</p>
                                    )}
                                    <div className="arrow-box">
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className="arrow" />
                                    </div>
                                    <p className="fee-title">충전 후 포인트</p>
                                    <p className="fee">{afterPoint}<span>P</span></p>
                                    {console.log("afterPoint", afterPoint)}
                                    {console.log("userPoint", userPoint)}
                                </div>
                            </div>
                            <div className="table-wrap">
                                <table className="table-box">
                                    <tbody>
                                        {paylist.map((list) => (
                                            <tr>
                                                <td className="date">{list.pay_dtt.substring(0, 19).replace("T", " ")}</td>
                                                <td className="method">{list.pay_method}</td>
                                                <td>{list.pay_amount}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {console.log("paylist : ", paylist)}
        </>
    ) : null;
}

export default Pointmodal;