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
	enemy_spezies = '';

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

	animate() {
		this.moveLeft();
		this.speed = 0.15 + Math.random() * 0.25;

		setInterval(() => {
			if(this.pufferfishDead) {
				this.playAnimation(this.IMAGES_DEAD);
				this.position_x -= 40;
				this.position_y -= 40;
			} else {
				this.playAnimation(this.IMAGES_SWIMMING);
			}
		}, 200);
	}
}