let counter = document.querySelector("#count");
let followers = document.querySelector("#followers");
let count = 1;

setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerText = count;
  } else {
    followers.innerText = "followers on facebook!!!";
  }
}, 1);

