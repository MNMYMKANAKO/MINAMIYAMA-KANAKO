// 'use strict'

// let i = 2;
// if (i === 1) {
//     console.log("真です");
// }

function scoreCheck(){
let testScore = document.getElementById('score').Value
if (testScore >= 80)　{
    document.write("合格です！おめでとうございます！");
}   else if (testScore >= 70) {
    document.write("惜しい！");
}　else{
    document.write("不合格です");
}

// const nameList =["田中","山田","林","佐藤"];


// for (let i = 0; i < nameList.lenght ; i++) {
//     console.log(`${i+1}.${nameList[i]}`);
// }

// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) continue;
//     console.log(i);
// }

// for (let i = 1; i < 1000; i++){
//     if(i > 10) break;
//     console.log(i);
// }