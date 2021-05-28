import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./css/ModalNotify.scss";
import axios from "axios";

function ModalNotify({ report, setReport, statid }) {
  const [pass, setPass] = useState(0);
  const { register, handleSubmit, watch, errors, getValues } = useForm();
  const token = localStorage.getItem("id");
  const onSubmit = (data) => console.log(data);

  function passModal() {
    function sure() {
      var data = JSON.stringify({
        from: localStorage.getItem("id_value"),
        to: "leik24@naver.com",
        stat_id: statid,
        chg_id: "1",
        content: getValues("text"),
      });

      var config = {
        method: "post",
        url: "http://193.122.106.148:8081/api/email/warning",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      alert("정상적으로 접수되었습니다. 감사합니다.");
      setReport(0);
    }
    return report == 1 ? (
      <div className="modal-background">
        <div className="contentsModal">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="title">고장신고</div>
            <p className="etc">
              불법 주차 문제는 '생활불편신고어플'을 이용해주세요.
            </p>
            <div className="notify">
              <textarea
                ref={register({ required: true })}
                className="text"
                placeholder="신고 사유를 입력해주세요."
                name="text"
              ></textarea>
            </div>
            <div className="btn-area">
              <button type="submit" className="ok" name="ok" onClick={sure}>
                신고
              </button>
              <button
                className="cancel"
                onClick={() => {
                  setReport(0);
                }}
              >
                취소
              </button>
            </div>
          </form>
        </div>
      </div>
    ) : null;
  }
  return <>{passModal()}</>;
}
export default ModalNotify;
