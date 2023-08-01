const bolt = document.getElementById('bolt');
const lock = document.getElementById('lock');

lock.addEventListener("click", lockClicked);

// Function to translate and rotate the div
function translate() {
  // Apply translation
   bolt.style.transform = `translateY(-30px)`;
}

function rotate(){
lock.style.transform += ` rotateY(90deg)`;
}

function lockClicked() {
  setTimeout(translate, 100);
  setTimeout(rotate, 550);
}