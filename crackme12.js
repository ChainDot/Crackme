// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = 'cycling4life'

const crackme1 = (password) => {
  if (password.length === 14) { 
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme11(password)