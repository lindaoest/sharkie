class StatusbarEnergy extends DrawableObject {
	IMAGES_HEART = [
		'img/4. Marcadores/green/Life/0_  copia 3.png',
		'img/4. Marcadores/green/Life/20_ copia 4.png',
		'img/4. Marcadores/green/Life/40_  copia 3.png',
		'img/4. Marcadores/green/Life/60_  copia 3.png',
		'img/4. Marcadores/green/Life/80_  copia 3.png',
		'img/4. Marcadores/green/Life/100_  copia 2.png',
	]

	constructor(x, y, percentage) {
		super();
		this.loadImages(this.IMAGES_HEART);
		this.setPercentageHeart(percentage);
		this.height = 50;
		this.width = 170;
		this.position_x = x;
		this.position_y = y;
		this.percentage = percentage;

	}

	/**
	 * Sets the percentage of hearts collected and updates the image accordingly.
	 * @param {number} percentage - The percentage of hearts collected.
	 * @function setPercentageHeart
	 */
	setPercentageHeart(percentage) {
		this.percentage = percentage;
		let path = this.IMAGES_HEART[this.resolveImageIndex()];
		this.img = this.imageCache[path]
	}
}