class Jellyfish extends MoveableObject {
	IMAGES_SWIMMING = [
		'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
		'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
		'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
		'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
	];
	currentImage = 0;


	constructor() {
		super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');
		this.loadImages(this.IMAGES_SWIMMING);
		this.position_x = 300 + Math.random() * 500;
		this.position_y = Math.random() * 400;
		this.width = 110;
		this.height = 130;

		this.animate();
	}

	animate() {
		this.moveLeft();
		this.speed = 0.15 + Math.random() * 1;

		setInterval(() => {
			let i = this.currentImage % this.IMAGES_SWIMMING.length;
			let path = this.IMAGES_SWIMMING[i];
			this.img = this.imageCache[path];
			this.currentImage++;
		}, 200);
	}
}