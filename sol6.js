let j=0;
let k=0;
let a=0;
for (var i = 1; i <= 100; i++) {
	a = a+i;
	j = i*i;
	k = k+j;
}
a=a*a;
alert(a-k);