class Coins extends MoveableObject {
	IMAGES_SPINNING = [
		'img/4. Marcadores/1. Coins/1.png',
		'img/4. Marcadores/1. Coins/2.png',
		'img/4. Marcadores/1. Coins/3.png',
		'img/4. Marcadores/1. Coins/4.png',
	];
	changePosition = 10;

	constructor(x, y) {
		super().loadImage('img/4. Marcadores/1. Coins/1.png');
		this.loadImages(this.IMAGES_SPINNING);
		this.width = 40;
		this.height = 40;
		this.position_x = x;
		this.position_y = y;

		this.animate();
	}

	/**
	 * Function to animate the character by playing a spinning animation at regular intervals if the game is not paused.
	 * @function animate
	*/
	animate() {
		setInterval(() => {
			if(!pauseGame) {
				this.playAnimation(this.IMAGES_SPINNING);
			}
		}, 400);
	}
}