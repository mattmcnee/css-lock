const bolt = document.getElementById('bolt');
const lock = document.getElementById('lock');

lock.addEventListener("click", lockClicked);

function translateLock() {
   bolt.style.transform = `translateY(-30px)`;
}

function rotateLock(){
lock.style.transform += ` rotateY(90deg)`;
}

function lockClicked() {
  setTimeout(translateLock, 100);
  setTimeout(rotateLock, 550);
  // Code to do after lock is clicked
}