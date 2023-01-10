let count1 = 0;
let count2 = 0;

const main = document.getElementById("main");
const guest = document.getElementById("guest");
const winnerText = document.getElementById("winnerText");

const home1 = document.getElementById("home1");
const home2 = document.getElementById("home2");
const home3 = document.getElementById("home3");

const guest1 = document.getElementById("guest1");
const guest2 = document.getElementById("guest2");
const guest3 = document.getElementById("guest3");

const startGame = document.getElementById("startGame");
const newGame = document.getElementById("newGame");


// These are extra buttons for the game

startGame.addEventListener("click", function() {
    const designedMinutes = 5;
    let totalSeconds = designedMinutes * 60;

    const timer = document.getElementById("timer");

    const countDown = setInterval(getUpdatedTime, 1000);

    function getUpdatedTime() {
        const minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        if (seconds < 10) {
            timer.innerText = `0${minutes}:0${seconds}`;
        } else {
            timer.innerText = `0${minutes}:${seconds}`;
        }
    
        if (totalSeconds != 0) {
            totalSeconds--;
    
            home1.disabled = false;
            home2.disabled = false;
            home3.disabled = false;
            guest1.disabled = false;
            guest2.disabled = false;
            guest3.disabled = false;
            startGame.disabled = true;
    
        } else {
            home1.disabled = true;
            home2.disabled = true;
            home3.disabled = true;
            guest1.disabled = true;
            guest2.disabled = true;
            guest3.disabled = true;
            clearInterval(countDown);
            if (count1 > count2) {
                winnerText.innerText = `HOME WINS`;
            } else if (count2 > count1) {
                winnerText.innerText = `GUEST WINS`;
            } else {
                winnerText.innerText = `DRAW`;
            }
        }
    }

    newGame.addEventListener("click", function() {
        totalSeconds = 300;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        timer.innerText = `0${minutes}:0${seconds}`;
        winnerText.innerText = `STREET BASKETBALL`;

        count1 = 0;
        count2 = 0;
        main.innerText = 0;
        guest.innerText = 0;

        home1.disabled = true;
        home2.disabled = true;
        home3.disabled = true;
        guest1.disabled = true;
        guest2.disabled = true;
        guest3.disabled = true;
        startGame.disabled = false;

        clearInterval(countDown);

        main.classList.add("equal");
        guest.classList.add("equal");
    })
});

// This is home section

home1.addEventListener("click", function() {
    count1++;
    main.innerText = count1;
    toggleColor();
})

home2.addEventListener("click", function() {
    count1 += 2;
    main.innerText = count1;
    toggleColor();
})

home3.addEventListener("click", function() {
    count1 += 3;
    main.innerText = count1;
    toggleColor();
})

// This is away section

guest1.addEventListener("click", function() {
    count2++;
    guest.innerText = count2;
    toggleColor();
})

guest2.addEventListener("click", function() {
    count2 += 2;
    guest.innerText = count2;
    toggleColor();
})

guest3.addEventListener("click", function() {
    count2 += 3;
    guest.innerText = count2;
    toggleColor();
})

function toggleColor() {
    if (count1 > count2) {
        guest.classList = !guest.classList;
        main.classList = !main.classList;
        main.classList.add("winner");
        guest.classList.add("loser");
    } else if (count2 > count1) {
        guest.classList = !guest.classList;
        main.classList = !main.classList;
        main.classList.add("loser");
        guest.classList.add("winner");
    } else if (count2 == count1) {
        main.classList = !main.classList;
        guest.classList = !guest.classList;
        main.classList.add("equal");
        guest.classList.add("equal");
    }
}