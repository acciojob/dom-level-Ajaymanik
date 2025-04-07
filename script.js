let levelElement = document.getElementById('level');
let count = 0;
while (levelElement) {
  count++;
  levelElement = levelElement.parentElement;
}
alert("The level of the element is: " + count);
