class Coins extends MoveableObject {
	IMAGES_SPINNING = [
		'img/4. Marcadores/1. Coins/1.png',
		'img/4. Marcadores/1. Coins/2.png',
		'img/4. Marcadores/1. Coins/3.png',
		'img/4. Marcadores/1. Coins/4.png',
	];
	currentImage = 0;
	changePosition = 10;

	constructor(x, y) {
		super().loadImage('img/4. Marcadores/1. Coins/1.png');
		this.loadImages(this.IMAGES_SPINNING);
		this.width = 40;
		this.height = 40;
		this.position_x = x;
		this.position_y = y;

		this.animate();
	}

	animate() {
		setInterval(() => {
			let i = this.currentImage % this.IMAGES_SPINNING.length;
			let path = this.IMAGES_SPINNING[i];
			this.img = this.imageCache[path];
			this.currentImage++;
		}, 400);
	}
}