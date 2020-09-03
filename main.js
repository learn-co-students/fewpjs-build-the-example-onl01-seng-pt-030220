

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// MY SOLUTION!
let span = document.getElementsByClassName('like-glyph')
let p = Array.from(span)
// console.log(ul, "this is ul")
p.forEach(element => element.addEventListener('click', (e) =>{
  
  // let like = document.querySelector('.like-glyph')
  // console.log(like.textContent)
  // console.log(EMPTY_HEART)
  // console.log(e.currentTarget, "this is currentTarget")
  //   console.log(mimicServerCall, "this is mimicserver")
    if(e.currentTarget.textContent == EMPTY_HEART){
      e.currentTarget.textContent = FULL_HEART
        // return console.log("here")
        // mimicServerCall()
    }else{
      e.currentTarget.textContent = EMPTY_HEART
      e.currentTarget.style.color = 'red'
      // return console.log("not here")
    }
  
}))

//LEARN.CO SOLUTION

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};

let articleHearts = document.querySelectorAll(".like");

function likeCallback(e) {
  let heart = e.target;
  mimicServerCall("bogusUrl")
   //OR: mimicServerCall("bogusUrl", {forceFailure: true})
    .then(function(serverMessage){
       heart.innerText = glyphStates[heart.innerText];
       heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      // Basic
      // alert("Something went wrong!");
      // or....
      document.getElementById("modal").className = "";
    });
}

for (let glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
