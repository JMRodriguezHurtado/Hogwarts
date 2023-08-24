// Vamos a programar un queue que cuente elementos

function Queue () {
    this.fila = [];
}
Queue.prototype.enqueue = function (valor) {
    this.fila.push(valor);
}
Queue.prototype.dequeue = function () {
    if (this.fila.length === 0) return undefined;
    this.fila.shift();
}
Queue.prototype.size = function (){
    return this.fila.length;
}
Queue.prototype.enqueuearray = function (array){
    array.forEach((element) => this.fila.push(element));
    };

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

let anilloComunidad = new Queue;
anilloComunidad.enqueuearray(comunidad);

console.log(anilloComunidad.size());

