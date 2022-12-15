// Code your solutions in this file
//for ([initialization]; [condition]; [iteration]) {
    //[loop body]
//}

//for (let age = 30; age < 40; age++) {
//    console.log(`I'm ${age} years old. Happy birthday to me!`);
//}

const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}
wrapGifts(gifts);


//const names = ["Charlie", "Samip", "Ali"];
//const event = "Birthday";

function writeCards(names, event){
    const messages = [];
    for (let i = 0; i < names.length; i++){
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
 return messages;
}
console.log(writeCards(['Charlie', 'Samip', 'Ali'], 'birthday'));

function countDown(i){
    var i = 10;
    while (i >= 0) {
        console.log(i--);
    }
}