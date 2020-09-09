// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errormessage = document.querySelector("#modal")
    //errormessage.hidden = true;
errormessage.className = "hidden"
const like = document.querySelector(".like")

const hearticon = document.querySelectorAll("span")

hearticon.forEach(e => e.addEventListener("click", (e) => {
    if (e.target.className == "like-glyph" || "activated-heart") {

        mimicServerCall()
            .then(res => {
                // errormessage.hidden = true;
                errormessage.className = "hidden"
                if (e.target.innerHTML == FULL_HEART) {

                    e.target.innerHTML = EMPTY_HEART
                    e.target.className = "like-glyph"

                } else if (e.target.innerHTML == EMPTY_HEART) {

                    e.target.innerHTML = FULL_HEART
                    e.target.className = "activated-heart"

                }

            })
            .catch(e => {
                errormessage.innerHTML = e
                    //setTimeout(() => { errormessage.hidden = true; }, 5000);
                    // errormessage.hidden = false;
                setTimeout(() => { errormessage.className = "hidden"; }, 5000);
                errormessage.className = ""

            })

    }
}))



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
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