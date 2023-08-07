function Stacks() {
    if (!(this instanceof Stacks)) {
      return new Stacks();
    }
    this.items = [];
    } 
    Stacks.prototype.onstack = function(value) {
      this.items.unshift(value);
    };
    Stacks.prototype.destack = function() {
      return this.items.shift();
    };
    Stacks.prototype.size = function() {
      return this.items.length;
    };
    Stacks.prototype.agregaarray = function(array) {
      return array.forEach((element) => this.items.unshift(element));
    }

      
const comunidad = [{ heroe: "Aragorn", raza: "Humano", edad: 92, nacionalidad: "Gondor"},  
{heroe: "Frodo", raza: "Halfling", edad: 21, nacionalidad: "La Comarca"},
{heroe: "Sam", raza: "Halfling", edad: 22, nacionalidad: "La Comarca"}, 
{heroe: "Pippin", raza: "Halfling", edad: 19, nacionalidad: "La Comarca"}, 
{heroe: "Boromir", raza: "Humano", edad: 32, nacionalidad: "Gondor"}, 
{heroe: "Legolas", raza: "Elfo", edad: 10000, nacionalidad: "Bosques de Plata"},
{heroe: "Gimly", raza: "Enano", edad: 250, nacionalidad: "Minas de Moria"},
{heroe: "Gandalf", raza: "Antiguo mago", edad: undefined, nacionalidad: undefined}, 
{heroe: "Galadriel", raza: "Elfo", edad: 1000000, nacionalidad: "El viejo mundo"}, 
{heroe: "Merryl", raza: "Halfling", edad: 18, nacionalidad: "La Comarca"}];

const laComunidadHoHo = new Stacks;
laComunidadHoHo.agregaarray(comunidad);
console.log(laComunidadHoHo);

let humanos = new Stacks;
let halfling = new Stacks;
let elfo = new Stacks;
let otro = new Stacks;

function separadorDeRazas(fromStack, toStack1, toStack2, toStack3, toStack4) {
  while(fromStack.size() > 0) {
    const char = fromStack.destack();
    console.log(char);
  if (char.raza === "Humano") {
    toStack1.onstack(char); 
  }
  else if (char.raza === "Halfling") {
     toStack2.onstack(char);
  }
  else if (char.raza === "Elfo") {
     toStack3.onstack(char);
  }
  else toStack4.onstack(char);
}}

separadorDeRazas(laComunidadHoHo, humanos, halfling, elfo, otro)
console.log(humanos);
console.log(halfling);
console.log(elfo);
console.log(otro);
console.log(laComunidadHoHo);
console.log(humanos.size());




      