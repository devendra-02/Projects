
// 1
let gameseq = [];
let userseq = [];

let btns = ["red", "yellow", "blue", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// 2

document.addEventListener("keypress", function () {
  if (started === false) {
    console.log("Game is started");
    started = true;

    levelup();
  }
});

//  lifgt flash 

function btnflash(btn) {
  btn.classList.add("btnflash"); // in css me jake dekh
  setTimeout(function () {
    btn.classList.remove("btnflash");
  },500);
}

// lifgt flash

function userflash(btn) {
  btn.classList.add("userflash"); // css me jake dekh
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 500);
}

// 3

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

// 5

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

// 4

function btnpress() {
  let btn = this;
  userflash(btn);

  let usercolor = btn.getAttribute("id");
  userseq.push(usercolor);

  checkans(userseq.length-1);
}

//  pata lagta hai ki user ne kaunsa color dabaya

let btnall = document.querySelectorAll(".btn");  //Sabhi buttons ko clickable banana ,
for (btn of btnall) {
  btn.addEventListener("click", btnpress);  // Har button click par btnpress() function call karna 
}

// agr glt enter kiya to reset the game 

function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
