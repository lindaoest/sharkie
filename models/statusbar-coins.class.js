class StatusbarCoins extends DrawableObject {
	IMAGES_COINS = [
		'img/4. Marcadores/green/Coin/0_  copia 4.png',
		'img/4. Marcadores/green/Coin/20_  copia 2.png',
		'img/4. Marcadores/green/Coin/40_  copia 4.png',
		'img/4. Marcadores/green/Coin/60_  copia 4.png',
		'img/4. Marcadores/green/Coin/80_  copia 4.png',
		'img/4. Marcadores/green/Coin/100_ copia 4.png',
	]

	constructor(x, y, percentage) {
		super();
		this.loadImages(this.IMAGES_COINS);
		this.setPercentageCoins(percentage);
		this.height = 50;
		this.width = 170;
		this.position_x = x;
		this.position_y = y;
		this.percentage = percentage;

	}

	/**
	 * Sets the percentage of coins collected and updates the image accordingly.
	 * @param {number} percentage - The percentage of coins collected.
	 * @function setPercentageCoins
	 */
	setPercentageCoins(percentage) {
		this.percentage = percentage;
		let path = this.IMAGES_COINS[this.resolveImageIndex()];
		this.img = this.imageCache[path]
	}
}