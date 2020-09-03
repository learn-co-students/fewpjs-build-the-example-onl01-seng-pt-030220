

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('click', (e) =>{
  let like = document.querySelector('.like-glyph')
  console.log(like.textContent)
  console.log(EMPTY_HEART)
    if(like.textContent == EMPTY_HEART){
        like.textContent = FULL_HEART
        // return console.log("here")
    }else{
      return console.log("not here")
    }

})




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
