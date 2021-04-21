//Detecte l'appui sur des touches et l'enregistre
function keyDownHandler(e) {
  //Traque les dernieres touches enfoncées (dans l'ordre)
  let keysAccepted = ["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"]
  if (keysAccepted.includes(e.key) && e.key != keys[keys.length - 1]) {
    keys.push(e.key);
  }
  if (e.keyCode == 32) {
    spacePressed = true;
  }
}

//Detecte l'arret d'appui et l'enregistre
function keyUpHandler(e) {
  //Supprime les touches du tableau si on les relachent
  if (keys.includes(e.key)) {
    keys.splice(keys.indexOf(e.key), 1);
  }
  if (e.keyCode == 32) {
    console.log("Space released");
    spacePressed = false;
  }
}
