var http = require("http"); //http 모듈을 사용하겠다.
var fs = require("fs"); // filesystem 모듈을 사용하겠다.
var url = require("url"); // url 모듈을 사용하겠다.

var app = http.createServer(function (request, response) {
  //서버를 만들겠다.
  var _url = request.url; //요청한 리퀘스트의 url 키의 값을 받아오겠다.
  var queryData = url.parse(_url, true).query; //url 모듈의 parse 기능을 사용할건데 true를 사용했음으로 객체 형식으로 반환해주고 그중에서도 query값만 보내주세요
  var pathname = url.parse(_url, true).pathname; //url 모듈의 parse 기능을 사용할건데 true를 사용했음으로 객체 형식으로 반환해주고 그중에서도 pathname 값만 보내주세요

  if (pathname === "/") {
    //pathname이 / 이면 실행
    if (queryData.id === undefined) {
      var title = "Welcome test";
      fs.readFile(`data/${queryData.id}`, "utf8", (err, discription) => {
        // fs 모듈의 readFile을 사용 (파일의 위치, 파일의 형식, (에러가 나거나, 파일의 값)=>{실행}))
        var discription = "Hello nice to meet you";
        var template = `
                    <!doctype html>
                  <html>
                  <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                  </head>
                  <body>
                    <h1><a href="/">WEB</a></h1>
                    <ol>
                      <li><a href="/?id=HTML">HTML</a></li>
                      <li><a href="/?id=CSS">CSS</a></li>
                      <li><a href="/?id=js">JavaScript</a></li>
                    </ol>
                    <h2>${title}</h2>
                    <p>${discription}
                    </p>
                  </body>
                  </html>`;
        response.writeHead(200); //서버 프로토콜 약속 200은 서버에 값이 잘 전달되었다.
        response.end(template); //컨텐츠 출력 완료 template를 출력하라
      });
    } else {
      var title = queryData.id; // queryData 객체에서  id 값만 추출할게요 [object: {id: 어떤값}] => 어떤값
      fs.readFile(`data/${queryData.id}`, "utf8", (err, discription) => {
        // fs 모듈의 readFile을 사용 (파일의 위치, 파일의 형식, (에러가 나거나, 파일의 값)=>{실행}))
        var template = `
                    <!doctype html>
                  <html>
                  <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                  </head>
                  <body>
                    <h1><a href="/">WEB</a></h1>
                    <ol>
                      <li><a href="/?id=HTML">HTML</a></li>
                      <li><a href="/?id=CSS">CSS</a></li>
                      <li><a href="/?id=js">JavaScript</a></li>
                    </ol>
                    <h2>${title}</h2>
                    <p>${discription}
                    </p>
                  </body>
                  </html>`;
        response.writeHead(200); //서버 프로토콜 약속 200은 서버에 값이 잘 전달되었다.
        response.end(template); //컨텐츠 출력 완료 template를 출력하라
      });
    }
  } else {
    response.writeHead(404); // 서버 프로토콜 약속 404는 클라이언트 오류
    response.end("not found"); //컨텐츠 출력
  }
});
app.listen(3000);
