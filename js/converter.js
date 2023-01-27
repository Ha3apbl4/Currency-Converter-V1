const RATES = {
	usd: 0.027,
	eur: 0.025,
}
function convert({ uah, currency }) {
	if (!RATES[currency]) {
		return null
	}
	return uah * RATES[currency]
}
