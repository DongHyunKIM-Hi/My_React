import * as postsApi from "../api/posts";
import { reducerUtils } from "../lib/asyncUtils";

const GET_POST = "posts/get_post";
const GET_POST_SUCCESS = "posts/get_post_success";
const GET_POST_ERROR = "posts/get_post_error";

const GET_POSTS = "posts/get_posts";
const GET_POSTS_SUCCESS = "posts/get_posts_success";
const GET_POSTS_ERROR = "posts/get_posts_error";

export const getPosts = () => async (dispatch) => {
  dispatch({ type: GET_POSTS });
  try {
    const posts = await postsApi.getPosts;
    dispatch({ type: GET_POSTS_SUCCESS, posts });
  } catch (e) {
    dispatch({ type: GET_POSTS_ERROR, error: e });
  }
};

export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_POST });
  try {
    const post = await postsApi.getPost(id);
    dispatch({ type: GET_POST_SUCCESS, post });
  } catch (e) {
    dispatch({ type: GET_POST_ERROR, error: e });
  }
};

export default function posts(state = postState, action) {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        post: reducerUtils.loading(state.post.data),
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: reducerUtils.success(action.post),
      };
    case GET_POST_ERROR:
      return {
        ...state,
        post: reducerUtils.error(action.error),
      };
    case GET_POSTS:
      return {
        ...state,
        posts: reducerUtils.loading(state.posts.data),
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: reducerUtils.success(action.posts),
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: reducerUtils.error(action.error),
      };
  }
}

const postState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};
