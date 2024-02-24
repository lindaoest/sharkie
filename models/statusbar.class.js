class Statusbar extends DrawableObject {
	IMAGES = [
		'img/4. Marcadores/green/Life/0_  copia 3.png',
		'img/4. Marcadores/green/Life/20_ copia 4.png',
		'img/4. Marcadores/green/Life/40_  copia 3.png',
		'img/4. Marcadores/green/Life/60_  copia 3.png',
		'img/4. Marcadores/green/Life/80_  copia 3.png',
		'img/4. Marcadores/green/Life/100_  copia 2.png',
	]
	percentage = 100;
	world;

	constructor(img, x, y) {
		super();
		this.loadImages(this.IMAGES)
		this.setPercentage(100);
		this.height = 50;
		this.width = 170;
		this.position_x = x;
		this.position_y = y;

		this.animate();

	}

	animate() {
		setInterval(() => {
			if(this.world.keyboard.key_right && this.position_x < this.world.level.level_end_x) {
				//Change x position
				this.position_x += 10;
			}
			if(this.world.keyboard.key_left && this.position_x > 0) {
				this.position_x -= 10;
			}
		}, 1000 / 60);
	}

	setPercentage(percentage) {
		this.percentage = percentage;
		let path = this.IMAGES[this.resolveImageIndex()];
		this.img = this.imageCache[path]
	}

	resolveImageIndex() {
		if(this.percentage == 100) {
			return 5;
		} else if(this.percentage > 80) {
			return 4;
		} else if(this.percentage > 60) {
			return 3;
		} else if(this.percentage > 40) {
			return 2;
		} else if(this.percentage > 20) {
			return 1;
		} else {
			return 0;
		}
	}
}