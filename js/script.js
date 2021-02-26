// quiz questions 
const questionCollection = [
    {
        "question": "Lunar eclipse occurs on",
        "a": "Quarter moon",
        "b": "Full moon",
        "c": "Half moon",
        "d": "New moon",
        "correct": "b"
    },
    {
        "question": "The fastest planet is",
        "a": "Mercury",
        "b": "Jupiter",
        "c": "Saturn",
        "d": "Mars",
        "correct": "a"
    },
    {
        "question": "The largest planet of the solar system is",
        "a": "Pluto",
        "b": "Saturn",
        "c": "Mars",
        "d": "Jupiter",
        "correct": "d"
    },
    {
        "question": "Parsec is the unit of measurement of",
        "a": "Orbital velocity of giant stars",
        "b": "Brightness of heavenly bodies",
        "c": "Astronomical distance",
        "d": "Density of stars",
        "correct": "a"
    },
    {
        "question": "Comets revolve around",
        "a": "Venus",
        "b": "Sun",
        "c": "Earth",
        "d": "No single heavenly body",
        "correct": "b"
    },
    {
        "question": "Which planet is known as the Earth’s Twin?",
        "a": "Neptune",
        "b": "Mars",
        "c": "Uranus",
        "d": "Venus",
        "correct": "b"
    },
    {
        "question": "The planet having no moon is",
        "a": "Mercury",
        "b": "Mars",
        "c": "Uranus",
        "d": "Venus",
        "correct": "a"
    },
    {
        "question": "The distance of the nearest star besides the sun from the earth is",
        "a": "2 light years",
        "b": "4 light years",
        "c": "5 light years",
        "d": "9 light years",
        "correct": "b"
    },
    {
        "question": "The unit of measuring distances between the stars is known as",
        "a": "Light year",
        "b": "Stellar mile",
        "c": "Cosmic kilometer",
        "d": "Galactic unit",
        "correct": "a"
    },
    {
        "question": "Which one of the following planets takes the same number of days for rotation and revolution?",
        "a": "Mars",
        "b": "Jupiter",
        "c": "Venus",
        "d": "Mercury",
        "correct": "d"
    },
    {
        "question": "The bright heavenly body with a long luminous tail is called",
        "a": "Planet",
        "b": "Satellite",
        "c": "Constellation",
        "d": "Comet",
        "correct": "d"
    },
    {
        "question": "The planet having the largest number of satellites in the solar system is",
        "a": "Mars",
        "b": "Saturn",
        "c": "Venus",
        "d": "Mercury",
        "correct": "b"
    },
    {
        "question": "How many years does Pluto take in revolving round the Sun?",
        "a": "150 years",
        "b": "210 years",
        "c": "115 years",
        "d": "248 years",
        "correct": "d"
    },
    {
        "question": "The brightest star in the sky is",
        "a": "Sun",
        "b": "Sirius",
        "c": "Hyades",
        "d": "Praesepe",
        "correct": "b"
    },
    {
        "question": "Which one of the following is not a satellite of Jupiter?",
        "a": "Titan",
        "b": "Europa",
        "c": "Callisto",
        "d": "Io",
        "correct": "a"
    },
    {
        "question": "Which of the planets is nearest to the earth?",
        "a": "Mars",
        "b": "Saturn",
        "c": "Venus",
        "d": "Mercury",
        "correct": "d"
    },
    {
        "question": "Solar eclipse occurs when",
        "a": "Sun comes between moon and earth",
        "b": "Moon is at right angle to the earth",
        "c": "Moon comes between sun and earth",
        "d": "Earth comes between sun and moon",
        "correct": "c"
    },
    {
        "question": "The smallest planet is",
        "a": "Mars",
        "b": "Saturn",
        "c": "Venus",
        "d": "Mercury",
        "correct": "d"
    },
    {
        "question": "Which of the following is concerned with the description and mapping of the main features of the Universe?",
        "a": "Cosmology",
        "b": "Cosmography",
        "c": "Astronomy",
        "d": "Geomorphology",
        "correct": "b"
    },
    {
        "question": "Which planet of the solar system spins on its axis at the fastest rate?",
        "a": "Jupiter",
        "b": "Mercury",
        "c": "Earth",
        "d": "Saturn",
        "correct": "a"
    },
    {
        "question": "Which one of the following planets is at the farthest distance from the earth?",
        "a": "Saturn",
        "b": "Mars",
        "c": "Neptune",
        "d": "Mars",
        "correct": "c"
    }
    // {
    //     "question": "",
    //     "a": "",
    //     "b": "",
    //     "c": "",
    //     "d": "",
    //     "correct": ""
    // },
    // {
    //     "question": "",
    //     "a": "",
    //     "b": "",
    //     "c": "",
    //     "d": "",
    //     "correct": ""
    // },
    // {
    //     "question": "",
    //     "a": "",
    //     "b": "",
    //     "c": "",
    //     "d": "",
    //     "correct": ""
    // },
    // {
    //     "question": "",
    //     "a": "",
    //     "b": "",
    //     "c": "",
    //     "d": "",
    //     "correct": ""
    // },
    // {
    //     "question": "",
    //     "a": "",
    //     "b": "",
    //     "c": "",
    //     "d": "",
    //     "correct": ""
    // },
    // {
    //     "question": "",
    //     "a": "",
    //     "b": "",
    //     "c": "",
    //     "d": "",
    //     "correct": ""
    // },
    // {
    //     "question": "",
    //     "a": "",
    //     "b": "",
    //     "c": "",
    //     "d": "",
    //     "correct": ""
    // },
    // {
    //     "question": "",
    //     "a": "",
    //     "b": "",
    //     "c": "",
    //     "d": "",
    //     "correct": ""
    // },
    // {
    //     "question": "",
    //     "a": "",
    //     "b": "",
    //     "c": "",
    //     "d": "",
    //     "correct": ""
    // },
    // {
    //     "question": "",
    //     "a": "",
    //     "b": "",
    //     "c": "",
    //     "d": "",
    //     "correct": ""
    // },
    // {
    //     "question": "",
    //     "a": "",
    //     "b": "",
    //     "c": "",
    //     "d": "",
    //     "correct": ""
    // },
    // {
    //     "question": "",
    //     "a": "",
    //     "b": "",
    //     "c": "",
    //     "d": "",
    //     "correct": ""
    // },
    // {
    //     "question": "",
    //     "a": "",
    //     "b": "",
    //     "c": "",
    //     "d": "",
    //     "correct": ""
    // },
    // {
    //     "question": "",
    //     "a": "",
    //     "b": "",
    //     "c": "",
    //     "d": "",
    //     "correct": ""
    // },
    // {
    //     "question": "",
    //     "a": "",
    //     "b": "",
    //     "c": "",
    //     "d": "",
    //     "correct": ""
    // },
    // {
    //     "question": "",
    //     "a": "",
    //     "b": "",
    //     "c": "",
    //     "d": "",
    //     "correct": ""
    // },
    // {
    //     "question": "",
    //     "a": "",
    //     "b": "",
    //     "c": "",
    //     "d": "",
    //     "correct": ""
    // },
    // {
    //     "question": "",
    //     "a": "",
    //     "b": "",
    //     "c": "",
    //     "d": "",
    //     "correct": ""
    // },
    // {
    //     "question": "",
    //     "a": "",
    //     "b": "",
    //     "c": "",
    //     "d": "",
    //     "correct": ""
    // },
    // {
    //     "question": "",
    //     "a": "",
    //     "b": "",
    //     "c": "",
    //     "d": "",
    //     "correct": ""
    // },
    // {
    //     "question": "",
    //     "a": "",
    //     "b": "",
    //     "c": "",
    //     "d": "",
    //     "correct": ""
    // },
    // {
    //     "question": "",
    //     "a": "",
    //     "b": "",
    //     "c": "",
    //     "d": "",
    //     "correct": ""
    // },
    // {
    //     "question": "",
    //     "a": "",
    //     "b": "",
    //     "c": "",
    //     "d": "",
    //     "correct": ""
    // },
    // {
    //     "question": "",
    //     "a": "",
    //     "b": "",
    //     "c": "",
    //     "d": "",
    //     "correct": ""
    // }
];
function shuffle(array){
    array.forEach((item, index) => {
        const randomIndex = Math.floor(Math.random() * array.length);
        [array[index], array[randomIndex]] = [array[randomIndex], item];
    });
}
shuffle(questionCollection);
let questions = questionCollection.filter((item, index) => index < 10);


const quizContainer = document.querySelector(".quiz-container");
const questionNum = document.querySelector(".question-num");
const scoreElem = document.querySelector(".score");
const scoreRecords = document.querySelector(".score-records");

const container = document.querySelector("#quiz-box"); /* container variable is assigned for quiz box */
const timerElem = document.querySelector(".timer");

// score records
const pts = document.querySelector(".records-title > span");
const msgGreeting = document.querySelector(".records-title > h1");
const msgSuggestion = document.querySelector(".records-title > h2");


// resets
let counter = 0;
let scorePoint = 0;
let currentUser = "";
// let answerFlag = false;


// for countdown
let timeCount, timerId, timeOutId;

// audio timeout
let audioCountDown = document.getElementById("audio-count-down");
let applauseSound = document.getElementById("applause-sound");
let correctSound = document.getElementById("correct-sound");
let incorrectSound = document.getElementById("incorrect-sound");

function startCountDown(){
    timeCount = 10;
    timerId = setInterval(() => {
        timeCount--;
        if(timeCount){
            timerElem.innerText = `Time left: ${timeCount}s`;
            timerElem.style.color = "black";
            timerElem.style.background = "#c3e215";
        }
        else{
            timerElem.innerText = `You missed!`;
            timerElem.style.color = "white";
            timerElem.style.background = "red";
        }
    }, 1000);
    
    timeOutId = setTimeout(function fun() {
        clearInterval(timerId);
        counter++;
        audioCountDown.pause();
        audioCountDown.currentTime = 0;
        createQuiz();
    }, 10000);
}

function createQuiz(){
    // muteSound("unmute");
    if(counter > questions.length - 1){
        audioCountDown.pause();
        audioCountDown.currentTime = 0;
        scoreRecords.style.display = "block";
        container.style.display = "none";
        container.style.opacity = "0";

        let count = 0;
        setInterval(()=>{
            if(count <= scorePoint){
                pts.innerHTML = `${count} pts`;
                count++;
            }
        }, 1);
        
        if(scorePoint !== 0){
            applauseSound.play();
            msgGreeting.innerText = "Congratulations!";
            msgSuggestion.innerText = "Now you can save your score!";
        }
        else {
            msgGreeting.innerText = "Better luck next time!";
            msgSuggestion.innerText = "Play again to save your score!";

            btnSave.style.display = "none";
            inputUsername.style.display = "none";
        }
    }
    else {
        const letters = ['a', 'b', 'c', 'd'];
        shuffle(letters);

        quizContainer.innerHTML =
        `
            <div class="question-container">
                <h1 class="question">${questions[counter].question}</h1>
                <ul class="answers">
                    <li class="answer" id="check" data-option="${letters[0]}">${questions[counter][letters[0]]}</li>
                    <li class="answer" data-option="${letters[1]}">${questions[counter][letters[1]]}</li>
                    <li class="answer" data-option="${letters[2]}">${questions[counter][letters[2]]}</li>
                    <li class="answer" data-option="${letters[3]}">${questions[counter][letters[3]]}</li>
                </ul>
            </div>
        `;
        
        questionNum.innerText = `Question ${counter+1} of ${questions.length}`;
        
        const colors = ["#7238BD", "#474644", "#e9e213", "#CB7380"];
        shuffle(colors);

        const children = document.querySelectorAll(".answer");
        for(let i = 0; i < 4; i++){
            children[i].style.background = `${colors[i]}`;
        }
        setTimeout(()=>{
            audioCountDown.play();
        }, 1000);
        
        startCountDown();
    }
}

// answer click event
document.addEventListener("click", e => {
    if(e.target.classList.contains("answer")){
        clearTimeout(timeOutId);
        clearInterval(timerId);

        audioCountDown.pause();
        audioCountDown.currentTime = 0;

        const answerElem = e.target;
        const optionSelected = e.target.dataset.option
        
        if(optionSelected == questions[counter].correct){
            answerElem.style.background ="#3BFF3B";
            scorePoint += 100;
            scoreElem.innerHTML = `Score: ${scorePoint} pts`;
            timerElem.innerText = "Correct!";
            timerElem.style.color = "white";
            timerElem.style.background = "#3BFF3B";
            correctSound.play();
        }
        else {
            answerElem.style.background ="red";
            timerElem.innerText = "Incorrect!";
            timerElem.style.color = "white";
            timerElem.style.background = "red";
            incorrectSound.play();
        }
        answerElem.classList.add("selected-answer");

        const children =e.target.parentElement.children;
        for(let i = 0; i < 4; i++){
            children[i].style.pointerEvents = "none";
            if(children[i].dataset.option == questions[counter].correct){
                children[i].style.background ="#3BFF3B";  
                children[i].classList.add("correct-answer"); 
            }
            else if(children[i] != e.target){
                children[i].style.opacity = "0.4";
            }
        }
        audioCountDown.pause();
        audioCountDown.currentTime = 0; 
        setTimeout(() => {
                counter++;
                audioCountDown.pause();
                audioCountDown.currentTime = 0;        
                // muteSound("mute");
                timerElem.innerText = "Next Question";
                timerElem.style.color = "black";
                timerElem.style.background = "#c3e215";
                createQuiz();
        }, 2500);
    }
});

// for saving player records
const btnSave = document.querySelector(".btn-save");
const inputUsername = document.querySelector(".username");
const tableContainer = document.querySelector(".table-container");

// Local Storage
// {name: "sandip", score: "200"}
function getUserScore() {
    let users;
    if(!localStorage.getItem("users")){
        users = [];
    }
    else {
        users = JSON.parse(localStorage.getItem("users"));
    }
    return users;
}

function saveScore() {
    
    const name = inputUsername.value.toUpperCase();
    const score = scorePoint;
    const user = {name, score};

    let users = getUserScore();
    let oldUserFlag = false;
    users = users.map(u => {
        if(u.name === name){
            if(score > u.score){
                u.score = score;
            }
            oldUserFlag = true;
        }
        return u;
    });
    if(!oldUserFlag){
        users.push(user);
    }
    localStorage.setItem("users", JSON.stringify(users));
}

function displayScore(){
    let users = getUserScore();
    users.sort((a,b) => b.score - a.score);
    let tableUsers = users.slice();

    tableContainer.innerHTML = `<div class="table-header table-row">
                    <h1>Rank</h1>
                    <h1>Name</h1>
                    <h1>Score</h1>
                </div>`;
    tableUsers = tableUsers.forEach((user, index) => {
        createTableRow(index+1, user.name, user.score);
    });
}

btnSave.addEventListener("click", () => {
    if(inputUsername.value){
            saveScore();
            // displayScore();
            btnSave.disabled = true;
            btnSave.style.cursor = "not-allowed";
            btnSave.style.background = "red";
            inputUsername.disabled = true;

            btnSave.style.display = "none";
            inputUsername.style.display = "none";
            msgGreeting.innerText = "You have succcessfully saved/updated your score!";
            msgSuggestion.innerText = "Check high scores or play again!";
        }
        else {
            alert("You have to enter your name to save score!");
        }
});

// home
const quizBox = document.getElementById("quiz-box");
const homeContainer = document.querySelector("#home-container");
const btnPlay = document.querySelector(".btn-play");
const btnPlayAgain = document.querySelector(".btn-play-again");
const btnsHome = document.querySelectorAll(".btn-home");
const btnQuit = document.querySelector(".btn-quit");

btnPlay.addEventListener("click", (e) => {
    e.preventDefault();
    homeContainer.style.display = "none";
    container.style.display = "block";
    createQuiz();
});

btnPlayAgain.addEventListener("click", (e) => {
    applauseSound.pause();
    applauseSound.currentTime = 0;

    homeContainer.style.display = "none";
    scoreRecords.style.display = "none";
    container.style.display = "block";
    container.style.opacity = "1";
    
    shuffle(questionCollection);
    questions = questionCollection.filter((item, index) => index < 10);
    counter = 0;
    scorePoint = 0;
    scoreElem.innerHTML = `Score: ${scorePoint} pt`;
    timerElem.innerText = "Welcome again!";
    createQuiz();

    btnSave.style.display = "inline";
    inputUsername.style.display = "block";
    
    btnSave.disabled = false;
    btnSave.style.cursor = "pointer";
    btnSave.style.background = "rgb(69, 69, 209)";
    inputUsername.disabled = false;
    inputUsername.value = "";
})


btnQuit.addEventListener("click", () => {
    window.location.reload();
});

btnsHome.forEach(btnHome => {
    btnHome.addEventListener("click", (e) => {
        e.preventDefault();
        applauseSound.pause();
        applauseSound.currentTime = 0;
        window.location.reload();
    });
});

// for sound controls
const volumes = document.querySelectorAll(".volume");
volumes.forEach(volume=>{
    volume.addEventListener("click", (e)=>{
        if(volume.classList.contains("volume-up")){
            volume.nextElementSibling.style.display = "inline";
            muteSound("mute");
        }
        else{
            volume.previousElementSibling.style.display = "inline";
            muteSound("unmute");
        }
        volume.style.display = "none";  
    })
});

function muteSound(action){
    const allSounds = document.querySelectorAll("audio");
    if(action == "mute"){
        allSounds.forEach(sound => {
            sound.muted= true;
        });
    }
    else {
        allSounds.forEach(sound => {
            sound.muted= false;
        });
    }
}

function soundPlay(url){
    const sound = document.createElement("audio");
    sound.src = url;
    sound.autoplay = true;
    document.body.appendChild(sound);
}
// Rank Table
const btnsHighScore = document.querySelectorAll(".btn-high-score");
const playersTable = document.querySelector(".players");
btnsHighScore.forEach(btn => {
    btn.addEventListener("click", () => {
        homeContainer.style.display = "none";
        scoreRecords.style.display = "none";
        playersTable.style.display = "block";
       
        displayScore();
    });
});

function createTableRow(rank, name, score) {
    let count = 0;
    const tableRow = document.createElement("div");
    tableRow.classList.add("table-row");
    if(rank == 1)
        rank = `<span class="emoji">🥇</span>`;
    else if(rank == 2)
      rank = `<span class="emoji">🥈</span>`;
    else if(rank == 3)
        rank = `<span class="emoji">🥉</span>`;
    
    setInterval(()=>{
        if(count <= score){
            tableRow.innerHTML = ` <h1>${rank}</h1>
                        <h1>${name}</h1>
                        <h1>${count}</h1>`;
            count++;
        }
    }, 0.1);
    
    tableContainer.appendChild(tableRow);
}



