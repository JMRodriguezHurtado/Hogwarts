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

    //Probamos el stack

    function reverseString(str) {
        
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
      }
      
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

const reorganized = reorganizeArrayWithStacks(comunidad);
console.log("Input Array:", comunidad);
console.log("Reorganized Array:", reorganized);
      