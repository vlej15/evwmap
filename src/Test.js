import React from "react";
import "./css/Post.scss";
import "./css/PostList.scss";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Test() {
  let posts = [1, 2, 3, 4, 5];
  let comments;
  const { id } = useParams();

  useEffect(async () => {
    // 게시판 데이터
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const recommend = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    // setPosts(response.data);
    // setComments(recommend.data);
    posts = response.data;
    comments = recommend.data;
  }, []);

  let post = posts.find((post) => post.id == id);
  const comment = comments.filter((commend) => commend.postId == id);
  console.log(post);
  return <div></div>;
}
export default Test;
