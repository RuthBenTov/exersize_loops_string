//--------------------------------שאלה 1----------------------------
var first_latter = 97;
var last_latter = 122;
var big_latter = 65;
var bigLast_latter = 90;
var abcABC = "";
for (var i = first_latter; i <= last_latter; i++) {
    abcABC += String.fromCharCode(i);
}
for (var i = big_latter; i <= bigLast_latter; i++) {
    abcABC += String.fromCharCode(i);
}
console.log(abcABC);
//------------------------שאלה 2----------------------------------
var str7 = "olleh";
var res7 = "";
for (var i = str7.length - 1; i >= 0; i--) {
    res7 += str7[i];
}
console.log(res7);
//-------------------------שאלה 3-----------------------------------
var srting_a = "hello";
var string_b = "12345";
var string_res = "";
for (var i = 0; i < srting_a.length; i++) {
    string_res += srting_a[i] + string_b[i];
}
console.log(string_res);
//---------------------------שאלה 4---------------------
var maarch = [1, 2, 3, 4, 5];
var sum = 0;
for (var i = 0; i < maarch.length; i++) {
    sum += maarch[i];
}
console.log(sum / maarch.length);
//-------------------שאלה 5--------------------------------
var maarach5 = [1, 2, 3, 4, 5];
var sum5 = 0;
for (var i = 0; i < maarch.length; i++) {
    if (i == 0)
        sum5 += maarach5[i + 1];
    else if (i == maarch.length - 1)
        sum5 += maarach5[i - 1];
    else {
        sum5 += maarach5[i - 1];
        sum5 += maarach5[i + 1];
    }
}
console.log(sum5);
//-------------------------------שאלה 6---------------------------
var maarach6 = [7, 2, 6, 1, 4, 3, 5];
var saver = 0;
console.log("first maarch: " + maarach6);
// for(let i = 0 ; i<maarach6.length ; i++){
//      if(maarach6[i]>maarach6[i+1]){
//         saver = maarach6[i]
//         maarach6[i] = maarach6[i+1]
//         maarach6 [i+1] = saver
//         i = 0
//     }
// }
// console.log("sort maarach: " + maarach6);
