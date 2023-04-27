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
function randomNumber() {
  num1 = Math.floor(Math.random() * levelCount + 1);
  num2 = Math.floor(Math.random() * levelCount + 1);
}
//GameSetの関数---------------------------------------------------------------------------------------
function gameSet() {
  if (arrayMaster[0] === undefined) {
    alert("GameClear!");
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
    randomNumber();
  } else {
    num1 = Number(strNum1.value);
    num2 = Number(strNum2.value);
  }
  image1.src = `https://github.com/HidehitoAoki/HidehitoAoki.github.io/blob/main//${num1}.png?raw=true`;
  image2.src = `https://github.com/HidehitoAoki/HidehitoAoki.github.io/blob/main//${num2}.png?raw=true`;
  num = num1 + num2;
  index1 = (arrayMaster.indexOf(num1));
  index2 = (arrayMaster.indexOf(num2));
  index3 = (arrayMaster.indexOf(num));
  const indexM = [index1,index2,index3];
  const numM = [num1,num2,num];
  if(index1 === -1 && index2 === -1 && index3 === -1) {
    setTimeout(1500);
    strNum.style.color = "red";
    strNum.innerText = "You lose!";
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
  for (let i = 0 ; i < level ; i++) {
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
  for (let i = 0 ; i < level ; i++) {
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
}
//リセットの関数------------------------------------------------------------------------------
function turnEnd() {
  strNum1.value = undefined;
  strNum2.value = undefined;
  image1.src = `https://github.com/HidehitoAoki/HidehitoAoki.github.io/blob/main/nomal.png?raw=true`;
  image2.src = `https://github.com/HidehitoAoki/HidehitoAoki.github.io/blob/main/nomal.png?raw=true`;
  if (arrayMaster[0] === undefined) {
    strNum.style.color = "rgb(255, 215, 0)";
    strNum.innerText = "You win!";
    setTimeout(gameSet, 750);
  } else {
    target.addEventListener("click",checkNumber);
  }
}
//モード選択の関数------------------------------------------------------------------------------
function modeSelect(event) {
  mode.style.display = "none";
  main.style.display = "block";
  menuReturnM.style.display = "block";
  if (event.srcElement.id === "mode1") {
    level = 3;
    levelCount = level;
    message = ["す","て","き"];
  } else if (event.srcElement.id === "mode2") {
    level = 5;
    levelCount = level;
    message = ["F","N","D","1","6"];
  } else if (event.srcElement.id === "mode3") {
    level = 9;
    levelCount = 6;
    message = ["☆","J","A","C","K","P","O","T","☆"];
  }
  for (let i = 0 ; i < 9 - level ; i++) {
    objMasterP[8 - i].style.display = "none";
  }
  for (let i = 0 ; i < level ; i++) {
    obj.push(objMaster[i]);
    objM.push(objMaster[i]);
    arrayMaster.push(i + 1);
  }
}
//あそびかたの関数------------------------------------------------------------------------------
function showRule() {
  mode.style.display = "none";
  menuReturnM.style.display = "block";
  torisetu.style.display = "block";
}
//リセットの関数------------------------------------------------------------------------------
function menuReturnFuc() {
  window.location.reload();
}
//普通の処理------------------------------------------------------------------------------
const arrays = document.querySelector("#box").innerText;
const main = document.querySelector("#main");
const mode = document.querySelector("#mode");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const oneP = document.querySelector("#oneP");
const twoP = document.querySelector("#twoP");
const threeP = document.querySelector("#threeP");
const fourP = document.querySelector("#fourP");
const fiveP = document.querySelector("#fiveP");
const sixP = document.querySelector("#sixP");
const sevenP = document.querySelector("#sevenP");
const eightP = document.querySelector("#eightP");
const nineP = document.querySelector("#nineP");
const strNum = document.querySelector("#numberBox");
const strNum1 = document.querySelector("#number1");
const strNum2 = document.querySelector("#number2");
const target = document.querySelector("#startCheck1");
const targetDeveloper = document.querySelector("#developer");
const image1 = document.querySelectorAll("img")[0];
const image2 = document.querySelectorAll("img")[1];
const mode1 = document.querySelector("#mode1");
const mode2 = document.querySelector("#mode2");
const mode3 = document.querySelector("#mode3");
const rule = document.querySelector("#rule");
const torisetu = document.querySelector("#torisetu");
const menuReturn = document.querySelector("#return");
const menuReturnM = document.querySelector(".return");
const displayStrNum1 = strNum1.style.display;
const displayStrNum2 = strNum1.style.display;
strNum1.style.display = "none";
strNum2.style.display = "none";
torisetu.style.display = "none";
menuReturnM.style.display = "none";
let num1; 
let num2; 
let num;
let index1;
let index2;
let index3;
let count = 0;
let level = 0;
let levelCount = 0;
const arrayMaster = [];
const objMasterP = [oneP,twoP,threeP,fourP,fiveP,sixP,sevenP,eightP,nineP];
const objMaster = [one,two,three,four,five,six,seven,eight,nine];
const obj = [];
const objM = [];
let message = [];
mode1.addEventListener("click",modeSelect);
mode2.addEventListener("click",modeSelect);
mode3.addEventListener("click",modeSelect);
target.addEventListener("click",checkNumber);
targetDeveloper.addEventListener("click",developer);
rule.addEventListener("click",showRule);
menuReturn.addEventListener("click",menuReturnFuc);
