const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// 가짜 포스트 목록 데이터
const posts = [
  {
    id: 1,
    title: "1번",
    body: "1번 몸통",
  },
  {
    id: 2,
    title: "2번",
    body: "2번 몸통",
  },
  {
    id: 3,
    title: "3번",
    body: "3번 몸통",
  },
];

// 포스트 목록을 가져오는 비동기 함수
export const getPosts = async () => {
  await sleep(1000); // 0.5초 쉬고
  return posts; // posts 배열
};

// ID로 포스트를 조회하는 비동기 함수
export const getPostById = async (id) => {
  await sleep(1000); // 0.5초 쉬고
  return posts.find((post) => post.id === id); // id 로 찾아서 반환
};
