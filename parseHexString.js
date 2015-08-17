
function parseHexString(theString){
	theString = theString.split('');
	var len = theString.length;

	// "111" is not a valid hex encoding.
	if (len % 2 != 0) {
		console.log("hexBinary needs to be even-length: " + theString);
		return ;
	}

	var out = new Int8Array(len / 2);
	for (var i = 0; i < len; i += 2) {
		var h = hexToBin(theString[i]);
		var l = hexToBin(theString[i+1]);
		if (h == -1 || l == -1) {
			console.log("contains illegal character for hexBinary: " + theString);
			return ;
		}
		out[i / 2] = (h * 16 + l);
	}

	return out;

}

function hexToBin(ch) {
	ch = ch.charCodeAt(0);
	var zero = '0'.charCodeAt(0);
	var nine = '9'.charCodeAt(0);
	var capA = 'A'.charCodeAt(0);
	var capF = 'F'.charCodeAt(0);
	var smalla = 'a'.charCodeAt(0);
	var smallf = 'f'.charCodeAt(0);
	if (zero <= ch && ch <= nine) {
		return ch - zero;
	}
	if (capA <= ch && ch <= capF) {
		return ch - capA + 10;
	}
	if (smalla <= ch && ch <= smallf) {
		return ch - smalla + 10;
	}
	return -1;
}