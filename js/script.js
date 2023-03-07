// Chiedi all'utente il suo nome
// Poi chiedi il suo cognome
// Poi il suo colore preferito
// Scrivere sulla pagina la password nomecognomecolorepreferito21

// Chiedo il nome all'utente
const userName = prompt("Ciao utente! Qual è il tuo nome?");
console.log("Nome:", userName);

// Chiedo il cognome all'utente
const userLastName = prompt("Qual è il tuo cognome?");
console.log("Cognome:", userLastName);

// Chiedo il colore preferito all'utente
const favouriteColor = prompt("Qual è il tuo colore preferito?");
console.log("Colore:", favouriteColor);

// Numero 21 da aggiungere alla fine della password generata
const number = 21;
console.log(number);

// Stampo output
document.getElementById("name").innerHTML = userName;
document.getElementById("lastname").innerHTML = userLastName;
document.getElementById("color").innerHTML = favouriteColor;
document.getElementById("password").innerHTML = `Password: ${userName}${userLastName}${favouriteColor}${number}`;