const hogwarts = {
    griffindor: {
      casa: "Griffindor",
      ubicacion: "Torre del castillo",
      alumnos: [],
      sombrero(estudiantes) {
        estudiantes.forEach(estudiante => {
          const { nombre, apellido } = estudiante;
          const alumno = { nombre, apellido };
          this.alumnos.push(alumno);
          console.log(`${nombre} ${apellido} has sido asignado a ${this.casa} y tu sala comun se encuentra en ${this.ubicacion}`);
        });
      }
    },
    slytherin: {
      casa: "Slytherin",
      ubicacion: "La mazmorra del castillo",
      alumnos: []
    },
    ravenclaw: {
        casa: "Ravenclaw",
        ubicacion: "La Torre de Astronomia",
        alumnos: []
    },
    hufflepuff: {
        casa: "Hufflepuff",
        ubicacion: "La cocina del castillo",
        alumnos: []
    }
   
  };
  
  const griffindorStudents = [
    { nombre: "Harry", apellido: "Potter" },
    { nombre: "Hermione", apellido: "Granger" },
    { nombre: "Ron", apellido: "Weasley" }
  ];
  
  hogwarts.griffindor.sombrero(griffindorStudents);
  console.log(hogwarts.griffindor.alumnos);
  
  const slytherinStudents = [
    { nombre: "Draco", apellido: "Malfoy" },
    { nombre: "Severus", apellido: "Snape" }
  ];
  
  hogwarts.griffindor.sombrero.call(hogwarts.slytherin, slytherinStudents);
  console.log(hogwarts.slytherin.alumnos);

  const ravenclawStudents = [
    { nombre: "Luna", apellido: "Looney"},
    { nombre: "Trafalwar", apellido: "Law"},
    { nombre: "Nico", apellido: "Robin"}
  ];

  hogwarts.griffindor.sombrero.call(hogwarts.ravenclaw, ravenclawStudents);
  console.log(hogwarts.ravenclaw.alumnos);
  
  const hufflepuffStudents = [
    { nombre: "Gregory", apellido: "Digory"},
    { nombre: "Ruppert", apellido: "Madre"},
    { nombre: "Josefa", apellido: "Ortiz"}
  ];

  const sombreroHufflepuff = hogwarts.griffindor.sombrero.bind(hogwarts.hufflepuff);
sombreroHufflepuff(hufflepuffStudents);
console.log(hogwarts.hufflepuff.alumnos);