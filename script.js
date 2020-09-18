'use strict';
const
firstAppeal = document.getElementById('first-appeal'),
touchRight = document.getElementById('touch-right'),
touchLeft = document.getElementById('touch-left'),
rightPage = document.getElementById('right-page'),
leftPage = document.getElementById('left-page');

function turnPageToRight (jpgName) {
  //一番最初だったら無効にするよ
  if(jpgName === 'url("./img/white.jpg")') {
    return;
  }
  //最初のページだと数字操作ができないので直接指定
  if(jpgName === 'url("./img/page1.jpg")') {
    rightPage.style.backgroundImage = 'url("./img/white.jpg")';
    leftPage.style.backgroundImage = 'url("./img/jacket.jpg")';
    return;
  }
  if(jpgName === 'url("./img/end.jpg")') {
    rightPage.style.backgroundImage = 'url("./img/page3.jpg")';
    leftPage.style.backgroundImage = 'url("./img/page4.jpg")';
    return;
  }
  //バックグラウンドイメージを変更するプログラム
  let pagenum = Number(jpgName[15]);
  rightPage.style.backgroundImage = jpgName.replace(pagenum, pagenum - 2);
  leftPage.style.backgroundImage = jpgName.replace(pagenum, pagenum - 1);
}
function turnPageToLeft (jpgName) {
  switch (jpgName) {
    //一番最初だったら無効にするよ
    case 'url("./img/thanks.jpg")':
      return;
    //ヅャケットだったら直接指定するよ
    case 'url("./img/jacket.jpg")':
      rightPage.style.backgroundImage = 'url("./img/page1.jpg")';
      leftPage.style.backgroundImage = 'url("./img/page2.jpg")';
      return;
    case 'url("./img/page4.jpg")':
      rightPage.style.backgroundImage = 'url("./img/end.jpg")';
      leftPage.style.backgroundImage = 'url("./img/thanks.jpg")';
      return;
    default:
      //バックグラウンドイメージを変更するプログラム
      let pagenum = Number(jpgName[15]);
      rightPage.style.backgroundImage = jpgName.replace(pagenum, pagenum + 1);
      leftPage.style.backgroundImage = jpgName.replace(pagenum, pagenum + 2);
      break;
  }
}

//ハンドルするよ
touchRight.onclick = () => {
  turnPageToRight(rightPage.style.backgroundImage);
};
touchLeft.onclick = () => {
  turnPageToLeft(leftPage.style.backgroundImage);
};
window.onload = () => {
  /*
  //cssの調整するよ
  let width = window.innerHeight * 0.71;
  rightPage.style.width = '' + width + 'px';
  leftPage.style.width = '' + width + 'px';
  touchLeft.style.width = '' + width + 'px';
  touchRight.style.width = '' + width + 'px';
  console.log('ちゃんと定義しました！');
  */
  //ファーストアピールをフェードアウトさせる
  let opacity = 100;
  let feadOut = setInterval(() => {
    opacity -= 1;
    firstAppeal.style.opacity = 0.01 * opacity;
    if (opacity === 0) {
      firstAppeal.style.display = 'none';
      clearInterval(feadOut);
    }
    console.log('1%引いた！');
  }, 10);
  //漫画の最初のページをセットする
  rightPage.style.backgroundImage = 'url(./img/white.jpg)';
  leftPage.style.backgroundImage = 'url(./img/jacket.jpg)';
};