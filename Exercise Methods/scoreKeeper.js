console.log("connected")
var scoreP1 = document.getElementsByClassName("score-player1")
var scoreP2 = document.getElementsByClassName("score-player2")
var totalScore = document.getElementsByClassName("totalScore")
var inputScore = document.querySelector("input")
var playerButton = document.getElementsByClassName("playerButton")
var resetButton = document.getElementsByClassName("resetButton")
var p1Score = 0
var p2Score = 0
var scoreTotal = 5
var stop = true

inputScore.addEventListener("click", function(){
    scoreTotal = inputScore.value
    totalScore[0].textContent = scoreTotal
})
playerButton[0].addEventListener("click", function(){
    console.log("player1")
    if(stop){
        p1Score++
        scoreP1[0].textContent = p1Score
        if(p1Score==scoreTotal){
            scoreP1[0].style.color = "green"
            stop = false
        }   
    }         
})

playerButton[1].addEventListener("click", function(){
    console.log("player2")
    if(stop){
        p2Score++
        scoreP2[0].textContent = p2Score
        if(p2Score==scoreTotal){
            scoreP2[0].style.color = "green"
            stop = false
        }   
    }
})

resetButton[0].addEventListener("click", function(){
    scoreP1[0].textContent = 0
    scoreP2[0].textContent = 0
    stop = true
    p1Score = 0
    p2Score = 0
    inputScore.value = 0
    scoreTotal = 5
    totalScore[0].textContent = scoreTotal
    scoreP1[0].style.color = "black"
    scoreP2[0].style.color = "black"
})