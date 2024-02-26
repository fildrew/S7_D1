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
let p2 = new Pet("Pap", "Daniel", "Cane", "German Shepherd");
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

const form = document.querySelector("form");
const petList = document.querySelector("#listaAnimali");

const pets = [];

function aggiuntaAnimale() {
  listaAnimali.innerHTML = "";
  for (let i = 0; i < pets.length; i++) {
    const pet = pets[i];
    const li = document.createElement("li");
    li.textContent = `${pet.petName} (${pet.species}, ${pet.breed}), Proprietario ${pet.ownerName}`;
    listaAnimali.appendChild(li);
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
  aggiuntaAnimale();
});
