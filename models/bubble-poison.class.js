class BubblePoison extends MoveableObject {
	isWithPoison;

	constructor(position_x, position_y, img, isWithPoison) {
		super().loadImage(img);
		this.height = 60;
		this.width = 60;
		this.position_x = position_x;
		this.position_y = position_y;
		this.isWithPoison = isWithPoison;

		this.animate();
	}

	animate() {
		setInterval(() => {
			this.position_x += 10;
			this.position_y -= 2;
		}, 100);
	}
}