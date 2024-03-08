class Poison extends MoveableObject {
	IMAGES_POISON = [
		'img/4. Marcadores/Posión/Animada/1.png',
		'img/4. Marcadores/Posión/Animada/2.png',
		'img/4. Marcadores/Posión/Animada/3.png',
		'img/4. Marcadores/Posión/Animada/4.png',
		'img/4. Marcadores/Posión/Animada/5.png',
		'img/4. Marcadores/Posión/Animada/6.png',
		'img/4. Marcadores/Posión/Animada/7.png',
		'img/4. Marcadores/Posión/Animada/8.png',
	];
	animatedGlass = false;

	constructor(img, x, y, animatedGlass) {
		super().loadImage(img);
		this.loadImages(this.IMAGES_POISON);
		this.width = 80;
		this.height = 100;
		this.position_x = x;
		this.position_y = y;
		this.animatedGlass = animatedGlass;

		if(this.animatedGlass) {
			this.animate();
		}
	}

	/**
	 * Animates the character by continuously playing the poison animation at a fixed interval.
	 * @function animate
	 */
	animate() {
		setInterval(() => {
			if(!pauseGame) {
				this.playAnimation(this.IMAGES_POISON);
			}
		}, 200);
	}
}