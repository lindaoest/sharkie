class Jellyfish extends MoveableObject {
	IMAGES_SWIMMING = [
		'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
		'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
		'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
		'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
	];
	IMAGES_DEAD_YELLOW = [
		'img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png',
		'img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png',
		'img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png',
		'img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png',
	];

	constructor(spezies, position_x, position_y) {
		super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');
		this.loadImages(this.IMAGES_SWIMMING);
		this.loadImages(this.IMAGES_DEAD_YELLOW);
		this.position_x = position_x;
		this.position_y = position_y;
		this.width = 70;
		this.height = 90;
		this.enemy_spezies = spezies;

		this.animate();
	}

	/**
	 * Function to animate the game by moving left and playing the jellyfish animation at regular intervals.
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
	 * Handles the movement of the jellyfish.
	 * Moves the jellyfish up or down depending on its current direction and position.
	 * @function movementJellyfish
	*/
	movementJellyfish() {
		if(this.isMovingDown()) {
			this.position_y += 5;
		} else if(this.isMovingUp()) {
			if(this.position_y <= 180) {
				this.changeDirection = false;
			} else {
				this.changeDirection = true;
			}
			this.position_y -= 5;
		}
	}

	/**
	 * Manages the animation of the jellyfish.
	 * Plays the appropriate animation based on whether the jellyfish is dead or alive.
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
	 * Checks if the jellyfish is moving down.
	 * @returns {boolean} True if the jellyfish is moving down, otherwise false.
	 * @function isMovingDown
	*/
	isMovingDown() {
		return this.position_y < 240 && !this.changeDirection;
	}

	/**
	 * Checks if the jellyfish is moving up.
	 * @returns {boolean} True if the jellyfish is moving up, otherwise false.
	 * @function isMovingUp
	*/
	isMovingUp() {
		return this.position_y >= 240 || this.changeDirection;
	}

	/**
	 * Executes the dead animation for the jellyfish.
	 * Plays the dead animation and adjusts the position accordingly.
	 * @function deadAnimation
	*/
	deadAnimation() {
		this.playAnimation(this.IMAGES_DEAD_YELLOW);
		this.position_x += 20;
		this.position_y += -20;
	}
}