/*  les valeur renvoyer dans prompt sont automatiquement 
des string donc avec une adition les deux valeur sont concaténer.
il faudra donc les convertir avec + ou Number()
*/
let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a+b);
