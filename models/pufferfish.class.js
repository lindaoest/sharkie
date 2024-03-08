class Pufferfish extends MoveableObject {
	IMAGES_SWIMMING = [
		'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
	];
	IMAGES_DEAD = [
		'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png',
		'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png',
		'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png',
	];

	constructor(spezies, position_x, position_y) {
		super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
		this.loadImages(this.IMAGES_SWIMMING);
		this.loadImages(this.IMAGES_DEAD);

		this.position_x = 300 + Math.random() * position_x;
		this.position_y = Math.random() * position_y;
		this.width = 50;
		this.height = 60;
		this.enemy_spezies = spezies;

		this.animate();
	}

	/**
	 * Initiates animation for the character, including movement and pufferfish animation.
	 * Character moves left and adjusts speed randomly. Pufferfish animation is played at a fixed interval.
	 * @function animate
	 */
	animate() {
		this.moveLeft();
		this.speed = 0.15 + Math.random() * 0.25;

		setInterval(() => {
			this.playPufferfish();
		}, 200);
	}

	/**
	 * Plays the animation for the pufferfish.
	 * If the pufferfish is dead, plays the dead animation; otherwise, plays the swimming animation.
	 * Also updates the position of the pufferfish based on the character's movement.
	 * @function playPufferfish
	 */
	playPufferfish() {
		if(!pauseGame) {
			if(this.pufferfishDead) {
				this.deadAnimation();
			} else {
				this.playAnimation(this.IMAGES_SWIMMING);
			}
		}
	}

	/**
	 * Executes the dead animation for the pufferfish.
	 * Plays the dead animation and adjusts the position accordingly.
	 * @function deadAnimation
	 */
	deadAnimation() {
		this.playAnimation(this.IMAGES_DEAD);
		this.position_x -= 40;
		this.position_y -= 40;
	}
}