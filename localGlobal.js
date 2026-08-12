let x = 100; //Global Variable
console.log(x); //100
function demo() {
    console.log(x); //100
}
demo();

function hello() {
    let y = 200;
    console.log(y); //200
}
hello();
console.log(y); //undefined
