class Jellyfish_Purple extends MoveableObject {
	IMAGES_SWIMMING = [
		'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
		'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
		'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
		'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
	];
	IMAGES_DEAD_PURPLE = [
		'img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png',
		'img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png',
		'img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png',
		'img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png',
	];

	constructor(spezies, position_x, position_y) {
		super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
		this.loadImages(this.IMAGES_SWIMMING);
		this.loadImages(this.IMAGES_DEAD_PURPLE);
		this.position_x = position_x;
		this.position_y = position_y;
		this.width = 70;
		this.height = 90;
		this.enemy_spezies = spezies;

		this.animate();
	}

	/**
	 * Initiates animation for the game.
	 * @function animate
	 */
	animate() {
		this.moveLeft();
		this.speed = 0.15;
		setInterval(() => this.playJellyfish(), 200);
	}

	/**
	 * Function to handle the movement and animation of the jellyfish if the game is not paused.
	 * @function playJellyfish
	*/
	playJellyfish() {
		if(!pauseGame) {
			this.movementJellyfish();
			this.jellyfishDeadAnimation();
		}
	}

	/**
	 * Function to handle the movement of the jellyfish based on its direction.
	 * @function movementJellyfish
	*/
	movementJellyfish() {
		if(this.isMovingDown()) {
			this.position_y += 5;
		} else if(this.isMovingUp()) {
			if(this.position_y <= 30) {
				this.changeDirection = false;
			} else {
				this.changeDirection = true;
			}
			this.position_y -= 5;
		}
	}

	/**
	 * Function to handle the animation of the jellyfish when it is dead or alive.
	 * @function jellyfishDeadAnimation
	*/
	jellyfishDeadAnimation() {
		if(this.jellyfishDead) {
			this.deadAnimation();
		} else {
			this.playAnimation(this.IMAGES_SWIMMING)
		}
	}

	/**
	 * Check if the jellyfish is moving down based on its position and direction.
	 * @function isMovingDown
	 * @returns {boolean} True if the jellyfish is moving down, false otherwise.
	*/
	isMovingDown() {
		return this.position_y < 350 && !this.changeDirection;
	}

	/**
	 * Check if the jellyfish is moving up based on its position and direction.
	 * @function isMovingUp
	 * @returns {boolean} True if the jellyfish is moving up, false otherwise.
	*/
	isMovingUp() {
		return this.position_y >= 350 || this.changeDirection;
	}

	/**
	 * Function to play the dead animation for the jellyfish and update its position.
	 * @function deadAnimation
	*/
	deadAnimation() {
		this.playAnimation(this.IMAGES_DEAD_PURPLE);
		this.position_x += 20;
		this.position_y += -20;
	}
}