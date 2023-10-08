// 今日の日付
let today = new Date();
let month = today.getMonth() + 1;
let date = today.getDate();
const weekDay = ["日","月","火","水","木","金","土"];
let day = weekDay[today.getDay()];
const dateBox = document.getElementById("dateBox");

dateBox.innerText = month + "/" + date + " " + "(" + day + ")";
