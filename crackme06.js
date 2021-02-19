
// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '1a2b!imadeveloper'

const crackme6 = (password) => {
  if (password[0] === '1') { // firt character must be '1'
    if (password[1] === 'a') { // second character must be 'a'
      if (password[2] === '2') { // third character must be '2'
        if (password[3] === 'b') {  // fourth character must be 'b'
             // fifth character must be '1' and the password must be at least 14 characters
          if (password[4] === '!' && password.length > 13) {
            console.log('OK')
          } else {
            console.log('BAD')
          }
        } else {
          console.log('BAD')
        }
      } else {
        console.log('BAD')
      }
    } else {
      console.log('BAD')
    }
  } else {
    console.log('BAD')
  }
}

crackme6(password)