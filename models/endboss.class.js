class Endboss extends MoveableObject {
	IMAGES_SWIMMING = [
		'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
		'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
		'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
		'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
		'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
		'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
		'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
		'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
		'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
		'img/2.Enemy/3 Final Enemy/1.Introduce/10.png',
	];

	constructor() {
		super().loadImage('img/2.Enemy/3 Final Enemy/1.Introduce/1.png');
		this.loadImages(this.IMAGES_SWIMMING);
		this.position_x = 2500;
		this.position_y = 0;
		this.animate();
	}

	animate() {
		let i = 0;
		setInterval(() => {
			if(i > 10) {
				this.playAnimation(this.IMAGES_SWIMMING);
			} else {
				this.playAnimation(this.IMAGES_SWIMMING);
			}
			i++;

			//if character.position_x > 2000 && firstContact dann setzte i auf 0 und firstCotnact auf true
		}, 200);
	}
}