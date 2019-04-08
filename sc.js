var x = 3;
var c = 0;
var key = '';
while( key.length < 14 ) {
	var ran = Math.floor(Math.random()*10);
	x += (2 * x) ^ ran;
	if( key.length == 4 || key.length == 10 ) {
		key += '-';
	}

	key += ran;
}

x = x % 10;

key += x;

console.log(key)
