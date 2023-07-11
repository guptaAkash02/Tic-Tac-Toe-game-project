let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let isgameover = false;
let turn = "X";

// function to change for turn
const changeforturn = () => {
  return turn === "X" ? "0" : "X";
};

// function to check for win
const checkwin = () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];

  wins.forEach((element) => {
    if (
      boxtexts[element[0]].textContent === boxtexts[element[1]].textContent &&
      boxtexts[element[1]].textContent === boxtexts[element[2]].textContent &&
      boxtexts[element[1]].textContent !== ""
    ) {
      document.querySelector(".info").textContent =
        boxtexts[element[0]].textContent + " " + "won";
      isgameover = true;
      document.querySelector("img").style.width = "200px";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${element[3]}vw, ${element[4]}vw) rotate(${element[5]}deg)`;
      document.querySelector(".line").style.width = `20vw`;
      gameover.play();
    }
  });
};

// gamelogic
//  music.play()
let boxes = document.querySelectorAll(".box");
boxes.forEach((ele) => {
  let boxtext = ele.querySelector(".boxtext");

  ele.addEventListener("click", () => {
    if (boxtext.textContent === "") {
      boxtext.textContent = turn;

      turn = changeforturn();
      audioturn.play();
      checkwin();
      if (!isgameover) {
        document.querySelector(".info").textContent = "Turn for" + " " + turn;
      }
    }
  });
});

document.querySelector("#reset").addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  boxtexts.forEach((e) => {
    e.textContent = "";
  });
  turn = "X";
  isgameover = false;
  document.querySelector(".info").textContent = "Turn for" + " " + turn;
  document.querySelector("img").style.width = "0px";
  document.querySelector(".line").style.width = `0vw`;
});
