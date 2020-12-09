// 1) 
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

var sum = 0;
for (var i = 3; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}
console.log('Sum:', sum);

// condensed version of above
// starting at 2, simply saves running 2 cycles
var sum=0, i=2;
while(i++,i<1000) { sum += (i % 3 && i % 5) ? 0 : i; } 
console.log(sum);

