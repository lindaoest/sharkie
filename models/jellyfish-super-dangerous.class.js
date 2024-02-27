class Jellyfish_Dangerous extends MoveableObject {
	IMAGES_SWIMMING = [
		'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
		'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
		'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
		'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png',
	];
	enemy_spezies = '';


	constructor(spezies, position_x, position_y) {
		super().loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png');
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
			this.playAnimation(this.IMAGES_SWIMMING)
		}, 200);
	}
}