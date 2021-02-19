// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '@Im!adeveloper'

const crackme3 = (password) => {
 // string of 14 characters &&  first character must be a '@' &&  fourth character must be a '!' 
  if (password.length === 14 && password[0] === '@' && password[3] === '!') {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme3(password)