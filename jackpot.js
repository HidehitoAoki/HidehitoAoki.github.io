'use strict'
// 1行目に記載している 'use strict' は削除しないでください
//開発者モードの関数------------------------------------------------------------------------------
function developer() {
  if (count === 0) {
    count = 1;
    strNum1.style.display = displayStrNum1;
    strNum2.style.display = displayStrNum2;
  } else {
    count = 0;
    strNum1.style.display = "none";
    strNum2.style.display = "none";
  }
}
//ramdonナンバーを出す関数------------------------------------------------------------------------------
function randomNumber1() {
  const randomNum1 = Math.floor(Math.random() * 3 + 1);
  image1.src = `C:/Users/1572016/Desktop/DIG講座/画像/${randomNum1}.png`;
  return randomNum1;
}
function randomNumber2() {
  const randomNum2 = Math.floor(Math.random() * 3 + 1);
  image2.src = `C:/Users/1572016/Desktop/DIG講座/画像/${randomNum2}.png`;
  return randomNum2;
}
//GameSetの関数---------------------------------------------------------------------------------------
function gameSet() {
  if (arrayMaster[0] === undefined) {
    alert("おめでとう!");
  } else {
    alert("GameOver!");
  }
  turnEnd();
  window.location.reload();
}
//startが押されたときの関数------------------------------------------------------------------------------
function checkNumber() {
  target.removeEventListener('click',checkNumber);
  if (count === 0) {
    num1 = randomNumber1();
    num2 = randomNumber2();
  } else {
    num1 = Number(strNum1.value);
    num2 = Number(strNum2.value);
    image1.src = `C:/Users/1572016/Desktop/DIG講座/画像/${num1}.png`;
    image2.src = `C:/Users/1572016/Desktop/DIG講座/画像/${num2}.png`;
  }
  console.log(num1,num2);
  num = num1 + num2;
  index1 = (arrayMaster.indexOf(num1));
  index2 = (arrayMaster.indexOf(num2));
  index3 = (arrayMaster.indexOf(num));
  const indexM = [index1,index2,index3];

  const numM = [num1,num2,num];
  if(index1 === -1 && index2 === -1 && index3 === -1) {
    setTimeout(500);
    strNum.style.color = "red";
    strNum.innerText = "You Lose!";
    setTimeout(gameSet, 750);
  } else {
    for (let i = 0 ; i < 3 ; i++) {
      if(indexM[i] !== -1) {
        colorChenge(numM[i]);
      }
    }
  }
}
//ランダムナンバーに一致した数字を押せるようにする関数------------------------------------------------------------------------------
function colorChenge(colorNum) {
  let color;
  for (let i = 0 ; i < 3 ; i++) {
    if (colorNum === i + 1) {
    color = objM[i];
    }
  }
  color.style.backgroundColor = "rgb(207, 141, 18)";
  color.addEventListener("click",clickNumber,{once: true});
}
//自分で選んだ番号が押されたときの関数------------------------------------------------------------------------------
function clickNumber(event) {
  const result = event.target.innerText;
  let string;
  for (let i = 0 ; i < 3 ; i++) {
    if (result == i + 1) {
    string = message[i];
    break;
    }
  }

  for (const value of obj) {
    value.style.backgroundColor = "rgb(128, 128, 128)";
    value.removeEventListener('click',clickNumber);
  }
  event.target.innerHTML = `<i>${string}</i>`;
  event.target.style.backgroundColor = "rgb(255, 215, 0)";
  event.target.style.color = "rgb(0, 0, 0)";
  const indexM2 = [index1,index2,index3];
  for (let j = 0 ; j < 3 ; j++) {
    if (result == arrayMaster[indexM2[j]]) {
      obj.splice(indexM2[j], 1);
      arrayMaster.splice(indexM2[j], 1);
      break;
    }
  }
  turnEnd();
  console.log(index1,index2,index3)
  console.log(obj);
  console.log(arrayMaster);
}
//リセットの関数------------------------------------------------------------------------------
function turnEnd() {
  strNum1.value = undefined;
  strNum2.value = undefined;
  image1.src = `C:/Users/1572016/Desktop/DIG講座/画像/nomal.png`;
  image2.src = `C:/Users/1572016/Desktop/DIG講座/画像/nomal.png`;
  if (arrayMaster[0] === undefined) {
    strNum.style.color = "rgb(255, 215, 0)";
    strNum.innerText = "You Win!";
    setTimeout(gameSet, 750);
  } else {
    target.addEventListener("click",checkNumber);
  }
}
//普通の処理------------------------------------------------------------------------------
const arrayMaster = [];
const arrays = document.querySelector("#box").innerText;
for (const key of arrays) {
  if (key !== "\n") {
    arrayMaster.push(Number(key));
  }
}

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const strNum = document.querySelector("#numberBox");
const strNum1 = document.querySelector("#number1");
const strNum2 = document.querySelector("#number2");
const target = document.querySelector("#startCheck1");
const targetDeveloper = document.querySelector("#developer");
const image1 = document.querySelectorAll("img")[0];
const image2 = document.querySelectorAll("img")[1];

const array = [...arrayMaster];
let num1; 
let num2; 
let num;
let index1;
let index2;
let index3;
let count = 0;
const displayStrNum1 = strNum1.style.display;
const displayStrNum2 = strNum1.style.display;
strNum1.style.display = "none";
strNum2.style.display = "none";

const obj = [one,two,three];
const objM = [one,two,three];
const level = 5
const message = [];
if (level === 3) {
  message.push("す");
  message.push("て");
  message.push("き");
} else if (level === 5) {
  message.push("F");
  message.push("N");
  message.push("D");
  message.push("1");
  message.push("6");
}
console.log(message);



target.addEventListener("click",checkNumber);
targetDeveloper.addEventListener("click",developer);
