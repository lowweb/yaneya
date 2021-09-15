
let string = Array(9999999).fill(() => [7, 711, 1111][Math.floor(Math.random() * 3)]).map(f => f()).join('');
// console.log(string)
// let string = '7111111771111117111111771'
// let string = '711111177111111711111177111111711111177111111711111177111111711111177111111711111177111111711111177111111711111177111111711111177111111711111177111111711111177111111'
// let string = '2343243243243243243'
let stringLenght = string.trim().length;
// console.log(stringLenght)
// console.log(string.search(/[^0-9]/))
// let res = string.split(/[7, 711., 1111]/);
if (string.search(/[^0-9]/) != -1 || stringLenght === 0 || stringLenght > 30000000) {
  return false
}

// let

// let res = string.split(7).join('').split(111111).join('');
let what = /7/gi;
string = string.replace(what, '');

what = /11/gi;
string = string.replace(what, '');
console.log (string)





module.exports = function (string) {
  const stringLenght = string.trim().length;

  if (string.search(/[^0-9]/) != -1 || stringLenght === 0 || stringLenght > 30000000000) {
    return false
  }
  // let res = string.split(1111).join('').split(711).join('').split(7).join('');
  let res = string.split(7).join('').split(111111).join('');
  return res.length > 0 ? false : true
}



module.exports = function (string) {
  const stringLenght = string.trim().length;

  if (string.search(/[^0-9]/) != -1 || stringLenght === 0 || stringLenght > 30000000000) {
    return false
  }

  let what = /7/gi;
  string = string.replace(what, '');
  
  what = /111111/gi;
  string = string.replace(what, '');
  return string.length > 0 ? false : true
}



module.exports = function (string) {
  const stringLenght = string.trim().length;

  if (string.search(/[^0-9]/) != -1 || stringLenght === 0 || stringLenght > 30000000000) {
    return false
  }
  let res = string.split('1111').join('').split('711').join('')
  return res.match(/[^7]/) === null ? true : false
}