var x = 3;
var key = '';
while( key.length < 14 ) {
	var ran = Math.floor(Math.random()*10);
	x += (2 * x) ^ ran;
	if( key.length == 4 || key.length == 10 ) {
		key += '-';
	}

	key += ran;
}

key += x % 10;

console.log(key)
