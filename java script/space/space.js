const stageSize = 15;

//스테이지 생성
for(let i=0; i < stageSize*stageSize; i++) {
    const box = document.childElementCount("div");
    document.querySelector(".grid").appendChild(box);
}

const grid = document.querySelector(".grid");
const stage = document.querySelectorAll(".grid div");
const stattBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const display = document.querySelector("#display");


