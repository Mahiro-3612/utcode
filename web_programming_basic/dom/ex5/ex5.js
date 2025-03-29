const fruits = ["イチゴ", "スイカ", "バナナ"];

element = document.getElementById("fruit-basket");

for (const fruit in fruits) {
  const fruitElement = document.createElement("li");
  fruitElement.textContent = fruit;
  element.appendChild(fruitElement);
}
