const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const posts = [
  {
    id: 1,
    title: "만들어보기",
    body: "이렇게 만들어 볼까요?",
  },
  {
    id: 2,
    title: "42seoul",
    body: "42seoul 선착순 ㅠㅠ",
  },
];

export const getPost = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id == id);
};

export const getPosts = async () => {
  await sleep(500);
  return posts;
};
