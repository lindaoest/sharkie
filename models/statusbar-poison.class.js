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
}