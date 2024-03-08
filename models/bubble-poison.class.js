class BubblePoison extends MoveableObject {
	isWithPoison;
	directionBubble;

	constructor(position_x, position_y, img, isWithPoison, directionBubble) {
		super().loadImage(img);
		this.height = 60;
		this.width = 60;
		this.position_x = position_x;
		this.position_y = position_y;
		this.isWithPoison = isWithPoison;
		this.directionBubble = directionBubble;

		this.animate();
	}

	/**
	 * Function to animate the object's position.
	 * @function animate
	*/
	animate() {
		setInterval(() => {
			if(this.directionBubble.includes('otherDirection')) {
				this.position_x -= 10;
			} else {
				this.position_x += 10;
			}
			this.position_y -= 2;
		}, 100);
	}
}