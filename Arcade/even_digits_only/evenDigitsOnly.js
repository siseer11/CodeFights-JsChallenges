function evenDigitsOnly(n) {
	return String(n).split('').every(el=>Number(el)%2==0);
}
