//Ejemplos usando al señor de los Anillos

const comunidad = ["Aragorn", 
"Frodo", 
"Sam", 
"Sam",
"Pippin",
"Pippin", 
"Boromir", 
"Legolas",
"Frodo",
"Aragorn", 
"Gimly", 
"Gandalf", 
"Galadriel", 
"Merryl"];

console.log(comunidad.filter((element) => element === "Sam")); //Usando filter tomamos todas las coincidencias
console.log(comunidad.filter((element) => element === "Aragorn")); 
console.log(comunidad); //Pero el array original no tiene cambios
console.log(comunidad.find((element) => element === "Sam")); //Usando find solo tomara la primera coincidencia dando un solo elemento

const laComunidadDelAnillo = new Set ([
    "Aragorn",
    "Sam",
    "Merril",
]);
console.log(laComunidadDelAnillo);
console.log(laComunidadDelAnillo.size);

function completarLaComunidad(){
    comunidad.forEach((element) => {
        laComunidadDelAnillo.add(element);
    })
};
completarLaComunidad();
console.log(laComunidadDelAnillo);