function rep() {
	val = document.getElementById('val').value;
	wor = document.getElementById('word').value;
	sen = document.getElementById('text').value;
	var msg = sen.replaceAll(wor,val);
	document.write(msg);
}