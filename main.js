// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorMessage = document.querySelector("#modal")
    //errormessage.hidden = true;
errorMessage.className = "hidden"

const hearticon = document.querySelectorAll("span")

hearticon.forEach(e => e.addEventListener("click", (e) => {
    if (e.target.className == "like-glyph" || "activated-heart") {

        mimicServerCall()
            .then(res => {
                // errormessage.hidden = true;
                heartChange(e)
            })
            .catch(e => {
                errorMessage.innerHTML = e
                    //setTimeout(() => { errormessage.hidden = true; }, 5000);
                    // errormessage.hidden = false;
                setTimeout(() => { errorMessage.className = "hidden"; }, 5000);
                errorMessage.className = ""

            })

    }
}))

function heartChange(e) {

    errorMessage.className = "hidden"
    if (e.target.innerHTML == FULL_HEART) {

        e.target.innerHTML = EMPTY_HEART
        e.target.className = "like-glyph"

    } else if (e.target.innerHTML == EMPTY_HEART) {

        e.target.innerHTML = FULL_HEART
        e.target.className = "activated-heart"

    }


}


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