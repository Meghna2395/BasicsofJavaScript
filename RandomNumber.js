let a = Math.floor(Math.random() * 222) + 100;
let b = Math.floor(Math.random() * 222) + 100;
let c = Math.floor(Math.random() * 222) + 100;
let d = Math.floor(Math.random() * 222) + 100;
let x = Math.floor(Math.random() * 222) + 100;

let min = 100;
let max = 900;
if(a > b && a > c && a > d && a > x){
    max = a;
}else if(b > a && b > c && b > d && b > x){
    max = b;
}else if(c > a && c > b && c > d && c > x){
    max = c;
}else if(d > a && d > b && d > c && d > x){
    max = d;
}else if(x > a && x > b && x > c && x > d){
    max = x;
}

if(a < b && a < c && a < d && a < x){
    min = a;
}else if(b < a && b < c && b < d && b < x){
    min = b;
}else if(c < a && c < b && c < d && c < x){
    min = c;
}else if(d < a && d < b && d < c && d < x){
    min = d;
}else if(x < a && x < b && x < c && x < d){
    min = x;
}

console.log(a, b, c, d, x);
console.log("min value is : ", min);
console.log("max value is : ", max);