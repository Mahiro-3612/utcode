const fortuneTextZone = document.getElementById("result");
const fortuneText = document.createElement("p");
const button = document.getElementById("button");

function showFortuneText() {
  const r = Math.random();
  if (r < 0.2) {
    fortuneText.textContent = "大吉";
    fortuneText.style.color = "red";
  } else if (r < 0.7) {
    fortuneText.textContent = "吉";
    fortuneText.style.color = "black";
  } else {
    fortuneText.textContent = "凶";
    fortuneText.style.color = "blue";
  }
  fortuneTextZone.appendChild(fortuneText);
}

button.onclick = showFortuneText;
