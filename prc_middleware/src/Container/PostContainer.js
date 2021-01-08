import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../components/Post";
import { getPost } from "../modules/posts";

export default function PostContainer({ postid }) {
  const { data, loading, error } = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postid));
  }, [postid]);

  if (loading) {
    return <div>로딩중...</div>;
  }
  if (error) {
    return <div>에러...ㅠㅠ</div>;
  }
  if (!data) {
    return null;
  }
  return <Post post={data} />;
}
