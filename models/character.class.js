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
	IMAGES_DEAD = [
		'img/1.Sharkie/6.dead/1.Poisoned/1.png',
		'img/1.Sharkie/6.dead/1.Poisoned/2.png',
		'img/1.Sharkie/6.dead/1.Poisoned/3.png',
		'img/1.Sharkie/6.dead/1.Poisoned/4.png',
		'img/1.Sharkie/6.dead/1.Poisoned/5.png',
		'img/1.Sharkie/6.dead/1.Poisoned/6.png',
		'img/1.Sharkie/6.dead/1.Poisoned/7.png',
		'img/1.Sharkie/6.dead/1.Poisoned/8.png',
		'img/1.Sharkie/6.dead/1.Poisoned/9.png',
		'img/1.Sharkie/6.dead/1.Poisoned/10.png',
		'img/1.Sharkie/6.dead/1.Poisoned/11.png',
		'img/1.Sharkie/6.dead/1.Poisoned/12.png',
	];
	world;
	coins = 0;
	poison = 0;
	swimming_sound = new Audio('audio/swim.mp3');

	constructor() {
		super().loadImage('img/1.Sharkie/1.IDLE/1.png');
		this.loadImages(this.IMAGES_SWIMMING);
		this.loadImages(this.IMAGES_DEAD);
		this.loadImages(this.IMAGES_HITTINGPUFFERFISH);
		this.height = 300;

		this.animate();
		// this.collision_pufferfish();
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
			if(this.world.keyboard.key_up && this.position_y > -140) {
				this.position_y -= 10;
				this.swimming_sound.play();
			}
			if(this.world.keyboard.key_down && this.position_y < 250) {
				this.position_y += 10;
				this.swimming_sound.play();
			}
			this.world.camera_x = -this.position_x;
		}, 1000 / 60);

		setInterval(() => {
			if(this.isDead()) {
				//Dead Animation
				this.playAnimation(this.IMAGES_DEAD);
			} else if(this.isHurt()) {
				this.playAnimation(this.IMAGES_HITTINGPUFFERFISH);
			} else {
				if(this.world.keyboard.key_right || this.world.keyboard.key_left || this.world.keyboard.key_up || this.world.keyboard.key_down) {
					//Swim Animation
					this.playAnimation(this.IMAGES_SWIMMING);
				}
			}
		}, 100);
	}
}