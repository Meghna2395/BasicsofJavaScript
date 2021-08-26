const random = [];

for(let i = 0; i<10; i++){
    let x = Math.floor(Math.random() * 1000);
    random.push(x);
}
a = random.sort();
console.log(random);
console.log(a);
console.log(a[1],a[8])