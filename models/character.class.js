class Character extends MoveableObject {
	IMAGES_SWIMMING = [
		'img/1.Sharkie/3.Swim/1.png',
		'img/1.Sharkie/3.Swim/2.png',
		'img/1.Sharkie/3.Swim/3.png',
		'img/1.Sharkie/3.Swim/4.png',
		'img/1.Sharkie/3.Swim/5.png',
		'img/1.Sharkie/3.Swim/6.png',
	];
	IMAGES_HITTINGPUFFERFISH = [
		'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
		'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
		'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
		'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
	];
	currentImage = 0;
	world;
	swimming_sound = new Audio('audio/swim.mp3');

	constructor() {
		super().loadImage('img/1.Sharkie/1.IDLE/1.png');
		this.loadImages(this.IMAGES_SWIMMING);

		this.animate();
	}

	animate() {
		setInterval(() => {
			this.swimming_sound.pause();
			if(this.world.keyboard.key_right && this.position_x < this.world.level.level_end_x) {
				//Change x position
				this.position_x += 10;
				this.otherDirection = false;
				this.swimming_sound.play();
			}
			if(this.world.keyboard.key_left && this.position_x > 0) {
				this.position_x -= 10;
				this.otherDirection = true;
				this.swimming_sound.play();
			}
			if(this.world.keyboard.key_up) {
				this.position_y -= 10;
				this.swimming_sound.play();
			}
			if(this.world.keyboard.key_down) {
				this.position_y += 10;
				this.swimming_sound.play();
			}
			this.world.camera_x = -this.position_x;
		}, 1000 / 60);

		setInterval(() => {
			if(this.world.keyboard.key_right || this.world.keyboard.key_left || this.world.keyboard.key_up || this.world.keyboard.key_down) {
				//Swim Animation
				let i = this.currentImage % this.IMAGES_SWIMMING.length;
				let path = this.IMAGES_SWIMMING[i];
				this.img = this.imageCache[path];
				this.currentImage++;
			}
		}, 100);
	}
}