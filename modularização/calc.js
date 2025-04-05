var soma = require("./soma")
var sub = require("./sub")

var div = require("./div")
var  multi = require("./multi")

let a = 10;
let b = 20;

console.log(
    `\tsoma de ${a} e ${b} = ${soma(a,b)}\n
\tDiv de ${a} e ${b} = ${div(a,b)}\n
\tsub de ${a} e ${b} = ${sub(a,b)}\n
\tmulti de ${a} e ${b} = ${multi(a,b)}
     `
)




