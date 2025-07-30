let gameseq = [];
let userseq = [];

let btns = ["red", "yellow", "blue", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started === false) {
    console.log("Game is started");
    started = true;

    levelup();
  }
});

function btnflash(btn) {
  btn.classList.add("btnflash"); // in css me jake dekh
  setTimeout(function () {
    btn.classList.remove("btnflash");
  },500);
}

function userflash(btn) {
  btn.classList.add("userflash"); // css me jake dekh
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 500);
}

function levelup() {
  userseq = [];
  level++;
  h2.innerText = "level " + level;

  // select a random button
  let randidx = Math.floor(Math.random() * 4);
  let randcolor = btns[randidx]; // upr array bna huaa h
  let randbtn = document.querySelector(`.${randcolor}`);
  gameseq.push(randcolor);
  console.log(gameseq);
  btnflash(randbtn);
} 

function checkans(index) {
  if (userseq[index] === gameseq[index]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerHTML = `Game over! Your score is <b> ${level} </b> < br> press any key to start again`;
    reset();
  }
}

function btnpress() {
  let btn = this;
  userflash(btn);

  let usercolor = btn.getAttribute("id");
  userseq.push(usercolor);

  checkans(userseq.length-1);
}

let btnall = document.querySelectorAll(".btn");
for (btn of btnall) {
  btn.addEventListener("click", btnpress);
}

function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
