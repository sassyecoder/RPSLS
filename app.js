function game(index) {

    const rules = document.getElementById("rules");
    const rulesImage = document.getElementById("rules-image");
    const myGame = document.getElementById("my-game");

    const rulesToggle = () => {
        if(rulesImage.style.display === "none") {
            rulesImage.style.display = "block";
            myGame.style.display = "none";
        }
        else{
            rulesImage.style.display = "none";
            myGame.style.display = "block";
        }
    }
    rules.addEventListener("click", rulesToggle);

    //global variables 
    const ROCK = "rock";
    const PAPER = "paper";
    const SCISSOR = "scissor";
    const LIZARD = "lizard";
    const SPOCK = "spock";

    //function for producing input
    function producingInput ()  {
        let playerChoice = "";
        const audio = document.getElementById("audio");
        const inputButtons = document.querySelectorAll(".buttons button");
        const active = (playerChoice) => {
            inputButtons.forEach(inputs => {
                if(inputs.id === playerChoice){
                    inputs.classList.add("active");
                }
                else{
                    inputs.classList.remove("active");
                }
            });
        }
        switch(index) {
            case 0: playerChoice = ROCK;
                        active(playerChoice);
                        audio.play();
                        break;
            case 1: playerChoice = PAPER;
                        active(playerChoice);
                        audio.play();
                        break;
            case 2: playerChoice = SCISSOR;
                        active(playerChoice);
                        audio.play();
                        break;
            case 3: playerChoice = LIZARD;
                        active(playerChoice);
                        audio.play();
                        break;
            case 4: playerChoice = SPOCK;
                        active(playerChoice);
                        audio.play();
                        break;
        }
        producingOutput();
        comparison(playerChoice,computerChoice);
    }

    //function for producing output
    const producingOutput = () =>{
    const outputImage = document.querySelector(".output");
    const randomSelection = Math.floor(Math.random() *5);
    switch(randomSelection) {
    case 0:
        computerChoice = ROCK;
        outputImage.src = `./assets/rock.svg`;
        break;
    case 1:
        computerChoice = PAPER;
        outputImage.src = `./assets/paper.svg`;
        break;
    case 2:
        computerChoice = SCISSOR;
        outputImage.src = `./assets/scissor.svg`;
        break;
    case 3: 
        computerChoice = LIZARD;
        outputImage.src = `./assets/lizard.svg`;
        break;
    case 4: 
        computerChoice = SPOCK;
        outputImage.src = `./assets/spock.svg`;
        break;
    }
}

    //function for comparison
    function comparison(pChoice, cChoice) {
    const result = document.getElementById("results")
    //checks for draw
    if(pChoice === cChoice) {
        result.textContent = "It is a tie!";
    }
    //checks for rock
    if(pChoice === ROCK) {
        if(cChoice === PAPER || cChoice === SPOCK ) { 
            result.textContent = "Computer wins!";
        }
        else if(cChoice === SCISSOR || cChoice === LIZARD) {
            result.textContent = "You win!"; 
            return; }
    }
    //checks for paper
    if(pChoice === PAPER) {
        if(cChoice === SCISSOR || cChoice === LIZARD ) {
            result.textContent = "Computer wins!";
        }
        else if(cChoice === SPOCK || cChoice === ROCK) {
            result.textContent = "You win!"; 
            return; 
        }
    }
    //checks for scissor
    if(pChoice === SCISSOR) {
        if(cChoice === ROCK || cChoice === SPOCK ) { 
            result.textContent = "Computer wins!";
        }
        else if(cChoice === LIZARD || cChoice === PAPER) {
            result.textContent = "You win!"; 
            return; }
    }
    //checks for lizard
    if(pChoice === LIZARD) {
        if(cChoice === ROCK || cChoice === SCISSOR ) { 
            result.textContent = "Computer wins!";
        }
        else if(cChoice === SPOCK || cChoice === PAPER) {
            result.textContent = "You win!"; 
            return; }
    }
    //checks for spock
    if(pChoice === SPOCK) {
        if(cChoice === PAPER || cChoice === LIZARD ) { 
            result.textContent = "Computer wins!";
        }
        else if(cChoice === ROCK || cChoice === SCISSOR) {
            result.textContent = "You win!"; 
            return; 
        }
    }
    }
producingInput();
}
game();