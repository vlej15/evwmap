import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useHistory, useParams } from "react-router-dom";
import "./css/MDbtn.scss";

function PostList(props) {
  const [comment, setComment] = useState([]);

  const [modify, setModify] = useState(0);
  const [submenu, setSubmenu] = useState(0);
  const { register, handleSubmit, watch, errors, getValues } = useForm();
  const token = localStorage.getItem("id");
  const { id } = useParams();
  const [reply, setReply] = useState("");

  function changeModify() {
    setModify(!modify);
    console.log(modify);
  }

  //댓글 수정 부분

  function Modify(props1) {
    console.log(getValues("reply"));
    setSubmenu(0);
    const dtt = props1;
    var data = JSON.stringify({
      r_content: getValues("reply"),
      r_dtt: dtt,
    });

    var config = {
      method: "patch",
      url: "http://193.122.106.148:8081/api/reply",
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

    var data1 = JSON.stringify({
      criteria: {},
    });
    var config = {
      method: "post",
      url: "http://193.122.106.148:8081/api/board/" + id,
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      data: data1,
    };
    axios(config)
      .then(function (response) {
        props.setComment(response.data.replyList);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //댓글 삭제 부분

  function Delete(props1) {
    const dtt = props1;
    var data = JSON.stringify({
      r_dtt: dtt,
    });

    var config = {
      method: "delete",
      url: "http://193.122.106.148:8081/api/reply",
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

    var data1 = JSON.stringify({
      criteria: {},
    });
    var config = {
      method: "post",
      url: "http://193.122.106.148:8081/api/board/" + id,
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      data: data1,
    };
    axios(config)
      .then(function (response) {
        props.setComment(response.data.replyList);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const onReplyChange = (e) => {
    setReply(e.target.value);
  };

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
                    setModify(!modify);
                    setReply(props.comment.r_content);
                  }}
                >
                  댓글수정
                </button>
                <button
                  onClick={() => {
                    Delete(props.comment.r_dtt);
                    setModify(!modify);
                    window.location.reload();
                  }}
                >
                  댓글삭제
                </button>
              </div>
            ) : null}
          </p>
          {submenu == 0 ? (
            <p className="comm-body">{props.comment.r_content}</p>
          ) : (
            <form className="plform">
              <textarea
                ref={register}
                type="textarea"
                className="reple-text"
                name="reply"
                value={reply}
                onChange={onReplyChange}
              />
              <button
                type="button"
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
