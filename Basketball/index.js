let home = 0
let guest = 0
let min = 0
let sec = 0
let period = 0
let homeNum = document.getElementById("home-num")
let guestNum = document.getElementById("guest-num")
let minNum = document.getElementById("min-num")
let secNum = document.getElementById("sec-num")
let periodNum = document.getElementById("period-num")
let timer = null


homeNum.textContent = home
guestNum.textContent = guest
minNum.textContent = min
secNum.textContent = sec
periodNum.textContent = period

if (sec < 10) {
    secNum.textContent = "0" + sec
} else {
    secNum.textContent = sec
}

if (min < 10) {
    minNum.textContent = "0" + min
} else {
    minNum.textContent = min
}


function homePlusOne() {
    home += 1
    homeNum.textContent = home
    if (home > guest) {
        homeNum.className = "dis-num higher"
        guestNum.className = "dis-num"
    } else {
        guestNum.className = "dis-num higher"
        homeNum.className = "dis-num"
    }
}

function homePlusTwo() {
    home += 2
    homeNum.textContent = home

    if (home > guest) {
        homeNum.className = "dis-num higher"
        guestNum.className = "dis-num"
    } else {
        guestNum.className = "dis-num higher"
        homeNum.className = "dis-num"
    }
}

function homePlusThree() {
    home += 3
    homeNum.textContent = home

    if (home > guest) {
        homeNum.className = "dis-num higher"
        guestNum.className = "dis-num"
    } else {
        guestNum.className = "dis-num higher"
        homeNum.className = "dis-num"
    }
}

function guestPlusOne() {
    guest += 1
    guestNum.textContent = guest

    if (guest > home) {
        guestNum.className = "dis-num higher"
        homeNum.className = "dis-num"
    } else {
        homeNum.className = "dis-num higher"
        guestNum.className = "dis-num"
    }
}

function guestPlusTwo() {
    guest += 2
    guestNum.textContent = guest

    if (guest > home) {
        guestNum.className = "dis-num higher"
        homeNum.className = "dis-num"
    } else {
        homeNum.className = "dis-num higher"
        guestNum.className = "dis-num"
    }
}

function guestPlusThree() {
    guest += 3
    guestNum.textContent = guest

    if (guest > home) {
        guestNum.className = "dis-num higher"
        homeNum.className = "dis-num"
    } else {
        homeNum.className = "dis-num higher"
        guestNum.className = "dis-num"
    }
}

function periodPlusOne() {
    period +=1
    periodNum.textContent = period
}

function minutePlusOne() {
    min += 1
    if (min < 10) {
    minNum.textContent = "0" + min
    } else {
        minNum.textContent = min
    }

    if (min > 59) {
        min = 0
        minNum.textContent = min
    }
}

function secondPlusOne() {
    sec += 1
    if (sec < 10) {
    secNum.textContent = "0" + sec
    } else {
        secNum.textContent = sec
    }

    if (sec > 59) {
        sec = 0
        secNum.textContent = sec
        minutePlusOne()
    }
}

function start() {
    if (timer === null) {
        timer =  setInterval(secondPlusOne, 600)
    }
}

function newGame() {
    clearInterval(timer)
    timer = null
    home = 0
    guest = 0
    min = 0
    sec = 0
    period = 0
    homeNum.textContent = home
    guestNum.textContent = guest
    minNum.textContent = min
    secNum.textContent = sec
    periodNum.textContent = period
    homeNum.className = "dis-num"
    guestNum.className = "dis-num"
}