// Code your solutions in this file

const name = ["Charlie", "Samip", "Ali"];
const event = "birthday";
const arrayPrint = [];

function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
        arrayPrint[i]=`Thank you, ${name[i]}, for the wonderful ${event} gift!`;
    }
    return arrayPrint;
}


function countDown(number) {
    let i = number;
    while (i >= 0) {
        console.log (i);
        i--;
    }
}
