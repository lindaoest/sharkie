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

	setPercentageCoins(percentage) {
		this.percentage = percentage;
		let path = this.IMAGES_COINS[this.resolveImageIndex()];
		this.img = this.imageCache[path]
	}

	resolveImageIndex() {
		if(this.percentage == 100) {
			return 5;
		} else if(this.percentage > 80) {
			return 4;
		} else if(this.percentage > 60) {
			return 3;
		} else if(this.percentage > 40) {
			return 2;
		} else if(this.percentage > 20) {
			return 1;
		} else {
			return 0;
		}
	}
}