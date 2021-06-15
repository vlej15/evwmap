import React from "react";
import "./css/Pointmodal.scss";
import jQuery from "jquery";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    return point == 1 ? (
        <>
            <div className="modal-background">
                <div className="point-modal-box">
                    <h2 className="point-title">포인트 충전</h2>
                    <p className="etc">EV WMAP의 포인트를 충전하실 수 있습니다.</p>
                    <div className="pay-input-box">
                        <div className="pay-title">충전할 포인트 : </div>
                        <input type="text" className="pay-input" /*ref={register({ required: true })}*/ placeholder="금액(원)" name="pay-input"/>
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
                        <button type="submit" className="submit-btn point-btn" name="point-ok" onClick={request_pay}>충전하기</button>
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