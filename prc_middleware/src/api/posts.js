import axios from "axios";

export const getPost = async (id) => {
  const response = await axios.get(`/posts/${id}`);
  return response.data;
};

export const getPosts = async () => {
  const response = await axios.get("/posts");
  return response.data;
};
