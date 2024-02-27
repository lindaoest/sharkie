class BubblePoison extends MoveableObject {
	world;

	constructor(position_x, position_y) {
		super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
		this.height = 60;
		this.width = 60;
		this.position_x = position_x;
		this.position_y = position_y;

		this.animate();
	}

	animate() {
		setInterval(() => {
			this.position_x += 10;
			this.position_y -= 2;
		}, 100);
	}
}