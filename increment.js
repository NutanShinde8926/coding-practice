//let i = 7;
//console.log(++i);
//console.log(i--);
//console.log(i);
//console.log(i++);
//console.log(--i);
//console.log(i);


//let j = 15;
//console.log(j++);
//console.log(j++);
//console.log(--j);
//console.log(j--);
//console.log(++j);
//console.log(j);

//LCM
let a = 6;
let b = 8;
let large = a > b ? a:b;
while (true) {
    if (large % a == 0 && large % b == 0)
    {
        console.log("LCM is :" + large);
        break;
    }
    large++;
}