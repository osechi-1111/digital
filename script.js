// 今日の日付
let today = new Date();
let month = today.getMonth() + 1;
let date = today.getDate();
const weekDay = ["日","月","火","水","木","金","土"];
let day = weekDay[today.getDay()];
const dateBox = document.getElementById("dateBox");

dateBox.innerText = month + "/" + date + " " + "(" + day + ")";

// タブ
document.addEventListener("DOMContentLoaded", function () {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // すべてのタブのアクティブクラスを削除
            tabLinks.forEach((tabLink) => {
                tabLink.classList.remove("active");
            });

            // クリックされたタブにアクティブクラスを追加
            link.classList.add("active");

            // すべてのタブのコンテンツを非表示
            tabContents.forEach((content) => {
                content.classList.remove("active");
            });

            // 対応するタブのコンテンツを表示
            const tabId = link.getAttribute("data-tab");
            const tabContent = document.getElementById(tabId);
            tabContent.classList.add("active");
        });
    });

    // 最初のタブをアクティブに設定
    tabLinks[0].click();
});

// 日付自動入力処理
let dayBoxes = document.getElementsByClassName("dayBox");
let firstDayBox = document.getElementById("firstDayBox").innerHTML;
let firstDayBoxNumber = weekDay.indexOf(firstDayBox);
let dayNumber = firstDayBoxNumber;

for(let i = 0; i < dayBoxes.length; i++) {
  dayNumber++;
  if(dayNumber != 7){
    dayBoxes[i].innerHTML = weekDay[dayNumber];
  }else{
    dayNumber = 0;
    dayBoxes[i].innerHTML = weekDay[dayNumber];
  }
}
