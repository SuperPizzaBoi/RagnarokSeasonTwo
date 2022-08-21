
let homeScreen = document.getElementById("home-screen")
let awayScreen = document.getElementById("away-screen")



let homeCount = 0
let awayCount = 0


function homePlusOne()  {
    homeCount += 1
    console.log(homeCount)
    homeScreen.innerText = homeCount
}

function homeSubtractOne() {
    homeCount -= 1
    console.log(homeCount)
    homeScreen.innerText = homeCount
}

function homeReset() {
    homeCount = 0
    console.log(homeCount)
    homeScreen.innerText = homeCount
}


function awayPlusOne()  {
    awayCount += 1
    console.log(awayCount)
    awayScreen.innerText = awayCount
}

function awaySubtractOne() {
    awayCount -= 1
    console.log(awayCount)
    awayScreen.innerText = awayCount
}

function awayReset() {
    awayCount = 0
    console.log(awayCount)
    awayScreen.innerText = awayCount
}