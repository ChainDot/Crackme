// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = 'Թ' // The 9th letter of Armenian alphabet / where did you get that ?

const crackme4 = (password) => {
  let tmp1 = 0
  for (let i = 0; i < password.length; ++i) {
    tmp1 += password.charCodeAt(i)
  }
  if (tmp1 === 1337) {   // = > str = String.fromCharCode(1337) / console.log(str) = 'Թ'
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme4(password)

