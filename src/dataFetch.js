// 英語の五文
fetch('data/EnglishData.txt')
.then(response => response.text())
.then(data => {
  // テキストデータを行ごとに分割
  const lines = data.split('\n');

  // Unitを取得
  const todayUnit = lines[1];

  // 英語のヘッドラインを取得
  const EnglishHeadLine = document.getElementById("EnglishHeadLine");
  
  EnglishHeadLine.innerHTML = todayUnit;

  // 英語のニュースボックスを取得
  const EnglishNewsBox = document.getElementById("EnglishNewsBox");

  // テスト週間用ニュースボックスを取得
  const testEnglishNewsBox = document.getElementById("testEnglishNewsBox");

  // カウンター
  const counter = lines[9];

  // テスト週間用の本文最初の行番号
  let lineNumber = 12;

  // 2行目から7行目までのデータを取得
  for (let i = 2; i < 7; i++) {
    const lineData = lines[i];
    
    const paragraph = document.createElement("p");

    paragraph.textContent = lineData;

    EnglishNewsBox.appendChild(paragraph);
  }

  // カウンターが0ではなかった場合のみ実行
  if(counter != 0){
    // テスト週間用ニュースボックスにデータを追加
    for(let i = 0; i < counter; i++){
      let createHeadLine = document.createElement("h2");
      createHeadLine.classList.add("headLine");
      createHeadLine.textContent = lines[lineNumber];
      testEnglishNewsBox.appendChild(createHeadLine);

      let lineNumberP1 = lineNumber + 1;
      let lineNumberP6 = lineNumber + 6;
      
      for (let i = lineNumberP1; i < lineNumberP6; i++) {
        const lineData = lines[i];

        const paragraph = document.createElement("p");

        paragraph.textContent = lineData;

        testEnglishNewsBox.appendChild(paragraph);
      }
      lineNumber = lineNumber + 7;
    }
  }else{
    // テスト週間用五文の数が0の場合はテスト週間用ニュースボックスを削除（非表示）
    testEnglishNewsBox.remove();
  }
})
.catch(error => console.error('読み込みエラー:', error));
