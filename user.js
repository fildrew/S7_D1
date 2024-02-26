/* 1. Crea una classe User per la creazione di oggetti di tipo “utente”. 
Il suo costruttore dovrà inizializzare ogni oggetto utente con i seguenti attributi:
- firstName- lastName- age- location Aggiungi alla classe User anche un metodo che restituisca
il confronto con l'età di un'altra persona. 
Ad esempio, date due istanze della classe utente “x” e “y” inizializzate 
con le proprietà sopra descritte, il metodo dovrà restituire una frase 
simile a “x è più vecchio di y” a seconda del risultato del confronto.
 Crea degli oggetti a partire dalla classe User e verifica che la comparazione tra le età funzioni correttamente. */

class User {
    constructor(_fisrtName, _lastName,_age,_location){
        this.firstName = _fisrtName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
        
    }
    //METODO
    compareAge(otherUser){
       if (this.age > otherUser.age) {
        return `${_this.firstName} is older than ${otherUser.age}`
       } else if (this.age < otherUser.age) {
        return `${_this.firstName} is younger than ${otherUser.age}`
       }else {
        return `${_this.firstName} is the same age as ${otherUser.age}`
       }
    }
}

const user1 = new ("Lautaro","Martinez",27,"Buenos Aires");
const user2 = new ("Rafa","Leao",23,"Lisbon");
const user3 = new ("Julian","  Wirtz",21,"Berlin");
const user4 = new ("Mohammed","Salah",32,"Cairo");

console.log(user1);
console.log(user1.compareAge(user2));
console.log(user1.compareAge(user3));
console.log(user1.compareAge(user4));
console.log(user2.compareAge(user3));
console.log(user2.compareAge(user4));
