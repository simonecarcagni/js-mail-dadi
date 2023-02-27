let numberPlayer = Math.floor(Math.random() * 6) + 1; 

console.log(numberPlayer);

let numberPc = Math.floor(Math.random() * 6) + 1; 

console.log(numberPc);

if (numberPlayer > numberPc){
    console.log(`Ha vinto il giocatore`);
} else if (numberPlayer < numberPc){
    console.log(`Ha vinto il PC`);
} else if (numberPlayer == numberPc){
    console.log(`É un pareggio`);
};