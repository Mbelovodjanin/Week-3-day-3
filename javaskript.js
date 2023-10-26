// "use strict";
// var niz = [12,13,14];
// delete niz[2];
// console.log(niz);
// //
// niz.length -=1 //tako brisemo elemente u nizu
// niz[niz.length]=3; //tako dodajemo u niz

// // v
// var c =5;
// {
//     var b = 7;
//     {
//         var c=8;

//     }
// }
// console.log(c);
//
//
//
// var x = 8;
// function primer (x){
//     var y = 9;
//     return x+2+y;
// }
// console.log(primer());
// var a= 8;
// console.log(suma(3,4));
// function suma(a,b){
//     return a+b;
// }
// console.log(sum(3,4));
// function checkGlobal(){
//     x= 6;
// }
// checkGlobal();
// console.log(x);
console.log(global);
var global = 123;
console.log(global);

// function hoist(){
//     console.log(global);
//     global=2;
//     console.log(global);

// }
// hoist()

//Example 9

function replace(string, separator) {
    "use strict";
    var output = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            output += separator;
        } else {
            output += string[i];
        }
    }
    return output;
}
console.log(replace("My random string", "#"));
//ocekujemo paramater string i parametar separator, kad god nadjemo na spejs, zamenimo za separator. kada radimo sa stringom moramo novi jer mozemo samo da ga cistimo. for petlju koristimo da bismo presli kroz string, u ifu ogranicavamo kada naidjemo na spejs da dodamo novi separator a u suprotnom ako nisi spejs onda se prepisuje.

//Example 10

function hide(ime, prezime){
    var skracenoIme = "";
    var skracenoPrezime = "";
    
    for(var i=0; i<3; i++){
        skracenoIme +=ime[i].toLowerCase();
        skracenoPrezime +=prezime[i].toLowerCase();
    }
    return skracenoIme + "......" + skracenoPrezime + "@gmail.com";
}
console.log(hide("Milan", "Belovodjanin"));