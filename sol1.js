let input = prompt('enter number till you want to check prime dividers of 3 & 5');
let a = 0;
for (var i = 1; i <= input; i++) {
    let c = i % 3;
    let d = i % 5;
    if ( c == 0 || d == 0){
    console.log(i);
    a+=i;
}
	//console.log('hello');
}
console.log(a);
alert('sum of prime numbers is'+a);