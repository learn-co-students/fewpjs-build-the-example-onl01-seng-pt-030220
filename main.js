// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const modal = document.querySelector('#modal')
let liked = false
// Your JavaScript code goes here!
const likeGlyphs = Array.from(document.querySelectorAll('.like-glyph'))
// console.log(likeGlyphs)
likeGlyphs.forEach( glyph => {
  likePost(glyph)
})

function likePost(glyph){
  glyph.addEventListener('click', (e) => {
    // alert("like me!");
    mimicServerCall()
      .then(response => {
        console.log('Success:', response);
        like(e);
      })
      .catch((error) => {
        // console.error('Error:', error)
        displayError(error);
      })
  })
}

function like(e) {
  // console.log(e.target)
  if (e.target.innerText === EMPTY_HEART){
    e.target.innerText = FULL_HEART
    e.target.className = "activated-heart"
  } else {
    e.target.innerText = EMPTY_HEART
    e.target.className = ""
  }
}

function displayError(error){
  // console.error(error)
  // console.log(modal.childNodes[3])
  modal.className = ""
  modal.innerText = error
  setTimeout(hideError, 2000)
}

function hideError() {
  modal.className = "hidden"
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
