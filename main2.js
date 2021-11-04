// 東京(130000)の予報を取得
let url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (weather) {
    console.log(weather);
    // 特定の地域(今回は東京)だけ選択して変数に詰め直す
    let area = weather[0].timeSeries[0].areas[0];
    // 最低最高気温
    let area2 = weather[0].timeSeries[2].areas[0];
    console.log("areaだよ");
    console.log(area2);
    // 発表者と報告日時の情報を画面に書き出す
    document.getElementById("publishingOffice").lastElementChild.textContent =
      weather[0].publishingOffice;
    document.getElementById("reportDatetime").lastElementChild.textContent =
      weather[0].reportDatetime;
    // 特定地域の情報を画面に書き出す
    document.getElementById("targetArea").lastElementChild.textContent =
      area.area.name;
    document.getElementById("today").lastElementChild.textContent =
      area.weathers[0];
    document.getElementById("tomorrow").lastElementChild.textContent =
      area.weathers[1];
    document.getElementById("dayAfterTomorrow").lastElementChild.textContent =
      area.weathers[2];
    document.getElementById("todayMaxTemp").lastElementChild.textContent =
      area2.temps[0];
    document.getElementById("todayMinTemp").lastElementChild.textContent =
      area2.temps[1];
  });
