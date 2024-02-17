class MoveableObject {
	position_x = 30;
	position_y = 50;
	img;
	width = 300;
	height = 500;
	imageCache = {};
	speed = 0.15;

	loadImage(path) {
		this.img = new Image();
		this.img.src = path;
	}


	loadImages(arr) {
		arr.forEach(path => {
			let img = new Image();
			img.src = path;
			this.imageCache[path] = img;
		});
	}

	moveLeft() {
		setInterval(() => {
			//this.position_x -= 0.15 + Math.random() * 0.25;
			this.position_x -= this.speed;
		}, 1000 / 60);
	}

	moveRight() {

	}
}