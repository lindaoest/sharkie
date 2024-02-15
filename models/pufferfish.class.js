class Pufferfish extends MoveableObject {

	constructor() {
		super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');

		this.position_x = 300 + Math.random() * 500;
		this.position_y = Math.random() * 400;
		this.width = 90;
		this.height = 100;
	}
}