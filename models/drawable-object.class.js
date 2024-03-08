class DrawableObject {
	position_x = 30;
	position_y = 50;
	img;
	width = 300;
	height = 500;
	imageCache = {};
	currentImage = 0;

	/**
	 * Function to load an image from the specified path.
	 * @function loadImage
	 * @param {string} path - The path to the image to be loaded.
	*/
	loadImage(path) {
		this.img = new Image();
		this.img.src = path;
	}

	/**
	 * Function to load an array of images and store them in the image cache.
	 * @function loadImages
	 * @param {string[]} arr - Array of image paths to be loaded.
	*/
	loadImages(arr) {
		arr.forEach(path => {
			let img = new Image();
			img.src = path;
			this.imageCache[path] = img;
		});
	}

	/**
	 * Function to play the animation using the specified images.
	 * @function playAnimation
	 * @param {string[]} img - Array of image paths representing the animation frames.
	*/
	playAnimation(img) {
		let i = this.currentImage % img.length;
		let path = img[i];
		this.img = this.imageCache[path];
		this.currentImage++;
	}
}
