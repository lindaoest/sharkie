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
	enemy_spezies = '';
	changeDirection = false;


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

	animate() {
		this.moveLeft();
		this.speed = 0.15;

		setInterval(() => {
			if(this.position_y < 350 && !this.changeDirection) {
				this.position_y += 5;
			} else if(this.position_y >= 350 || this.changeDirection) {
				if(this.position_y <= 30) {
					this.changeDirection = false;
				} else {
					this.changeDirection = true;
				}
				this.position_y -= 5;
			}
			if(this.jellyfishDead) {
				this.playAnimation(this.IMAGES_DEAD_PURPLE);
				this.position_x += 20;
				this.position_y += -20;
			} else {
				this.playAnimation(this.IMAGES_SWIMMING)
			}
		}, 200);
	}
}