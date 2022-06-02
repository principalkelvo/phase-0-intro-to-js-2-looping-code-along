// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }

const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }

//     return gifts;
// }

// wrapGifts(gifts);

const newArray=[]

function writeCards(stringArray,eventName){
    for (let i = 0; i < stringArray.length; i++) {
        // newArray.push(stringArray[i]);
        newArray.push(`Thank you, ${stringArray[i]}, for the wonderful ${eventName} gift!`);
        debugger
    }
    return newArray;
}
// writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")

function wrapGifts(gifts) {
    let i = 0; // the initialization moves OUTSIDE the body of the loop!
    while (i < gifts.length) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      i++; // the iteration moves INSIDE the body of the loop!
    }
  
    return gifts;
  }
  

  function countDown(count){
      let i=count;
      while(i>=0){
          console.log(i);
          i--;
      }
  }
  countDown(10);