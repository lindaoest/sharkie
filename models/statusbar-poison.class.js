class StatusbarPoison extends DrawableObject {
	IMAGES_POISON = [
		'img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png',
		'img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png',
		'img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png',
		'img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png',
		'img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png',
		'img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png',
	]

	constructor(x, y, percentage) {
		super();
		this.loadImages(this.IMAGES_POISON);
		this.setPercentagePoison(percentage);
		this.height = 50;
		this.width = 170;
		this.position_x = x;
		this.position_y = y;
		this.percentage = percentage;

	}

	/**
	 * Sets the percentage of poison collected and updates the image accordingly.
	 * @param {number} percentage - The percentage of poison collected.
	 * @function setPercentagePoison
	 */
	setPercentagePoison(percentage) {
		this.percentage = percentage;
		let path = this.IMAGES_POISON[this.resolveImageIndex()];
		this.img = this.imageCache[path]
	}

	/**
	 * Resolves the index of the image based on the percentage of poison collected.
	 * @returns {number} The index of the image in the IMAGES_POISON array.
	 * @function resolveImageIndex
	 */
	resolveImageIndex() {
		if(this.percentage == 100) {
			return 5;
		} else if(this.percentage >= 80) {
			return 4;
		} else if(this.percentage >= 60) {
			return 3;
		} else if(this.percentage >= 40) {
			return 2;
		} else if(this.percentage >= 20) {
			return 1;
		} else {
			return 0;
		}
	}
}