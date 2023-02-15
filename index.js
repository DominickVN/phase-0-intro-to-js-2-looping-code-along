// Code your solutions in this file
const names=['Guadalupe','Ollie','Aki'];
const event = "amazing";

function writeCards(names, event) {
    const writtenCards = []
    for (let i = 0; i < names.length; i += 1) {
        writtenCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return writtenCards
}

function countDown(){
    let numCountdown=11;
    while(numCountdown--){
      console.log(numCountdown)
    }
  } 