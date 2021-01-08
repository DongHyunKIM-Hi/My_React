import React from "react";

export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <h3>{post.body}</h3>
    </div>
  );
}
