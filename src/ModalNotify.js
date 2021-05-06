import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./css/ModalNotify.scss";

function ModalNotify() {
  const [pass, setPass] = useState(0);
  const { register, handleSubmit, watch, errors, getValues } = useForm();
  const onSubmit = (data) => console.log(data);

  function passModal() {
    function sure() {
      if (getValues("text") != "") {
        alert("정상적으로 접수되었습니다. 감사합니다.");
        setPass(0);
      }
    }
    return pass == 1 ? (
      <div className="modal-background">
        <div className="contentsModal">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="title">고장신고</div>
            <p className="etc">
              불법 주차 문제는 '생활불편신고어플'을 이용해주세요.
            </p>
            <div className="notify">
              <input
                ref={register({ required: true })}
                name="text"
                className="text"
                placeholder="신고 사유를 입력해주세요."
                name="text"
              ></input>
            </div>
            <div className="btn-area">
              <button type="submit" className="ok" name="ok" onClick={sure}>
                신고
              </button>
              <button
                className="cancel"
                onClick={() => {
                  setPass(0);
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
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setPass(!pass);
        }}
      >
        변경
      </button>
      {passModal()}
    </>
  );
}
export default ModalNotify;
