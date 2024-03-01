class Character extends MoveableObject {
	IMAGES_STANDING = [
		'img/1.Sharkie/1.IDLE/1.png',
		'img/1.Sharkie/1.IDLE/2.png',
		'img/1.Sharkie/1.IDLE/3.png',
		'img/1.Sharkie/1.IDLE/4.png',
		'img/1.Sharkie/1.IDLE/5.png',
		'img/1.Sharkie/1.IDLE/6.png',
		'img/1.Sharkie/1.IDLE/7.png',
		'img/1.Sharkie/1.IDLE/8.png',
		'img/1.Sharkie/1.IDLE/9.png',
		'img/1.Sharkie/1.IDLE/10.png',
		'img/1.Sharkie/1.IDLE/11.png',
		'img/1.Sharkie/1.IDLE/12.png',
		'img/1.Sharkie/1.IDLE/13.png',
		'img/1.Sharkie/1.IDLE/14.png',
		'img/1.Sharkie/1.IDLE/15.png',
		'img/1.Sharkie/1.IDLE/16.png',
		'img/1.Sharkie/1.IDLE/17.png',
		'img/1.Sharkie/1.IDLE/18.png',
	];
	IMAGES_TIRED = [
		'img/1.Sharkie/2.Long_IDLE/i1.png',
		'img/1.Sharkie/2.Long_IDLE/I2.png',
		'img/1.Sharkie/2.Long_IDLE/I3.png',
		'img/1.Sharkie/2.Long_IDLE/I4.png',
		'img/1.Sharkie/2.Long_IDLE/I5.png',
		'img/1.Sharkie/2.Long_IDLE/I6.png',
		'img/1.Sharkie/2.Long_IDLE/I7.png',
		'img/1.Sharkie/2.Long_IDLE/I8.png',
		'img/1.Sharkie/2.Long_IDLE/I9.png',
		'img/1.Sharkie/2.Long_IDLE/I10.png',
		'img/1.Sharkie/2.Long_IDLE/I11.png',
		'img/1.Sharkie/2.Long_IDLE/I12.png',
		'img/1.Sharkie/2.Long_IDLE/I13.png',
		'img/1.Sharkie/2.Long_IDLE/I14.png',
	];
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
	IMAGES_HITTINGJELLYFISH = [
		'img/1.Sharkie/5.Hurt/2.Electric_shock/o1.png',
		'img/1.Sharkie/5.Hurt/2.Electric_shock/o2.png',
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
	IMAGES_BUBBLE_POISON = [
		'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
		'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
		'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
		'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
		'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
		'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
		'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
		'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png',
	];
	IMAGES_BUBBLE = [
		'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
		'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
		'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
		'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
		'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
		'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
		'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
	];
	world;
	swimming_sound = new Audio('audio/swim.mp3');

	constructor() {
		super().loadImage('img/1.Sharkie/1.IDLE/1.png');
		this.loadImages(this.IMAGES_STANDING);
		this.loadImages(this.IMAGES_TIRED);
		this.loadImages(this.IMAGES_SWIMMING);
		this.loadImages(this.IMAGES_DEAD);
		this.loadImages(this.IMAGES_HITTINGPUFFERFISH);
		this.loadImages(this.IMAGES_HITTINGJELLYFISH);
		this.loadImages(this.IMAGES_BUBBLE_POISON);
		this.loadImages(this.IMAGES_BUBBLE);
		this.height = 200;
		this.width = 200;

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
				this.playSound();
			}
			if(this.world.keyboard.key_left && this.position_x > 0) {
				this.position_x -= 10;
				this.otherDirection = true;
				this.playSound();
			}
			if(this.world.keyboard.key_up && this.position_y > -140) {
				this.position_y -= 10;
				this.playSound();
			}
			if(this.world.keyboard.key_down && this.position_y < 250) {
				this.position_y += 10;
				this.playSound();
			}
			this.world.camera_x = -this.position_x;
		}, 1000 / 60);

		setInterval(() => {
			if(!this.world.sound_is_muted) {
				sounds.electricity_audio.pause();
			}
			if(this.isDead()) {
				//Dead Animation
				this.playAnimation(this.IMAGES_DEAD);
			} else if(this.isHurt() && this.hitPufferfish()) {
				this.playAnimation(this.IMAGES_HITTINGPUFFERFISH);
			} else if(this.isHurt() && this.hitJellyfish()) {
				if(!this.world.sound_is_muted) {
					sounds.electricity_audio.play();
				}
				this.playAnimation(this.IMAGES_HITTINGJELLYFISH);
			} else if(this.world.keyboard.key_right || this.world.keyboard.key_left || this.world.keyboard.key_up || this.world.keyboard.key_down) {
				//Swim Animation
				this.playAnimation(this.IMAGES_SWIMMING);
			} else if(this.world.keyboard.key_attack) {
				if(this.poison == 0) {
					this.playAnimation(this.IMAGES_BUBBLE);
				} else {
					this.playAnimation(this.IMAGES_BUBBLE_POISON);
				}
			} else {
				if(!this.world.keyboard.key_right && this.timeTired()) {
					this.playAnimation(this.IMAGES_TIRED);
				} else {
					this.playAnimation(this.IMAGES_STANDING);
				}
			}
		}, 200);
	}

	playSound() {
		if(!this.world.sound_is_muted) {
			this.swimming_sound.play();
		}
	}

	timeTired() {
		let timepassedStanding = new Date().getTime() - time_standing;
		timepassedStanding = timepassedStanding / 1000;
		return timepassedStanding > 7;
	}

	getCoin() {
		if(this.coins < 100) {
			this.coins += 3;
		}
	}

	getPoison() {
		if(this.poison < 100) {
			this.poison += 10;
		}
	}
}