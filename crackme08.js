// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '8422'   // => array = [anyNb,4,2,anynb]

const crackme8 = (password) => {
/* .split('') turn your string into an array of each character of the string /
   .slice(-3, -1) =>  [etc,anynB,anyNb,4,2,anynb] 
  .join('') Concatenates elements of an array together without space.
*/
  let tmp1 = password.split('').slice(-3, -1).join('')
  if (Number(tmp1) === 42) { // Number() function converts the object argument to a number taht represents the object's value 
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}
crackme8(password)