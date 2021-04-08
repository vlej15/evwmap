import React, { useState } from "react";
import Data from "./chargedata";
import "./css/ChargeUsage.scss";

function ChargeUsage(props) {
    let [chhistory, setboard] = useState(Data);

    return (
        <>
            <div className="end"></div>
            <div
                className="contentsChargeUsage"
            // onClick={() => {
            //     props.setMenu(false);
            // }}
            >
                <div className="banner">
                    <p className="banner-title">충전소 이용 내역</p>
                    <br></br>
                    <p className="subtitle">현재까지의 충전소 이용 내역을 확인 하실 수 있습니다.</p>
                </div>
                <table className="list">
                    <thead>
                        <tr>
                            <th className="charge-title">충전소 명</th>
                            <th>충전일</th>
                            <th className="khw">충전량<br /><span>(khw)</span></th>
                            <th className="price">충전금액<br /><span>(원)</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {chhistory.map((a, i) => {
                            return (
                                <Boardlist
                                    chhistory={chhistory[i]}
                                    i={i}
                                    key={i}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

function Boardlist(props) {
    return (
        <>
            <tr>
                <td className="list-title">{props.chhistory.title}</td>
                <td className="list-date">{props.chhistory.date}</td>
                <td className="list-khw">{props.chhistory.khw}</td>
                <td className="list-price">{props.chhistory.price}</td>
            </tr>
        </>
    );
}

export default ChargeUsage;
