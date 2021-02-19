// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = 'abcd ' // the password must have at least a space and a vowel.

const crackme10 = (password) => {
  if (
    password
      .trim() // password must have a least a space
      .toLowerCase() // must be in lower case
      .split('') // turn the password into an array.
      .filter((elem) => ['a', 'e', 'i', 'o', 'u', 'y'].includes(elem)) // array must at least include one vowel.
      // Useless part
      .map((elem) => elem.charCodeAt()) // create a new array and turn into ASCII number equivalent
      .reduce((a, b) => {  //subtract the numbers in the arrat, starting from the beginning.
        return a + b
      }, 0) %
      2 !== 0 
  ) {
    console.log('OK')
  } else {
    console.log('BAD')
  }
}

crackme10(password)