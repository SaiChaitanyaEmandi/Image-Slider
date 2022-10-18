const imgEle = document.querySelector(".img-container");
const left = document.querySelector(".prev");
const right = document.querySelector(".nxt");
const totalImgs = document.querySelectorAll("img");

let currImg = 1;
let timeout;

right.addEventListener("click", () => {
  currImg++;
  updateImg();
  clearTimeout(timeout);
});

left.addEventListener("click", () => {
  currImg--;
  updateImg();
  clearTimeout(timeout);
});

updateImg();

function updateImg() {
  if (currImg > totalImgs.length) {
    currImg = 1;
  } else if (currImg < 1) {
    currImg = totalImgs.length;
  }
  imgEle.style.transform = `translate(-${(currImg - 1) * 500}px)`;
  timeout = setTimeout(() => {
    currImg++;
    updateImg();
  }, 3000);
}
