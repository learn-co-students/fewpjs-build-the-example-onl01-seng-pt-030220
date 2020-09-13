// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let liked = false 

// Your JavaScript code goes here!
const modal = document.querySelector("#modal") 

const glyph = document.querySelectorAll(".like-glyph")

function likePost(){
  glyph.forEach(glyph =>{
    likeHeart(glyph)
  })
};

function likeHeart(singleGlyph){
singleGlyph.addEventListener("click", function(e){
mimicServerCall()
.then(response => {
      console.log('success', response)
      likedPost(e)
})
.catch(function(error){
  displayError(error)})
})
}

function displayError(error){
  modal.className = "" 
  modal.innerText = error
  setTimeout(hideError,5000)
};

function hideError(){
  modal.className = "hidden"
}

function likedPost(e){
liked = !liked 
if (liked){
e.target.innerText = FULL_HEART
e.target.classname = "activated-heart"
}
else {
  e.target.innerText = EMPTY_HEART
  e.target.className = ""
}
}; 



likePost()
mimicServerCall()
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
