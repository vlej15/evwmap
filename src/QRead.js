import React, { useState, useEffect } from "react";
import "./css/QRead.scss";
import { useForm } from "react-hook-form";
import axios from "axios";

const QRead = () => {
  return (
    <>
      <div className="end"></div>
      <div className="contentsQRead">
        <div className="banner">
          <p className="banner-title">문의내역</p>
          <br></br>
          <p className="subtitle">문의하신 내역을 확인할 수 있습니다.</p>
        </div>
        <div className="a-area">
          <dl className="title-area">
            <dt>불만</dt>
            <dd>
              아니 NFC카드 인식이 안된다고 쓴지가 언젠데 아직도 문의 답변을
              안해주시나요..?!??!?!?!?
            </dd>
            <dd className="date">2021-02-01</dd>
          </dl>
          <dd className="content-area">
            <p>
              안녕하세요. NFC 인식이 되질 않아 문의글을 남깁니다.안녕하세요. NFC
              인식이 되질 않아 문의글을 남깁니다. 안녕하세요. NFC 인식이 되질
              않아 문의글을 남깁니다. 안녕하세요. NFC 인식이 되질 않아 문의글을
              남깁니다. 안녕하세요. NFC 인식이 되질 않아 문의글을 남깁니다.
              안녕하세요. NFC 인식이 되질 않아 문의글을 남깁니다. 안녕하세요.
              NFC 인식이 되질 않아 문의글을 남깁니다. 안녕하세요. NFC 인식이
              되질 않아 문의글을 남깁니다. 안녕하세요. NFC 인식이 되질 않아
              문의글을 남깁니다. 안녕하세요. NFC 인식이 되질 않아 문의글을
              남깁니다. 안녕하세요. NFC 인식이 되질 않아 문의글을 남깁니다.
              안녕하세요. NFC 인식이 되질 않아 문의글을 남깁니다. 안녕하세요.
              NFC 인식이 되질 않아 문의글을 남깁니다. 안녕하세요. NFC 인식이
              되질 않아 문의글을 남깁니다. 안녕하세요. NFC 인식이 되질 않아
              문의글을 남깁니다. 안녕하세요. NFC 인식이 되질 않아 문의글을
              남깁니다. 안녕하세요. NFC 인식이 되질 않아 문의글을 남깁니다.
              안녕하세요. NFC 인식이 되질 않아 문의글을 남깁니다. 안녕하세요.
              NFC 인식이 되질 않아 문의글을 남깁니다. 안녕하세요. NFC 인식이
              되질 않아 문의글을 남깁니다.
            </p>
          </dd>
        </div>
        <div className="btn-area">
          <button className="delete-btn">삭제</button>
          <button className="change-btn">수정</button>
        </div>
      </div>
    </>
  );
};

export default QRead;
