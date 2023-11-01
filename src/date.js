// 今日の日付
let today = new Date();
let month = today.getMonth() + 1;
let date = today.getDate();
const weekDay = ["日","月","火","水","木","金","土"];
let day = weekDay[today.getDay()];
const dateBox = document.getElementById("dateBox");

dateBox.innerText = month + "/" + date + " " + "(" + day + ")";

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