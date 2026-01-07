let count = 0;
function increaseCount() {
  count++;
  document.getElementById("countDisplay").innerText = count;
}
let countButton = document.getElementById("countButton");
countButton.addEventListener("click", increaseCount);
