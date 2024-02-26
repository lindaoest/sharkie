class Jellyfish_Purple extends MoveableObject {
	IMAGES_SWIMMING = [
		'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
		'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
		'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
		'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
	];
	enemy_spezies = '';


	constructor(spezies, position_x, position_y) {
		super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
		this.loadImages(this.IMAGES_SWIMMING);
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
			if(this.position_y < 350) {
				this.position_y += 5;
			} else if(this.position_y >= 350) {
				this.position_y -= 5;
			}
			console.log(this.position_y);
			this.playAnimation(this.IMAGES_SWIMMING)
		}, 200);
	}
}