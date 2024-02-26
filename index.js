/* 1. Crea una classe User per la creazione di oggetti di tipo “utente”. 
Il suo costruttore dovrà inizializzare ogni oggetto utente con i seguenti attributi:
- firstName- lastName- age- location Aggiungi alla classe User anche un metodo che restituisca
il confronto con l'età di un'altra persona. 
Ad esempio, date due istanze della classe utente “x” e “y” inizializzate 
con le proprietà sopra descritte, il metodo dovrà restituire una frase 
simile a “x è più vecchio di y” a seconda del risultato del confronto.
 Crea degli oggetti a partire dalla classe User e verifica che la comparazione tra le età funzioni correttamente. */

class User {
    constructor(_firstName, _lastName,_age,_location){
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
        
    }
    //METODO
    compareAge(otherUser){
       if (this.age > otherUser.age) {
        return `${this.firstName} is older than ${otherUser.firstName}`;
       } else if (this.age < otherUser.age) {
        return `${this.firstName} is younger than ${otherUser.firstName}`;
       }else {
        return `${this.firstName} and ${otherUser.firstName} have the same age`;
       }
    }
}

const user1 = new User ("John", "Marco" , 27, "Rome");
const user2 = new User("Rafa", "Leao", 23, "Lisbon");
const user3 = new User("Julian", "Wirtz", 21, "Berlin");
const user4 = new User("Mohammed", "Salah", 32, "Cairo");

console.log(user1);
console.log(user1.compareAge(user2));
console.log(user2.compareAge(user3));
console.log(user4.compareAge(user3));


/* Crea un form per la creazione di oggetti “Pet” (animali domestici).
La classe Pet dovrà essere dotata delle seguenti proprietà:
 - petName- ownerName- species // (cane, gatto, coniglio etc.)- breed  (labrador, soriano, nano etc.)
Nella classe che utilizzerai per creare questi oggetti aggiungi anche un metodo che restituisca true se due animali condividono lo stesso padrone. 
Crea, raccogliendo i dati dal form, diverse istanze della classe Pet e mostrane i dati in una lista sottostante. */

class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }
    //METODO
    petCheck(other) {
      return this.ownerName === other.ownerName ? true : false;
    }
  }
  
  let p1 = new Pet("Pippo", "Simon", "Cane", "Labrador");
  let p2 = new Pet("Papu", "Daniel", "Cane", "German Shepherd");
  let p3 = new Pet("Gold", "Phil", "Cane", "Bulldog");
  let p4 = new Pet("Bill", "Josh", "Cane", "Terrier");
  let p5 = new Pet("Minnie", "Joe", "Cane", "Chihuahua");
  let p6 = new Pet("Papu", "Angel", "Cane", "Retriever");
  
  console.log(p1.petCheck(p2));
  console.log(p1.petCheck(p3));
  console.log(p3.petCheck(p5));
  console.log(p2.petCheck(p1));
  console.log(p3.petCheck(p6));
  console.log(p4.petCheck(p3));
  console.log(p5.petCheck(p5));
  
  const form = document.querySelector("form");
  const petList = document.querySelector("#listPet");
  
  const pets = [];
  
  function addPet() {
    listPet.innerHTML = "";
    for (let i = 0; i < pets.length; i++) {
      const pet = pets[i];
      const li = document.createElement("li");
      li.textContent = `${pet.petName} (${pet.species}, ${pet.breed}), Owner ${pet.ownerName}`;
      listPet.appendChild(li);
    }
  }
  
  form.addEventListener("submit", event => {
    event.preventDefault();
    const petName = event.target.elements.petName.value;
    const ownerName = event.target.elements.ownerName.value;
    const species = event.target.elements.species.value;
    const breed = event.target.elements.breed.value;
  
    const pet = new Pet(petName, ownerName, species, breed);
    pets.push(pet);
  
    event.target.reset();
    addPet();
  });
  