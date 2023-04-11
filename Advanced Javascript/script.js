// // Root Scope(Global Scope)
// var mesaj = "Merhaba!";
// console.log(mesaj);

// function test(){
//     // Local Scope
//     var mesaj = "Test";
//     mesaj = "Deneme";
//     console.log(mesaj);
// }
// test();
// console.log(mesaj);

// --------------------------------------------------
// Soru1
// function q1() {
//     var a = 5;
//     console.log("1. aşama",a);
//     if (a>1){
//         a=3;
//         console.log("2. aşama",a);
//     }
//     console.log("3. aşama",a);
// }
// --------------------------------------------------

// Soru2
// var a = 0;
// function q2() {
//     a=5;
// }
// function q22() {
//     console.log(a);
// }
// --------------------------------------------------

// Soru 3
// var a; //undefined
// function q3() {
//    a = "Merhaba";
// }
// function q32() {
//     console.log(a);
// }
// --------------------------------------------------

// Soru 4
// var a = 1;
// function q4() {
//     var a = "test";
//     console.log(a);
// }
// --------------------------------------------------

// Soru 5
let a = 2;
console.log("0. aşama", a);
if (true) {
    let a = 5;
    console.log("1. aşama",a);
}
console.log("2. aşama",a);