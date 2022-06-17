let fib1 = 1;
let fib2 = 1;
let fibNew = 0;
let seq = [];
for(let i = 0; i<5; i++){
  fibNew = fib1 + fib2;
  fib1 = fib2;
  fib2 = fibNew;
  seq.push(fibNew);
}
console.log(seq);