// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const likeGlyph = Array.from(document.querySelectorAll('like-glpyh'))
let like = false
const modal = document.querySelector('#modal')
modal.className = "hidden"

likeGlyph.forEach(glyph => {
    eventHandler(glyph)
})
// Your JavaScript code goes here!




function eventHandler(glyph){
  glyph.addEventListener('click', (e) => {
    mimicServerCall("url", config={})
      .then(response => {
        console.log('Success:', response);
        liked(e)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  })
}

function liked(e){
 like = !like
  if (like) {
    e.target.innerText = FULL_HEART
    e.target.className = "activated-heart"
  } else {
    e.target.innerText = EMPTY_HEART
    e.target.className = ""
  }
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
