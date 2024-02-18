class BackgroundObject extends MoveableObject {

	constructor(imagePath, x, height) {
		super().loadImage(imagePath);

		this.position_x = x;
		this.position_y = 480 - this.height;
		this.width = 720;
		this.height = height;
	}
}