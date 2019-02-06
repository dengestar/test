// let num = 20;

// function showFirstMessage(text) {
//     alert(text);
//     console.log(num);
// }

// showFirstMessage("Hello World!");
// console.log(num);

// let calc = function(a,b) {
//     return (a + b);
// }

let calc = (a,b) => a+b //стрелочная функция, => объяснение того,
    // что сейчас будет функция

console.log(calc(3,4));

console.log(calc(8,4));

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length); //совойства - значения

console.log(str.toUpperCase()); //методы - функции
console.log(str.toLowerCase());

let twelve = "12.2px";
// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));

function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(ucFirst("вася")); // == "Вася";
//alert(ucFirst("")); // == ""; // нет ошибок при пустой строке

// function ucFirst(str) {
//     // только пустая строка в логическом контексте даст false
//     if (!str) return str;
  
//     return str[0].toUpperCase() + str.slice(1);
//   }
  
console.log(checkSpam('buy ViAgRA now'));// == true
console.log(checkSpam('free xxxxx'));// == true
console.log(checkSpam("innocent rabbit"));// == false

function checkSpam(str) {
    str = str.toLowerCase();
    //console.log(str);
    return !!(~str.indexOf('viagra'.toLowerCase()) ||
        ~str.indexOf('XXX'.toLowerCase())) //{
        //     return true;
        // } else return false; 
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));// = "Вот, что мне хоте..."

console.log(truncate("Всем привет!", 20));// = "Всем привет!"

function truncate(str, maxlength) {
    if (str.length <= maxlength - 3) {
        return str;
    } else 
        return str.slice(0,maxlength-3) + '...';
}

console.log(extractCurrencyValue('$120'));

function extractCurrencyValue(str) {
    return +str.slice(1);
}

var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;
console.log(biggestNum);
console.log(smallestNum);
console.log(infiniteNum);
console.log(negInfiniteNum);
console.log(notANum);

