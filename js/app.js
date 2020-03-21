// global vars
const nameInputUI = document.getElementById("nameInput");
const progressBarUI = document.getElementById("progressDiv");
const showResultUI = document.getElementById("showResult");
const startBtnUI = document.getElementById("startBtn");

// quotes array
let mothersQuotes = [
  "There has never been, nor will there ever be, anything quite so special as the love between the mother and a son.",
  "A man loves his sweetheart the most, his wife the best, but his mother the longest.",
  "Mothers are inscrutable beings to their sons, always",
  "Sons are the anchors of a mother’s life.",
  "All that I am, or hope to be, I owe to my angel mother.",
  "You may have tangible wealth untold; Caskets of jewels and coffers of gold. Richer than I you can never be. I had a mother who read to me.",
  "Mother is her son’s first god. She must teach him the most important lesson of all – how to love.",
  "A mother’s arms are made of tenderness and children sleep soundly in them.",
  "My mother is my root, my foundation. She planted the seed that I base my life on, and that is the belief that the ability to achieve starts in your mind.",
  "If a man has been his mother’s undisputed darling he retains throughout life the triumphant feeling, the confidence in success, which not seldom brings actual success along with it."
];

let fathersQuotes = [
  "It is not flesh and blood, but heart which makes us fathers and sons.” – Johann Friedrich Von Schiller",
  "There is no love on earth greater than that of a father for his son.",
  "It is the duty of the father to give his sons a good chance.",
  "When my dad did not hold my hand, he had my back.",
  "My father gave me the greatest gift anyone could give another person, he believed in me.” – Jim Valvano",
  "Fathers should know that sons follow their example, not advice.",
  "Nothing is dearer to an ageing father than his son.",
  "A boy’s first hero is his dad.",
  "A son does not pass judgement on his father, but he is his father’s conscience."
];

document.addEventListener("DOMContentLoaded", function() {
  nameInputUI.focus();
  progressBarUI.style.display = "none";
  showResultUI.style.display = "none";
  if (localStorage.getItem("data") === null) {
    localStorage.setItem("data", JSON.stringify({}));
    // console.log(1);
  }
});

// dependent functions
const lastCalculation = userName => {
  const randomValue = Math.random();
  if (randomValue < 0.5) {
    const randomQuoteIndex = Math.floor(Math.random() * fathersQuotes.length);
    let temp = Math.round(50 + 100 * randomValue);
    showResultUI.innerHTML = `<h3>You're ${temp}% as your father.</h3>
    <p>${fathersQuotes[randomQuoteIndex]}</p>`;
    // Save data in localstrage
    oldData = JSON.parse(localStorage.getItem("data"));
    oldData[userName] = `<h3>You're ${temp}% as your father.</h3>
    <p>${fathersQuotes[randomQuoteIndex]}</p>`;
    localStorage.setItem("data", JSON.stringify(oldData));
  } else {
    const randomQuoteIndex = Math.floor(Math.random() * mothersQuotes.length);
    let temp = Math.round(100 * randomValue);
    showResultUI.innerHTML = `<h3>You're ${temp}% as your mother.</h3>
    <p>${mothersQuotes[randomQuoteIndex]}</p>`;
    // Save data in localstrage
    oldData = JSON.parse(localStorage.getItem("data"));
    oldData[userName] = `<h3>You're ${temp}% as your mother.</h3>
    <p>${mothersQuotes[randomQuoteIndex]}</p>`;
    localStorage.setItem("data", JSON.stringify(oldData));
  }
};

const calculate = () => {
  const userName = nameInputUI.value;
  if (userName === "") {
    alert("Enter your name");
    return;
  }

  startBtnUI.style.disabled = "true";
  progressBarUI.style.display = "block";
  showResultUI.style.display = "none";
  setTimeout(function() {
    progressBarUI.style.display = "none";
    showResultUI.innerHTML = "hello";
    // fetch data from localstrage
    lsData = JSON.parse(localStorage.getItem("data"));
    if (lsData[userName] !== undefined) {
      showResultUI.innerHTML = lsData[userName];
    } else {
      lastCalculation(userName);
    }
    showResultUI.style.display = "block";
    startBtnUI.style.disabled = "false";
  }, 1200);
};

// javascript start
// when start button click
startBtnUI.addEventListener("click", calculate);
