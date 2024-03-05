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
	IMAGES_ATTACKPUFFERFISH = [
		'img/1.Sharkie/4.Attack/Fin slap/1.png',
		'img/1.Sharkie/4.Attack/Fin slap/2.png',
		'img/1.Sharkie/4.Attack/Fin slap/3.png',
		'img/1.Sharkie/4.Attack/Fin slap/4.png',
		'img/1.Sharkie/4.Attack/Fin slap/5.png',
		'img/1.Sharkie/4.Attack/Fin slap/6.png',
		'img/1.Sharkie/4.Attack/Fin slap/7.png',
		'img/1.Sharkie/4.Attack/Fin slap/8.png',
	]
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

	constructor() {
		super().loadImage('img/1.Sharkie/1.IDLE/1.png');
		this.loadImages(this.IMAGES_STANDING);
		this.loadImages(this.IMAGES_TIRED);
		this.loadImages(this.IMAGES_SWIMMING);
		this.loadImages(this.IMAGES_DEAD);
		this.loadImages(this.IMAGES_HITTINGPUFFERFISH);
		this.loadImages(this.IMAGES_HITTINGJELLYFISH);
		this.loadImages(this.IMAGES_ATTACKPUFFERFISH);
		this.loadImages(this.IMAGES_BUBBLE_POISON);
		this.loadImages(this.IMAGES_BUBBLE);
		this.height = 200;
		this.width = 200;

		this.offset = {
			top: 100,
			right: 40,
			bottom: 50,
			left: 40
		};

		this.animate();
	}

	animate() {
		setInterval(() => this.moveCharacter(), 1000 / 60);
		setInterval(() => this.playCharacter(), 200);
	}

	moveCharacter() {
		if(!pauseGame) {
			sounds.sharkie_swimming.pause();
			if(this.canMoveRight()) {
				this.position_x += 10;
				this.otherDirection = false;
				this.bubbleOtherDirection = false;
				this.world.flipBubble = 40;
				this.playSound();
			}
			if(this.canMoveLeft()) {
				this.position_x -= 10;
				this.otherDirection = true;
				this.bubbleOtherDirection = true;
				this.world.flipBubble = 180;
				this.playSound();
			}
			if(this.canMoveUp()) {
				this.position_y -= 10;
				this.playSound();
			}
			if(this.canMoveDown()) {
				this.position_y += 10;
				this.playSound();
			}
			this.world.camera_x = -this.position_x;
		}
	}

	canMoveRight() {
		return this.world.keyboard.key_right && this.position_x < this.world.level.level_end_x;
	}

	canMoveLeft() {
		return this.world.keyboard.key_left && this.position_x > 0;
	}

	canMoveUp() {
		return this.world.keyboard.key_up && this.position_y > -100;
	}

	canMoveDown() {
		return this.world.keyboard.key_down && this.position_y < 330;
	}

	playCharacter() {
		if(!pauseGame) {
			if(!this.world.sound_is_muted) {
				sounds.electricity_audio.pause();
			}
			if(this.isDead()) {
				this.playAnimation(this.IMAGES_DEAD); //Dead Animation
			} else if(this.isSharkieHurtPufferfish()) {
				this.playAnimation(this.IMAGES_HITTINGPUFFERFISH); //Hurt from Pufferfish Animation
			} else if(this.isSharkieHurtJellyfish()) {
				if(!this.world.sound_is_muted) {
					sounds.electricity_audio.play();
				}
				this.playAnimation(this.IMAGES_HITTINGJELLYFISH); //Hurt from Jellyfish Animation
			} else if(this.isSharkieSwimming()) {
				this.playAnimation(this.IMAGES_SWIMMING); //Swim Animation
			} else if(this.isSharkieAttackingJellyfish()) {
				if(this.poison == 0) {
					this.playAnimation(this.IMAGES_BUBBLE);
				} else {
					this.playAnimation(this.IMAGES_BUBBLE_POISON); //Attack Jellyfish Animation
				}
			} else if(this.isSharkieAttackingPufferfish()) {
				this.playAnimation(this.IMAGES_ATTACKPUFFERFISH); //Attack Pufferfish Animation
			} else {
				if(this.isSharkieTired()) {
					this.playAnimation(this.IMAGES_TIRED); //Tired Animation
				} else {
					this.playAnimation(this.IMAGES_STANDING); //Standing Animation
				}
			}
		}
	}

	isSharkieHurtPufferfish() {
		return this.isHurt() && this.hitPufferfish();
	}

	isSharkieHurtJellyfish() {
		return this.isHurt() && this.hitJellyfish();
	}

	isSharkieSwimming() {
		return this.world.keyboard.key_right || this.world.keyboard.key_left || this.world.keyboard.key_up || this.world.keyboard.key_down;
	}

	isSharkieAttackingJellyfish() {
		return this.world.keyboard.key_attack;
	}

	isSharkieAttackingPufferfish() {
		return this.world.keyboard.key_space;
	}

	isSharkieTired() {
		return !this.world.keyboard.key_right && this.timeTired();
	}

	playSound() {
		if(!this.world.sound_is_muted) {
			sounds.sharkie_swimming.play();
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