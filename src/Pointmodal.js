import React, { useEffect, useState } from "react";
import "./css/Pointmodal.scss";
import jQuery from "jquery";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heam from "./Heam.js";




function Pointmodal({ point, setpoint, userPoint }) {
    const [pass, setPass] = useState(0);
    const [check, setCheck] = useState(false);
    const [afterPoint, setAfterPoint] = useState(userPoint);
    const [paylist, setpaylist] = useState([]);
    const [pay, setpay] = useState();
    let userSumPoint = 0;
    var lastpay = 0;
    var paypp = userSumPoint;

    function pointChange(e) {
        userSumPoint = parseInt(localStorage.getItem("user_point")) + parseInt(e.target.value);
        setpay(parseInt(e.target.value));
        setAfterPoint(userSumPoint || userPoint);

    }
    console.log("laasdfg", lastpay);
    console.log("pppp", pay);

    useEffect(async () => {
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'http://3.36.197.174:8081/api/pay/list?u_id=user',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJ1c2VyIiwiaWF0IjoxNjIzOTE2NDEyLCJleHAiOjE2MjM5MzQ0MTJ9.LjH4VFc6Tw5h2dofZhTUjqcFuicajb0uatycQ95Ikz97jKoipr86qr8Jq3o2ek33R001om-kjgkyWS5oOZTaXQ'
            }
        };

        await axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setpaylist(response.data);

            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const request_pay = () => {

        const IMP = window.IMP;
        IMP.init("imp49372335"); //가맹점 식별 코드
        //결제창 호출 코드
        IMP.request_pay({ //param
            pg: "html5_inicis",
            pay_method: "card",
            merchant_uid: 'merchant_' + new Date().getTime(),
            name: "EV WMAP 포인트 충전",
            amount: pay,
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

    const payClick = () => {
        var axios = require('axios');
        var data = JSON.stringify({
            pay_dtt: "",
            pay_method: "card",
            pay_amount: afterPoint,
            u_id: "user"
        });

        var config = {
            method: 'post',
            url: 'http://3.36.197.174:8081/api/pay',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJ1c2VyIiwiaWF0IjoxNjIzOTE2NDEyLCJleHAiOjE2MjM5MzQ0MTJ9.LjH4VFc6Tw5h2dofZhTUjqcFuicajb0uatycQ95Ikz97jKoipr86qr8Jq3o2ek33R001om-kjgkyWS5oOZTaXQ',
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
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
                                <div>
                                    <p className="fee-title">현재 포인트</p>
                                    {localStorage.getItem("id") == null ? null : (
                                        <p className="fee">{localStorage.getItem("user_point")}P</p>
                                    )}
                                    <div className="arrow-box">
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className="arrow" />
                                    </div>
                                    <p className="fee-title">충전 후 포인트</p>
                                    <p className="fee">{afterPoint}<span>P</span></p>
                                </div>
                            </div>
                            <div className="table-wrap">
                                <table className="table-box">
                                    <tbody>
                                        {paylist.map((list) => (
                                            <tr>
                                                <td>{list.pay_dtt.substring(0, 19).replace("T", " ")}</td>
                                                <td>{list.pay_method}</td>
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