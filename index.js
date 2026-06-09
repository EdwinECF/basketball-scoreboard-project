let homeScore = document.getElementById("score1-el")
let guestScore = document.getElementById("score2-el")


let score1 = 0
let score2 = 0

function plus1home(){
    score1 += 1
    homeScore.textContent = score1
}
function plus2home(){
    score1 += 2
    homeScore.textContent = score1
}
function plus3home(){
    score1 += 3
    homeScore.textContent = score1
}
function plus1guest(){
    score2 += 1
    guestScore.textContent = score2
}
function plus2guest(){
    score2 += 2
    guestScore.textContent = score2
}
function plus3guest(){
    score2 += 3
    guestScore.textContent = score2
}

function newgame(){
   score2 = 0
   score1 = 0
   guestScore.textContent = score2
   homeScore.textContent = score1
}