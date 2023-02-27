const mailList = ["pippo@mail.com", "pluto@mail.com", "paperino@mail.com", "mickey@mail.com", "minnie@mail.com"];

console.log(mailList);

let mailRequest = prompt('Inserisci la tua email');

console.log(mailRequest);

let validity = false;

for (let i = 0; i < mailList.length; i++) {

    if (mailRequest == mailList[i]) {
        validity = true;
    };

};

if (validity){
    console.log(`La tua mail ${mailRequest} è valida: puoi accedere.`);
} else {
    console.log(`La tua mail ${mailRequest} non è valida: non puoi accedere.`);
};



/*
for (let i = 0; i < mailList.length; i++) {

    if (mailRequest == mailList[i]){
        console.log(`La tua mail ${mailRequest} è valida: puoi accedere.`);
    } else if (mailRequest !== mailList[i]){
        console.log(`NO`)
    };

};
*/

const valori = [1, 2, 5, 7];

let somma = 0;

for (let i = 0; i < valori.length; i++){

    somma += valori[i];
    result = somma / (i + 1);
};

console.log(somma);
console.log(result);