class Poison extends MoveableObject {

	constructor(img, x, y) {
		super().loadImage(img);
		this.width = 80;
		this.height = 100;
		this.position_x = x;
		this.position_y = y;
	}
}