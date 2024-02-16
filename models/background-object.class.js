class BackgroundObject extends MoveableObject {

	constructor(imagePath) {
		super().loadImage(imagePath);

		this.position_x = 0;
		this.position_y = 480 - this.height;
		this.width = 720;
		this.height = 500;
	}
}