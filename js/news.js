window.addEventListener("load", function () {
 const apiKey = config.apiKey;
 const newsUrl = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}`;
 // 1. api 호출하고 성공하면
 fetch(newsUrl)
  .then((response) => {
   console.log(response);
   return response.json();
  })
  .then((data) => {
   const result = makeHtmlTag(data);
   return result;
  })
  .catch((error) => {
   console.log(error);
  });

 // html 태그 생성 함수
 function makeHtmlTag(data) {
  console.log(data);
 }
});
