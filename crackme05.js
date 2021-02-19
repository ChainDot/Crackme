// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '4321drowssap'

const crackme5 = (password) => {
/* .split('') turn your string into an array of each character of the string / 
   .reverse() the first element of the array become the last and the last element become the first and so on /
   .join('') Concatenates elements of an array together without space.
*/   
  if (password.split('').reverse().join('') === 'password1234') {
    console.log('OK')
  } else {
    console.log('BAD')
  }
}

crackme5(password)