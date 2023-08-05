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

    //Probamos el stack

    /*function reverseString(str) {
        
        const stack = new Stacks();

        for (let i = 0; i < str.length; i++) {
          stack.onstack(str[i]);
        }

        let reversedStr = '';
        while (stack.size() > 0) {
          reversedStr += stack.destack();
        }
      
        return reversedStr;
      }

    const inputString = "Hello, World!";
    const reversed = reverseString(inputString);
    console.log("Input String:", inputString);
    console.log("Reversed String:", reversed);

    //Otra prueba usando cosas

    //Ejemplos usando al señor de los Anillos

    function isVowel(char) {
        return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
      }
      
      function reorganizeArrayWithStacks(arr) {
        // Create two stacks, one for strings starting with vowels and one for strings starting with consonants
        const vowelStack = new Stacks();
        const consonantStack = new Stacks();
      
        // Separate strings into respective stacks based on whether they start with a vowel or consonant
        for (let i = 0; i < arr.length; i++) {
          const firstChar = arr[i][0];
          if (isVowel(firstChar)) {
            vowelStack.onstack(arr[i]);
          } else {
            consonantStack.onstack(arr[i]);
          }
        }
      
        // Reorganize the array by popping strings from both stacks alternately
        const reorganizedArr = [];
        while (vowelStack.size() > 0 || consonantStack.size() > 0) {
          if (vowelStack.size() > 0) {
            reorganizedArr.push(vowelStack.destack());
          }
          if (consonantStack.size() > 0) {
            reorganizedArr.push(consonantStack.destack());
          }
        }
      
        return reorganizedArr;
      }*/
      
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



/*const reorganized = reorganizeArrayWithStacks(comunidad);
console.log("Input Array:", comunidad);
console.log("Reorganized Array:", reorganized);*/




      