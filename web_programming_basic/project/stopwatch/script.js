const countText = document.getElementById("count");
const button = document.getElementById("button");
let count = 0;

function showTime() {
  count += 1;
  countText.textContent = count;
}

button.onclick = () => {
  setInterval(showTime, 1000);
};
