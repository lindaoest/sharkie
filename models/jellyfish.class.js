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

	animate() {
		this.moveLeft();
		this.speed = 0.15;

		setInterval(() => this.playJellyfish(), 200);
	}

	playJellyfish() {
		if(!pauseGame) {
			this.movementJellyfish();
			this.jellyfishDeadAnimation();
		}
	}

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

	jellyfishDeadAnimation() {
		if(this.jellyfishDead) {
			this.deadAnimation();
		} else {
			this.playAnimation(this.IMAGES_SWIMMING)
		}
	}

	isMovingDown() {
		return this.position_y < 240 && !this.changeDirection;
	}

	isMovingUp() {
		return this.position_y >= 240 || this.changeDirection;
	}

	deadAnimation() {
		this.playAnimation(this.IMAGES_DEAD_YELLOW);
		this.position_x += 20;
		this.position_y += -20;
	}
}