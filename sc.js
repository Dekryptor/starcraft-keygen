var x = 3;
var c = 0;
var key = '';
while( c < 12 ) {
	var ran = Math.floor(Math.random()*10);
	x += (2 * x) ^ ran;
	if( c == 4 || c == 9 ) {
		key += '-';
	}

	key += ran;
	c++;
}

x = x % 10;

key += x;

console.log(key)
// document.write(key);