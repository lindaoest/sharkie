class Character extends MoveableObject {
	IMAGES_SWIMMING = [
		'img/1.Sharkie/3.Swim/1.png',
		'img/1.Sharkie/3.Swim/2.png',
		'img/1.Sharkie/3.Swim/3.png',
		'img/1.Sharkie/3.Swim/4.png',
		'img/1.Sharkie/3.Swim/5.png',
		'img/1.Sharkie/3.Swim/6.png',
	];
	currentImage = 0;
	world;
	camera_x;

	constructor() {
		super().loadImage('img/1.Sharkie/1.IDLE/1.png');
		this.loadImages(this.IMAGES_SWIMMING);

		this.animate();
	}

	animate() {
		setInterval(() => {
			if(this.world.key_right) {
				//Change x position
				this.position_x += 10;
				this.otherDirection = false;
			}
			if(this.world.key_left) {
				this.position_x -= 10;
				this.otherDirection = true;
			}
			if(this.world.key_up) {
				this.position_y -= 10;
			}
			if(this.world.key_down) {
				this.position_y += 10;
			}
			this.camera_x = -this.position_x;
		}, 1000 / 60);

		setInterval(() => {
			if(this.world.key_right || this.world.key_left || this.world.key_up || this.world.key_down) {
				//Swim Animation
				let i = this.currentImage % this.IMAGES_SWIMMING.length;
				let path = this.IMAGES_SWIMMING[i];
				this.img = this.imageCache[path];
				this.currentImage++;
			}
		}, 100);
	}
}