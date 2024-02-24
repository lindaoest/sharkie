class DrawableObject {
	position_x = 30;
	position_y = 50;
	img;
	width = 300;
	height = 500;
	imageCache = {};
	currentImage = 0;

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

	playAnimation(img) {
		let i = this.currentImage % img.length;
		let path = img[i];
		this.img = this.imageCache[path];
		this.currentImage++;
	}
}
