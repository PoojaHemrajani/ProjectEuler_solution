let val = 0,val1=1,newterm=0;
let n=prompt('enter number for iterations of fibonacci');
for (var i = 1; i <= n; i++) {
	console.log(val);
    newterm = val+val1;
    val= val1;
    val1 = newterm
	}