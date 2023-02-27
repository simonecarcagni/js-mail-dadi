const mailList = ["pippo@mail.com", "pluto@mail.com", "paperino@mail.com", "mickey@mail.com", "minnie@mail.com"];

console.log(mailList);

let mailRequest = prompt('Inserisci la tua email');

console.log(mailRequest);

for (let i = 0; i < mailList.length; i++) {

    if (mailRequest == mailList[i]){
        console.log(`La tua mail ${mailRequest} è valida: puoi accedere.`);
    };

};


