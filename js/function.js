// let num = +prompt('Введите Число ');
// let deg = +prompt('В какую степень возвести число ?');
//
// function pow(num, deg = 1){
//     let res = num ** deg;
// if (typeof(num) === 'number' && isNaN(num)) { return alert(' param is not type of Number');
// }else if (typeof(deg) === 'number' && isNaN(deg)) { return alert(' param is not type of Number');
// }else {
//     return res;
// }
// }
//
// let res = pow(num, deg);
// alert(res);

 function padString(str, num, symbol, right = true) {
    if (typeof str !== 'string') return 'str param is not type of String';
     if (typeof num !== 'number') return 'num param is not type of Number';
     if(str.length >= num) return str.substr(0, num);
     if(symbol.length > 1) return 'Symbol should be only 1 char';

  const symbols = num - str.length;
  let localSymbols = '';


  for (let i = 0; i < symbols; i++) {
   localSymbols += symbol
  }
   return  right ? str + localSymbols : localSymbols + str;
 }

console.log(padString('marat', 9, '*',))
console.log(padString('zhekov', 4));


