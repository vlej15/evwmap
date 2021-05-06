import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function PostList(props) {
  const [modify, setModify] = useState(0);
  function changeModify() {
    setModify(!modify);
    console.log(modify);
  }
  return (
    <div>
      {props.comment.map((comm, i) => (
        <div>
          <div key={comm.r_dtt} className="command">
            <p className="comm-writer">
              {comm.r_writer}
              <FontAwesomeIcon
                icon={faEllipsisV}
                className="plus"
                onClick={changeModify}
              />
            </p>
            <div>
              <button>댓글 수정</button>
              <button>댓글 삭제</button>
            </div>
            <p className="comm-body">{comm.r_content}</p>
            <p className="comm-date">{comm.date}</p>
          </div>
          {console.log(comm.name)}
        </div>
      ))}
    </div>
  );
}
export default PostList;
