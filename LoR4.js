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

console.log(comunidad.indexOf("Aragorn")); //Podemos buscar usando indexof un elemento en particular para saber cual es su indice

//Usando includes

function traeAlRey(array){
    if(array.includes("Aragorn")) { //Aqui solo nos dara un valor true o false y de ahi se va que pasa si es true o false
        console.log("Aragorn es el verdadero rey"); return; //Aqui si es true
    } console.log("Gondor needs no king"); //Aqui si es false
}

traeAlRey(comunidad);

let elRey = comunidad.shift();
console.log(comunidad);
traeAlRey(comunidad);

comunidad.unshift(elRey);

traeAlRey(comunidad);