class BubblePoison extends MoveableObject {
	world;

	constructor() {
		super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
		this.height = 60;
		this.width = 60;

		this.animate();
	}

	animate() {
		setInterval(() => {
			this.position_x = (this.world.character.position_x + this.world.character.width) - 40;
			this.position_y = (this.world.character.position_y + this.world.character.height) - 90;
			if(this.world.keyboard.key_attack) {
				this.position_x += 10;
				this.position_y -= 2;
			}
		}, 100);
	}
}