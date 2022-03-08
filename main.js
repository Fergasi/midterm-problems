function isEvenlyDivisible(num1, num2) {
  if (num1 % num2 === 0){
    return true
  } else
    return false
}

function halfSquare(num) {
  return Math.pow(num,2) / 2
}

function isLong(string) {
  if (string.length < 15){
  return false
  } else
  return true
} 

function exclaim(string) {
  string = string.replace(/!/g, '')
  string = string + '!'
  return string
}

function countWords(string) {
  x = string.split(' ')
return x.length
}

function containsDigit(string) {
  if (string === '' ){
    return false
  }
  for (i = 0; i < string.length; i++){
    if (!isNaN(string[i]) && string[i] !== ' '){
      return true
    } 
  }
  return false
}

function containsLowerCase(string) {
  if (string === '' ){
    return false
  }
  for (i = 0; i < string.length; i++){
    if (string[i] === string[i].toLowerCase() && string[i] !== string[i].toUpperCase() && string[i] !== ' '){
      return true
    } 
  }
  return false
}

function containsUpperCase(string) {
  if (string === '' ){
    return false
  }
  for (i = 0; i < string.length; i++){
    if (string[i] === string[i].toUpperCase() && string[i] !== string[i].toLowerCase() && string[i] !== ' '){
      return true
    } 
  }
  return false
}

function containsNonAlphanumeric(string) {
  nonAlphNu = " ~`!@#$%^&*()_-+={}[]|:;<>.?/";
  
  if (string === '' ){
    return false
  }
  for (i = 0; i < string.length; i++){
    if (nonAlphNu.includes(string[i])){
      return true
    } 
  }
  return false
}

function containsSpace(string) {
  if (string === '' ){
    return false
  }
  for (i = 0; i < string.length; i++){
    if (string[i] === ' '){
      return true
    } 
  }
  return false
}

function digits(n) {
  let y = n.toString()
  let z = []
  for (i = 0; i < y.length; i++ ){

    if ( Math.sign(n) === 1 && y[i] !== '.' || Math.sign(n) === 0 && y[i] !== '.' || Math.sign(n) === +0 && y[i] !== '.'){

      z.push(Number(y[i]))

    } else 
    if (Math.sign(n) === -1 && y[i] !== '.' || Math.sign(n) === -0 && y[i] !== '.'){
      
      if (i === 0){
        y = y.slice(1)
      }

      z.push(Number(y[i])) 
    }
  }
  return z
}

function truncate(string) {
  let y = '';
  let i = 0;

  if(string.length < 15){
    while (i < string.length) {
      y += string[i];
      i++
    }
  }
  if (string.length >= 15){
    while (i < 8) {
      y += string[i];
      i++
    }
    y += '...';
  }
  return y
}

function isValidPassword(password) {
  upperAnswer = false;
  lowerAnswer = false;
  digitsAnswer = false;
  alphanuAnswer = false;
  spacesAnswer = false;

  alphaNu = "~`!@#$%^&*()_-+={}[]|:;<>.?/";

  for (i = 0; i < password.length; i++){

    if (password[i] === password[i].toUpperCase() && isNaN(password[i]) && alphaNu.includes(password[i]) === false){
      upperAnswer = true;
    }
    if (password[i] === password[i].toLowerCase() && isNaN(password[i]) && alphaNu.includes(password[i]) === false){
      lowerAnswer = true;
    }
    if (!isNaN(password[i]) && password[i] !== ' '){
      digitsAnswer = true;
    }
    if (alphaNu.includes(password[i])){
      alphanuAnswer = true;
    }
    if (password.includes(' ') === false){
      spacesAnswer = true
    } 
  } 
  if (upperAnswer === true && lowerAnswer === true && digitsAnswer === true && alphanuAnswer === true && spacesAnswer === true){
    return true
  } else {
  return false
  }
}

function onlyPunchy(titlesArray) {
  
   // replace all exclaimation marks with single exclaimation mark, for each item in the input array, and push to new array 

  let singleExclaimedArray = [];

  for (let title of titlesArray){
    let singleExclaimedTitle = title.replace(/!/g, '') + '!';
    singleExclaimedArray.push(singleExclaimedTitle)
  }

  // Filter out any titles that are >= 15 chars

  let punchyTitles = [];

  for (let title of singleExclaimedArray) {
    if (title.length < 15) {
      punchyTitles.push(title);
    }
  }

  return punchyTitles;
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}
