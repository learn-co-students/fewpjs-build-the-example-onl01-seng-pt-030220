

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let span = document.getElementsByClassName('like-glyph')
let p = Array.from(span)
console.log(p, "this is p")
let ul = document.getElementsByTagName('span')
// console.log(ul, "this is ul")
p.forEach(element => element.addEventListener('click', (e) =>{
  
  // let like = document.querySelector('.like-glyph')
  // console.log(like.textContent)
  // console.log(EMPTY_HEART)
  console.log(e.currentTarget, "this is currentTarget")
    if(element.textContent == EMPTY_HEART){
        element.textContent = FULL_HEART
        // return console.log("here")
    }else{
      like.textContent = EMPTY_HEART
      // like.style.color = 'red'
      // return console.log("not here")
    }
  
}))




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
