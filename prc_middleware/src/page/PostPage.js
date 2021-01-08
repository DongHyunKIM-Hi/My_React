import React from "react";
import PostContainer from "../Container/PostContainer";

export default function PostPage({ match }) {
  const { id } = match.params;
  const postId = parseInt(id, 10);
  return <PostContainer postid={postId} />;
}
