class MoveableObject extends DrawableObject {
	speed = 0.15;
	otherDirection = false;
	energy = 100;
	lastHit = 0;
	enemy_spezies = '';
	jellyfishDead = false;
	pufferfishDead = false;
	firstContact = false;
	endbossHitted = false;
	coins = 0;
	poison = 0;
	positionCharacterX;
	positionCharacterY;
	hurtPufferfish = false;
	bubbleOtherDirection = false;

	offset = {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};

	moveLeft() {
		setInterval(() => {
			//this.position_x -= 0.15 + Math.random() * 0.25;
			this.position_x -= this.speed;
		}, 1000 / 60);
	}

	// this.character.isColliding(this.pufferfish)
	//Berechnung ob sich die Rechtecke vom Character und den Enemies sich überkreuzen
	isColliding (obj) {
		return  (this.position_x + this.width) - this.offset.right >= obj.position_x &&
				this.position_x + this.offset.left <= (obj.position_x + obj.width) &&
				(this.position_y + this.height)  - this.offset.bottom >= obj.position_y &&
				(this.position_y + this.offset.top) <= (obj.position_y + obj.height) //&&
				//obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

	}

	hit(energy, spezies) {
		this.energy -= energy;
		// console.log('Collision', this.energy);
		if(this.energy < 0) {
			this.energy = 0;
		} else {
			this.lastHit = new Date().getTime();
			this.enemy_spezies = spezies;
		}
	}

	isHurt() {
		//Differenz in Sekunden
		let timepassed = new Date().getTime() - this.lastHit;
		timepassed = timepassed / 1000;
		return timepassed < 1; //gibt true aus oder false
	}

	hitPufferfish() {
		if(this.enemy_spezies == 'pufferfish') {
			return this.enemy_spezies === 'pufferfish';
		}
	}

	hitJellyfish() {
		if(this.enemy_spezies == 'jellyfish') {
			return this.enemy_spezies === 'jellyfish';
		}
	}

	jellyfishIsHitted() {
		this.jellyfishDead = true;
	}

	pufferfishIsHitted() {
		this.pufferfishDead = true;
	}

	// returned entweder true oder false
	isDead() {
		return this.energy == 0;
	}

	firstContactEndboss() {
		this.firstContact = true;
	}

	endbossIsHitted() {
		this.endbossHitted = true;
	}
}