// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById('modal')
modal.className = 'hidden'

function hide(){
  modal.setAttribute('class','hidden')
}

document.addEventListener("DOMContentLoaded", () =>{
  document.addEventListener("click", likedPost)
})

function likedPost(e){
  if (e.target.classList.contains("like-glyph")){
    mimicServerCall()
      .then(() => heartToggle(e.target))
      .catch((error) => failure(error))
  }
}

function heartToggle(target){
  if (target.innerText === EMPTY_HEART){
    target.innerText = FULL_HEART
    target.classList.toggle(("activated-heart"))
  }
  else {
    target.innerText = EMPTY_HEART
    target.classList.toggle(("activated-heart"))
  }
}

function failure(error){
  modal.classList.remove("hidden")
  modal.innerText = error
  console.log(error)
  setTimeout(hide, 5000)
}

function hide(){
  modal.setAttribute('class','hidden')
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
