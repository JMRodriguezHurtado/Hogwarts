//Ejemplos usando al señor de los Anillos

const comunidad = ["Aragorn", 
"Frodo", 
"Sam", 
"Pippin", 
"Boromir", 
"Legolas", 
"Gimly", 
"Gandalf", 
"Galadriel", 
"Merryl"];

console.log(comunidad[1]); //Segundo elemento
console.log(comunidad.length); //tamaño del array   
console.log(comunidad[comunidad.length - 1]); //ultimo elemnto del array
let muerto = comunidad.pop(); //Eliminamos ultimo elemento del array y lo metemos en muerto
console.log(muerto);
console.log(comunidad);
comunidad.push(muerto); //Añadimos de vuelta el ultimo elemento y de nuevo lo ponemos al final
console.log(comunidad);
comunidad.unshift(muerto);
console.log(comunidad); //Añadimos el ultimo elemento ahora al inicio y tenemos uno al final y uno al inicio

let seVanaMordor = comunidad.splice(1, 3); //Extraemos estos elementos del indice 1 y tomamos 3 elementos, el array se altera
console.log(seVanaMordor);
console.log(comunidad);

let seQuedan = comunidad.slice(2, 6); //Extraemos estos elementos del indice 2 al indice 4, pero el array no se altera
console.log(seQuedan);
console.log(comunidad);