// 最初のメアド
fetch('data/mailaddress.json')
.then(response => response.json())
.then(data => {
  // 子要素を挿入する位置
  var dataCount = 1;
  
  // JSONデータが読み込まれた後、すべてのデータを表示
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      let mailaddressNewsBox = document.getElementById("mailaddressNewsBox");
      let createTable = document.createElement("table");
      let createCaption = document.createElement("caption");
      let createTr = document.createElement("tr");
      let createTd = document.createElement("td");
      createCaption.textContent = key;
      createTd.textContent = data[key];
      createTd.classList.add("copyElement");
      createTable.appendChild(createCaption);
      createTr.appendChild(createTd);
      createTable.appendChild(createTr);
      mailaddressNewsBox.insertBefore(createTable, mailaddressNewsBox.children[dataCount]);
      dataCount++;
    }
  }

  // コピー処理
  for (var i = 0; i < copyElements.length; i++) {
    copyElements[i].addEventListener("click", function() {
      let copyText = this.textContent;
      let copyMessageBox = document.getElementById('copyMessageBox');
      let copiedMailaddress = document.getElementById("copiedMailaddress");
      copiedMailaddress.innerHTML = copyText;
      navigator.clipboard.writeText(copyText);
      copyMessageBox.style.display = 'block';
      setTimeout( ()=> {
        copyMessageBox.style.display = 'none';
      },3000);
    });
  }
})
.catch(error => console.error('エラー:', error));

// 学年切り替え処理
let firstGrade = document.getElementById("firstGrade");
let secondGrade = document.getElementById("secondGrade");
let thirdGrade = document.getElementById("thirdGrade");
let gradePass = "812221b";
var copyElements;

function studentEmail(){
  // 各classを取得
  let classA = document.getElementById("classA");
  let classB = document.getElementById("classB");
  let classC = document.getElementById("classC");
  
　// 各classの中身を削除
  while(classA.firstChild){
    classA.removeChild(classA.firstChild);
  }
  while(classB.firstChild){
    classB.removeChild(classB.firstChild);
  }
  while(classC.firstChild){
    classC.removeChild(classC.firstChild);
  }
  
  // 各classにcaptionを設定
  let classACaption = document.createElement("caption");
  classACaption.textContent = "A組";
  classA.appendChild(classACaption);
  let classBCaption = document.createElement("caption");
  classBCaption.textContent = "B組";
  classB.appendChild(classBCaption);
  let classCCaption = document.createElement("caption");
  classCCaption.textContent = "C組";
  classC.appendChild(classCCaption);

  // 各クラスごとの使用変数を定義・初期化
  let ANumber = 1;
  let ANumberTrue = ('0' + ANumber).slice(-2);
  let BNumber = 1;
  let BNumberTrue = ('0' + BNumber).slice(-2);
  let CNumber = 1;
  let CNumberTrue = ('0' + CNumber).slice(-2);

  // 各クラス４０回分繰り返す
  for(i = 0; i < 40; i++){
    ANumberTrue = ('0' + ANumber).slice(-2);
    let AEmail = `${gradePass}a${ANumberTrue}@gse.okayama-c.ed.jp`;
    let createTr = document.createElement("tr");
    let createTd = document.createElement("td");
    createTd.classList.add("copyElement");
    createTd.textContent = AEmail;
    createTr.appendChild(createTd);
    classA.appendChild(createTr);
    ANumber++;
  }
  for(i = 0; i < 40; i++){
    BNumberTrue = ('0' + BNumber).slice(-2);
    let BEmail = `${gradePass}b${BNumberTrue}@gse.okayama-c.ed.jp`;
    let createTr = document.createElement("tr");
    let createTd = document.createElement("td");
    createTd.classList.add("copyElement");
    createTd.textContent =  BEmail;
    createTr.appendChild(createTd);
    classB.appendChild(createTr);
    BNumber++;
  }
  for(i = 0; i < 40; i++){
    CNumberTrue = ('0' + CNumber).slice(-2);
    let CEmail = `${gradePass}c${CNumberTrue}@gse.okayama-c.ed.jp`;
    let createTr = document.createElement("tr");
    let createTd = document.createElement("td");
    createTd.classList.add("copyElement");
    createTd.textContent = CEmail;
    createTr.appendChild(createTd);
    classC.appendChild(createTr);
    CNumber++;
  }
  copyElements = document.getElementsByClassName("copyElement");

  // コピー処理
  for (var i = 0; i < copyElements.length; i++) {
    copyElements[i].addEventListener("click", function() {
      let copyText = this.textContent;
      let copyMessageBox = document.getElementById('copyMessageBox');
      let copiedMailaddress = document.getElementById("copiedMailaddress");
      copiedMailaddress.innerHTML = copyText;
      navigator.clipboard.writeText(copyText);
      copyMessageBox.style.display = 'block';
      setTimeout( ()=> {
        copyMessageBox.style.display = 'none';
      },3000);
    });
  }
}

// サイト表示時に関数を一度実行
studentEmail();

firstGrade.addEventListener('click',function(){
  firstGrade.style.backgroundColor = "#736357";
  firstGrade.style.color = "#ffffff";
  secondGrade.style.backgroundColor = "transparent";
  secondGrade.style.color = "#707070"
  thirdGrade.style.backgroundColor = "transparent";
  thirdGrade.style.color = "#707070";
  gradePass = "812322r";
  studentEmail();
},false);

secondGrade.addEventListener('click',function(){
  firstGrade.style.backgroundColor = "transparent";
  firstGrade.style.color = "#707070";
  secondGrade.style.backgroundColor = "#736357";
  secondGrade.style.color = "#ffffff";
  thirdGrade.style.backgroundColor = "transparent";
  thirdGrade.style.color = "#707070";
  gradePass = "812221b";
  studentEmail();
},false);

thirdGrade.addEventListener('click',function(){
  firstGrade.style.backgroundColor = "transparent";
  firstGrade.style.color = "#707070";
  secondGrade.style.backgroundColor = "transparent";
  secondGrade.style.color = "#707070";
  thirdGrade.style.backgroundColor = "#736357";
  thirdGrade.style.color = "#ffffff";
  gradePass = "812120g";
  studentEmail();
},false);
