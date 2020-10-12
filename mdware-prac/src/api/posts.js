// n 밀리세컨드동안 기다리는 프로미스를 만들어주는 함수
const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// 가짜 포스트 목록 데이터
const posts = [
  {
    id: 1,
    title: "1번의 제목",
    body: "react 어렵다 ㅠㅠ 진짜 ",
  },
  {
    id: 2,
    title: "2번의 제목",
    body: "이해가 안되서 죽것어 ㅠㅠ",
  },
  {
    id: 3,
    title: "3번의 제목",
    body: "이해할 때 까지 갈려본다",
  },
];

// 포스트 목록을 가져오는 비동기 함수
export const getPosts = async () => {
  await sleep(500); // 0.5초 쉬고
  return posts; // posts 배열
};

// ID로 포스트를 조회하는 비동기 함수
export const getPostById = async (id) => {
  await sleep(500); // 0.5초 쉬고
  return posts.find((post) => post.id === id); // id 로 찾아서 반환
};
