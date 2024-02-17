class MoveableObject {
	position_x = 30;
	position_y = 50;
	img;
	width = 300;
	height = 500;
	imageCache = {};

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

	// constructor(position_x, position_y, img) {
	// 	this.position_x = position_x;
	// 	this.position_y = position_y;
	// 	this.img = img;
	// }

	moveRight() {

	}
}