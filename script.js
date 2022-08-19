const hWord = document.getElementById("hWord")
const body = document.querySelector("body")
const sticks = document.getElementsByClassName("sticks")[0]

const submitBtn = document.getElementById("submit")
const input = document.getElementById("input")
const wrong = document.getElementById("wrong")

const words = ["maison", "appartement", "chat", "beluga"]

let secretWord
let hiddenWord
let tries = 0

function initGame() {

    secretWord = words[Math.floor(Math.random() * words.length)]

    hiddenWord = createHiddenWord(secretWord)
    hWord.innerText = hiddenWord
    }

    
    function createHiddenWord(sWord) {
        let result = ""
        for (const c of sWord) {
            result = result + "*"
        }
        return result
    }
    
    function guess(){

        console.log(tries)

        if (tries >= 7) {
            hWord.innerText = "GAME OVER"
            submitBtn.setAttribute("disabled", "true")
        }

        letter = input.value

        if(checkIfInWord(letter, secretWord)) {
            hiddenWord = generateHiddenWord(hiddenWord, secretWord, letter)
            hWord.innerText = hiddenWord
            input.value= ""
        }
        else {
            currentClass = body.getAttribute("class")
            step = parseInt(currentClass.slice(-1))
            newClass = "step-"
            wrong.innerText = wrong.innerText + " " + letter
            sticks.innerText = sticks.innerText + " " + "|"
            console.log(sticks.innerText)
            body.classList.replace(currentClass, (newClass+(step+1)))
            tries += 1
        }
    }
    

    function checkIfInWord(letter, sWord) {
        return sWord.includes(letter)
    }
    

    function generateHiddenWord(hWord, sWord, letter) {
        let result = ""
        for (let i = 0; i < hWord.length; i++) {
            if (sWord[i] === letter) {
                result = result + letter
            }
            else {
                result = result + hWord[i]
            }
        }
        return result
    }
    
    initGame()