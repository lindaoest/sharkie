class Pufferfish extends MoveableObject {
	IMAGES_SWIMMING = [
		'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
	];
	currentImage = 0;

	constructor() {
		super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
		this.loadImages(this.IMAGES_SWIMMING);

		this.position_x = 300 + Math.random() * 500;
		this.position_y = Math.random() * 400;
		this.width = 90;
		this.height = 100;

		this.animate();
	}

	animate() {
		this.moveLeft();
		this.speed = 0.15 + Math.random() * 0.25;

		setInterval(() => {
			let i = this.currentImage % this.IMAGES_SWIMMING.length;
			let path = this.IMAGES_SWIMMING[i];
			this.img = this.imageCache[path];
			this.currentImage++;
		}, 200);
	}
}