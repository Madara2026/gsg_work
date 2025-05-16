let player = {
  name : "per",
  chips : 200

}
let cards = []
let sum=  0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl= document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +  ": $  " + player.chips

 function getRandomCard(){

     let randomNumer =   Math .floor(Math.random() * 13) + 1
    if (randomNumer > 10){
        return 10
     }
     else if (randomNumer === 1){
      return 11
     }
     else{
      return randomNumer
     }
 }

function startGame(){
   isAlive = true
   let frstCard = getRandomCard()
   let secondCard= getRandomCard()
   cards [frstCard ,secondCard]
   sum=  frstCard + secondCard
   renderGame()
}

function renderGame(){

  cardsEl.textContent= "Cards"
    for(let i =0; i<cards.length; i++){
        cardsEl.textContent+=cards[i] + " "

        }
          sumEl.textContent = "Sum" +sum     
            if(sum <= 20){
            console.log("DO you want to draw a nem card")
            }

              else if (sum === 21){
              console.log("Wohoo you have blackjack")
              hasBlackJack = true
              }

              else{
              console.log("you out of the game") 
              isAlive = false
              }
  }

 function newCard(){
    if (isAlive === true && hasBlackJack === false) {
      let card = getRandomCard()
      sum +=card
      cards.push(card)
      console.log(cards)
      renderGame()
    }

}

