function fibuntil (target) {
let a = 0, b = 1
   
console.log (a)
if (target === 0) return;
   
console.log (b)
if (target === 1) return;
   
let nextfib = a + b;
while (nextfib <= target) {
console.log (nextfib);
a = b
b = nextfib
nextfib = a + b
}
}
fibuntil (1000000)
