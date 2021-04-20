import React from "react";
import "./css/Post.scss";
import "./css/PostList.scss";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Test() {
  const [posts, setPosts] = useState([]);
  let comments;
  const { id } = useParams();

  useEffect(async () => {
    var config = {
      method: "get",
      url: "http://3.36.160.255:8081/api/boardlist?page=2&cat_cd=1",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJ1c2VyIiwiaWF0IjoxNjE4NzkyOTYxLCJleHAiOjE2MTg4MTA5NjF9.pk8kUnqcKrWBPRLFGihf-wTffSkIq5bXuhLMVmJSyFUjoukagZZ3GFMXCs42GtmejpfFbvWnPva_RsUhwgAKUw",
        "Content-Type": "application/json",
      },
    };

    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setPosts(response.data);
        console.log(posts.boardList[1].cat_cd);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return <div></div>;
}
export default Test;
