// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = 'ICODE4FOOD'

const crackme7 = (password) => {
  if (password.length === 10) {// password must be 10 characters long
    if (password[0].charCodeAt() === 73) {  // I
      if (password[1].charCodeAt() === 67) { // C
        if (password[2].charCodeAt() === 79) { // O
          if (password[3].charCodeAt() === 68) {  // D
            if (password[4].charCodeAt() === 69) { // E
              if (password[5].charCodeAt() === 52) { // 4 
                if (password[6].charCodeAt() === 70) { // F
                  if (password[7].charCodeAt() === 79) { // O 
                    if (password[8].charCodeAt() === 79) { // O 
                      if (password[9].charCodeAt() === 68) { // D
 /*
let arrayNbs = [73,67,79,68,69,52,70,79,79,68]
let arrayLetters = []
let password = String.fromCharCode(arrayNbs)
*/
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
  } else {
    console.log('BAD')
  }
}

crackme7(password)

