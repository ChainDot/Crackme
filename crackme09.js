
// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = 'JustASimplePassword'

const crackme9 = (password) => {
  if (password.startsWith('Just') && password.endsWith('Password')) { //password must start with 'Just' and end with 'Password' 
    let tmp1 = password.slice(4).slice(0, -8) // array [J,u,s,t/  ,A,S,i,m,p,l,e  /,P,a,s,s,w,o,r,d] /5
    tmp1 = tmp1.split('').reverse().join('')// turn string backward, tmp1 = 'ASimple' / 4 
    if (Number.isNaN(Number(tmp1))) {
     //(Number.isNan(   NaN          ) = True   /3
      tmp1 += String.fromCharCode(35)  // Concatenates '#' to tmp1 = 'elpmiSA'    /   2
      if (tmp1 === 'e' + 'l' + 'p' + 'm' + 'iSA#') { // tmp1 = 'elpmiSA#'     /   1
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
}
crackme9(password)