class Pufferfish_Pink extends MoveableObject {
	IMAGES_SWIMMING = [
		'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png',
	];
	IMAGES_DEAD = [
		'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.2.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.3.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.png',
	];
	diffX;
	diffY;
	stepX;
	stepY;

	constructor(spezies) {
		super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
		this.loadImages(this.IMAGES_SWIMMING);
		this.loadImages(this.IMAGES_DEAD);

		this.position_x = 2500;
		this.position_y = 0;
		this.width = 70;
		this.height = 55;
		this.enemy_spezies = spezies;

		this.animate();
	}

	/**
	 * Animates the pufferfish by continuously playing its swimming animation at a fixed interval.
	 * @function animate
	 */
	animate() {
		setInterval(() => this.playPufferfish(), 200);
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
			this.checkDifferenz();
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