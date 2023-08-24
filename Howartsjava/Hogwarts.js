const griffindor = {
    casa: "Griffindor",
    ubicacion: "Torre del castillo",
    alumnos: [],
    sombrero(nombre, apellido) {
        const alumno = {nombre, apellido};
        this.alumnos.push(alumno) 
        return `${nombre} ${apellido} has sido asignado a ${this.casa} y tu sala comun se encuentra en ${this.ubicacion}`;
        }
};
console.log(griffindor.sombrero("Harry", "Potter"))
console.log (griffindor.alumnos)

const slytherin = {
    casa: "Slytherin",
    ubicacion: "La mazmorra del castillo",
    alumnos: []};

    const seleccionador = griffindor.sombrero;
    console.log(seleccionador.call(slytherin, "Draco", "Malfoy"));
    console.log(slytherin.alumnos);

    const ravenclaw = {
        casa: "Ravenclaw",
        ubicacion: "La Torre de Astronomia",
        alumnos: []};

        console.log(seleccionador.call(ravenclaw, "Cho", "Chang"));
        console.log(ravenclaw.alumnos);

    const hufflepuff = {
        casa: "Hufflepuff",
        ubicacion: "La cocina del Castillo",
        alumnos: []};

        console.log(seleccionador.call(hufflepuff, "Newt", "Scamander"));
        console.log(hufflepuff.alumnos);

    const dataAlumnos = ["Cedric", "Diegory"];

        console.log(seleccionador.apply(hufflepuff, dataAlumnos));
        console.log(hufflepuff.alumnos)

    const seleccionSlytherin = seleccionador.bind(slytherin);
        console.log(seleccionSlytherin("Tom", "Riddle"));
        console.log(slytherin.alumnos);

    const weasleys = ["Ginny", "Percy", "Ron", "George", "Fred", "Charly"];
    const seleccionWeasley = griffindor.sombrero.bind(griffindor);
weasleys.forEach(nombre => {
  console.log(seleccionWeasley(nombre, "Weasley"));
});
console.log(griffindor.alumnos);
