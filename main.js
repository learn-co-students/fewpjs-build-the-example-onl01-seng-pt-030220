// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById('modal');

function hiddenModal(){
  modal.setAttribute('class', 'hidden');
}

hiddenModal();

function addLike(e) {
  let heart = e.target;
  console.log("Liked");

  mimicServerCall()
    .then(function(serverMessage){
      console.log(serverMessage)
      if (heart.innerHTML == FULL_HEART) {
        heart.innerHTML = EMPTY_HEART;
        heart.style.color = '';
      }
      else {
        heart.innerHTML = FULL_HEART;
        heart.style.color = 'red';
      }
    })
    .catch(function(error){
      console.log(error)
      modal.innerText = error;
      modal.removeAttribute('class');
      setTimeout(hiddenModal(), 3000)
    })
}

document.addEventListener('DOMContentLoaded', function(){
  const likeBtns = document.querySelectorAll('span');
  for(const btn of likeBtns){
    btn.addEventListener('click', addLike);
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
