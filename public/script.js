

// client-side js, loaded by index.html
// run by the browser each time the page is loaded

console.log("hello world :o");

/*
// define variables that reference elements on our page
const dreamsList = document.getElementById("dreams");
const dreamsForm = document.querySelector("form");

// a helper function that creates a list item for a given dream
function appendNewDream(dream) {
  const newListItem = document.createElement("li");
  newListItem.innerText = dream;
  dreamsList.appendChild(newListItem);
}

let leftPos = 0;
let dep = 0;

function avancer(){
    leftPos+=dep
    console.log(leftPos)
   document.getElementById("serpent").style.left=leftPos+"px"
}


// fetch the initial list of dreams
fetch("/dreams")
  .then(response => response.json()) // parse the JSON from the server
  .then(dreams => {
    // remove the loading text
    dreamsList.firstElementChild.remove();
  
    // iterate through every dream and add it to our page
    dreams.forEach(appendNewDream);
  
    // listen for the form to be submitted and add a new dream when it is
    dreamsForm.addEventListener("submit", event => {
      // stop our form submission from refreshing the page
      event.preventDefault();

      // get dream value and add it to the list
      let newDream = dreamsForm.elements.dream.value;
      dreams.push(newDream);
      appendNewDream(newDream);

      // reset form
      dreamsForm.reset();
      dreamsForm.elements.dream.focus();
    });
  });
*/
 //src="https://code.jquery.com/jquery-3.2.1.min.js"
    //
      $(document).keydown(function(e){
          switch (e.which){
                case 37:    // flèche gauche
                  $(".myDiv").finish().animate({
                  left: "-=10"
                });
                break;
                case 38:    // flèche haut
                  $(".myDiv").finish().animate({
                  top: "-=10"
                });
                break;
                case 39:    // flèche droite
                  $(".myDiv").finish().animate({
                  left: "+=10"
                });
                break;
                case 40:    // flèche du bas
                  $(".myDiv").finish().animate({
                  top: "+=10"
                });
                break;
          }
      });

      //type = "text/javascript" src="script.js"

