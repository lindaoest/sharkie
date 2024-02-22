class MoveableObject {
	position_x = 30;
	position_y = 50;
	img;
	width = 300;
	height = 500;
	imageCache = {};
	speed = 0.15;
	otherDirection = false;
	energy = 100;
	isDead = false;
	hitted_by_pufferfish = false;

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

	// this.character.isColliding(this.pufferfish)
	// isColliding (obj) {
	// 	return  (this.position_x + this.width) >= obj.position_x && this.position_x <= (obj.position_x + obj.width) &&
	// 			(this.position_y + this.offsetposition_y + this.height) >= obj.position_y &&
	// 			(this.position_y + this.offsetposition_y) <= (obj.position_y + obj.height) &&
	// 			obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

	// }

	//Berechnung ob sich die Rechtecke vom Character und den Enemies sich überkreuzen
	isColliding (obj) {
		return  this.position_x + this.width >= obj.position_x &&
				this.position_x <= obj.position_x &&
				this.position_y + this.height >= obj.position_y &&
				this.position_y <= obj.position_y + obj.height
	}
}