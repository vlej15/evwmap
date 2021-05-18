import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./css/MDbtn.scss";

function PostList(props) {
  const [modify, setModify] = useState(0);
  const [submenu, setSubmenu] = useState(0);
  const { register, handleSubmit, watch, errors, getValues } = useForm();
  const token = localStorage.getItem("id");

  function changeModify() {
    setModify(!modify);
    console.log(modify);
  }

  //댓글 수정 부분

  function Modify(props) {
    console.log(getValues("reply"));
    const dtt = props;
    var data = JSON.stringify({
      r_content: getValues("reply"),
      r_dtt: dtt,
    });

    var config = {
      method: "patch",
      url: "http://3.36.160.255:8081/api/reply",
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
  }

  //댓글 삭제 부분

  function Delete(props) {
    const dtt = props;
    var data = JSON.stringify({
      r_dtt: dtt,
    });

    var config = {
      method: "delete",
      url: "http://3.36.160.255:8081/api/reply",
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
  }

  return (
    <div>
      <div>
        <div key={props.comment.r_dtt} className="command">
          <p className="comm-writer">
            {props.comment.r_writer}
            <FontAwesomeIcon
              icon={faEllipsisV}
              className="plus"
              onClick={changeModify}
            />
            {modify == 1 ? (
              <div className="MDbtn">
                <button
                  onClick={() => {
                    setSubmenu(1);
                  }}
                >
                  댓글 수정
                </button>
                <button
                  onClick={() => {
                    Delete(props.comment.r_dtt);
                  }}
                >
                  댓글 삭제
                </button>
              </div>
            ) : null}
          </p>
          {submenu == 0 ? (
            <p className="comm-body">{props.comment.r_content}</p>
          ) : (
            <form className="plform">
              <input
                ref={register}
                type="textarea"
                className="reple-text"
                placeholder="댓글을 수정해보세요."
                name="reply"
              />
              <button
                onClick={() => {
                  Modify(props.comment.r_dtt);
                }}
              >
                수정
              </button>
            </form>
          )}

          <p className="comm-date">{props.comment.date}</p>
        </div>
      </div>
    </div>
  );
}
export default PostList;
