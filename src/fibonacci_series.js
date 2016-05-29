'use strict';
function fibonacci_series(n) {
    var a = [0,1];
    var result = fun(n-1,a);
    return result;
}

function fun(n,a){
  if (n == 0)
	return a;
  a.push(a[a.length-1]+a[a.length-2]);
  fun(n-1,a);
  return a;
}
module.exports = fibonacci_series;
