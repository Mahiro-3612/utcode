const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const deleteButton = document.createElement("button");

addButton.onclick = () => {
  // 追加ボタンを押すとToDoを1つ追加する
  const li = document.createElement("li");
  const todoText = document.createElement("span");
  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");
  todoText.textContent = todoInput.value; // input要素に入力された文字列を取得する
  todoInput.value = ""; // input要素の入力欄を空にする
  deleteButton.textContent = "削除";
  editButton.textContent = "編集";
  deleteButton.onclick = () => {
    todoList.removeChild(li);
  };
  editButton.onclick = () => {
    todoText.textContent = prompt("新しい内容を入力してください。"); // ユーザーに入力を求める
  };
  li.appendChild(todoText);
  li.appendChild(deleteButton);
  li.appendChild(editButton);
  todoList.appendChild(li);
};

todoInput.oninput = () => {
  // 入力欄が空の時はボタンを押せないようにする
  addButton.disabled = todoInput.value === "";
};
