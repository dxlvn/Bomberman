//Detecte l'appui sur des touches et l'enregistre
function keyDownHandler(e) {
  let keysAccepted = ["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"]
  if (keysAccepted.includes(e.key) && e.key != keys[keys.length - 1]) {
    keys.push(e.key);
  }
  /*
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
    leftPressed = false;
    upPressed = false;
    downPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
    rightPressed = false;
    upPressed = false;
    downPressed = false;
  } else if (e.key == "Up" || e.key == "ArrowUp") {
    upPressed = true;
    rightPressed = false;
    leftPressed = false;
    downPressed = false;
  } else if (e.key == "Down" || e.key == "ArrowDown") {
    downPressed = true;
    rightPressed = false;
    leftPressed = false;
    upPressed = false;
  } else if (e.key == "Space" || e.key == "Space") {
    spacePressed == true;
  }
  */
}

//Detecte l'arret d'appui et l'enregistre
function keyUpHandler(e) {
  if (keys.includes(e.key)) {
    keys.splice(keys.indexOf(e.key), 1);
  }
  /*
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  } else if (e.key == "Up" || e.key == "ArrowUp") {
    upPressed = false;
  } else if (e.key == "Down" || e.key == "ArrowDown") {
    downPressed = false;
  } else if (e.key == "Space" || e.key == "ArrowSpace") {
    SpacePressed = false;
  }
  */
}
