const express = require("express"); //express 는 프레임워크
const app = express(); // app은 생성자 app에 들어있는 함수사용가능
const port = 3000; //내 포트번호

app.use((req, res) => {
  res.writeHead("200", { "content-type": "text/html;charset=utf8" });
  res.end("<h1>익스프레스 서버에서 응답한 메세지입니다.</h1>");
});

app.listen(port, () => {
  // 이런 포트번호로 연결하겠다.
  console.log(`${port} 포트로 서버 실행중...`);
});
