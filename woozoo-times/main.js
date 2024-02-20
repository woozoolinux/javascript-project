
const API_KEY='021e05a5adf6492e929715a91c5e8765'
let news=[];

// 비동기 함수를 이용, await 사용할 때 필요
const getLatestNews = async() => {
    const url = new URL (`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
    
    //생성된 URL로 비동기 요청을 보낸다. await을 사용하면 응답이 올 때까지 기다린다.
    const response = await fetch(url);
    // 방금 받은 데이터를 JSON형식으로 요청(객체 처럼 생겨서 주고받고 사용하기가 편리)
    // 서버 통신 관련된 것은 다 기다려 줘야 한다
    const data = await response.json();
    news = data.articles;
    console.log(news)
}

getLatestNews()