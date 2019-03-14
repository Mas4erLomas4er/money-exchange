// PLEASE DON'T change function name
module.exports = function makeExchange (currency) {
	let exchangeObj = {};
	if ( currency <= 10000 ) {
		let oneTypeOfCoins = (coinType, coinTypeValue) => {
			let coinCount = Math.floor(currency / coinTypeValue);
			if ( coinCount > 0 ) {
				exchangeObj[ coinType ] = coinCount;
				currency -= coinCount * coinTypeValue;
			}
		};
		oneTypeOfCoins('H', 50);
		oneTypeOfCoins('Q', 25);
		oneTypeOfCoins('D', 10);
		oneTypeOfCoins('N', 5);
		oneTypeOfCoins('P', 1);
	} else exchangeObj.error = "You are rich, my friend! We don't have so much coins for exchange";
	return exchangeObj;
};
