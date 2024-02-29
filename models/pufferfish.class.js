class Pufferfish extends MoveableObject {
	IMAGES_SWIMMING = [
		'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
	];
	enemy_spezies = '';

	constructor(spezies, position_x, position_y) {
		super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
		this.loadImages(this.IMAGES_SWIMMING);

		this.position_x = 300 + Math.random() * position_x;
		this.position_y = Math.random() * position_y;
		this.width = 50;
		this.height = 60;
		this.enemy_spezies = spezies;

		this.animate();
	}

	animate() {
		this.moveLeft();
		this.speed = 0.15 + Math.random() * 0.25;

		setInterval(() => {
			this.playAnimation(this.IMAGES_SWIMMING);
		}, 200);
	}
}