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

function imprimePersonajes(personajes) {
    if (personajes.length) { 
        let personaje = personajes.shift();
        console.log (personajes);
        console.log (personaje);
        imprimePersonajes(personajes);
    }
}
 imprimePersonajes(comunidad);