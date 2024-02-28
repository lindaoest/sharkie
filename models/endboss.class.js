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
	IMAGES_FLOATING = [
		'img/2.Enemy/3 Final Enemy/2.floating/1.png',
		'img/2.Enemy/3 Final Enemy/2.floating/2.png',
		'img/2.Enemy/3 Final Enemy/2.floating/3.png',
		'img/2.Enemy/3 Final Enemy/2.floating/4.png',
		'img/2.Enemy/3 Final Enemy/2.floating/5.png',
		'img/2.Enemy/3 Final Enemy/2.floating/6.png',
		'img/2.Enemy/3 Final Enemy/2.floating/7.png',
		'img/2.Enemy/3 Final Enemy/2.floating/8.png',
		'img/2.Enemy/3 Final Enemy/2.floating/9.png',
		'img/2.Enemy/3 Final Enemy/2.floating/10.png',
		'img/2.Enemy/3 Final Enemy/2.floating/11.png',
		'img/2.Enemy/3 Final Enemy/2.floating/12.png',
		'img/2.Enemy/3 Final Enemy/2.floating/13.png',
	];
	IMAGES_HURT = [
		'img/2.Enemy/3 Final Enemy/Hurt/1.png',
		'img/2.Enemy/3 Final Enemy/Hurt/2.png',
		'img/2.Enemy/3 Final Enemy/Hurt/3.png',
		'img/2.Enemy/3 Final Enemy/Hurt/4.png',
	];
	IMAGES_DEAD = [
		'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
		'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
		'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
		'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
		'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png'
	];

	constructor() {
		super().loadImage('img/2.Enemy/3 Final Enemy/1.Introduce/1.png');
		this.loadImages(this.IMAGES_SWIMMING);
		this.loadImages(this.IMAGES_FLOATING);
		this.loadImages(this.IMAGES_HURT);
		this.loadImages(this.IMAGES_DEAD);
		this.position_x = 2500;
		this.position_y = 0;
		this.animate();
	}

	animate() {
		let i = 0;
		setInterval(() => {
			if(!this.firstContact) {
				this.playAnimation(this.IMAGES_SWIMMING);
			} else if(this.endbossHitted) {
				this.playHurtAnimation();
			} else if(this.energy == 0) {
				this.playAnimation(this.IMAGES_DEAD);
				this.endbossHitted = false;
			} else {
				this.playAnimation(this.IMAGES_FLOATING);
			}
			i++;



			//if character.position_x > 2000 && firstContact dann setzte i auf 0 und firstCotnact auf true
		}, 200);
	}

	playHurtAnimation() {
		this.playAnimation(this.IMAGES_HURT);
		setTimeout(() => {
			this.endbossHitted = false;
		}, 2000);
	}
}