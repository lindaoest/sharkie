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

	/**
	 * Resolves the index of the image based on the percentage of hearts collected.
	 * @returns {number} The index of the image in the IMAGES_HEART array.
	 * @function resolveImageIndex
	 */
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